// Funzione serverless (Vercel) che inoltra le risposte del modulo a info@tornaconti.it tramite Resend.
// Variabili d'ambiente: RESEND_API_KEY (obbligatoria), MAIL_FROM (es. "TornaConti <noreply@tornaconti.it>", dominio verificato su Resend), MAIL_TO (opzionale).
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const str = (v, max = 500) => String(v ?? '').trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(500).json({ error: 'Server non configurato' });

  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const email = str(b.email, 200);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || b.consenso_privacy !== true)
    return res.status(400).json({ error: 'Dati non validi' });

  const rows = [
    ['Email', email], ['Nome', str(b.nome, 100)], ['Azienda', str(b.azienda, 150)], ['Ruolo', str(b.ruolo, 100)],
    ['Fatturato', str(b.fatturato, 50)],
    ['Canali di incasso', Array.isArray(b.canali) ? b.canali.slice(0, 12).map((c) => str(c, 30)).join(', ') : ''],
    ['Transazioni/mese', str(b.transazioni, 50)], ['Chi riconcilia', str(b.chi_riconcilia, 60)],
    ['Ore/mese', str(b.ore_mese, 30)], ['Metodo attuale', str(b.metodo, 60)],
    ['Gravità (1-5)', str(b.gravita, 2)], ['Parte più fastidiosa', str(b.fastidio, 2000)],
    ['Disponibile a chiacchierata', b.disponibile_intervista ? 'SÌ' : 'no'],
    ['Consenso privacy', 'sì'], ['Consenso marketing', b.consenso_marketing ? 'sì' : 'no'],
    ['Data', str(b.timestamp, 40)], ['Pagina', str(b.pagina, 300)],
  ];
  const html = `<h2>Nuova iscrizione alla lista d'attesa</h2><table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">` +
    rows.map(([k, v]) => `<tr><td style="border-bottom:1px solid #ddd"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${esc(v)}</td></tr>`).join('') + '</table>';
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || 'TornaConti <noreply@tornaconti.it>',
      to: [process.env.MAIL_TO || 'info@tornaconti.it'],
      reply_to: email,
      subject: `Lista d'attesa: ${str(b.azienda, 80) || email} (gravità ${str(b.gravita, 2) || '?'}/5)`,
      html, text,
    }),
  });
  if (!r.ok) { console.error('Resend', r.status, await r.text()); return res.status(502).json({ error: 'Invio non riuscito' }); }
  return res.status(200).json({ ok: true });
};
