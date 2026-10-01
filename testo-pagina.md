# TornaConti – Testo della landing page

## Varianti titolo hero (A/B)
Attivabili con `?v=a`, `?v=b`, `?v=c` (il default è il titolo base).

- **Base:** A fine mese, ogni euro incassato deve avere una spiegazione.
- **A – Chiusura mensile:** Chiudi il mese senza inseguire gli incassi che non tornano.
- **B – Scena concreta:** Stripe ti ha accreditato 12.480 €. A quali ordini corrispondono?
- **C – Promessa:** I conti tornano. Da soli.

## 1. Hero
**Titolo:** A fine mese, ogni euro incassato deve avere una spiegazione.
**Sottotitolo:** TornaConti abbina in automatico payout, transazioni e fatture, così la chiusura mensile degli incassi elettronici non dipende più da Excel e da una sola persona. Per aziende italiane tra 2 e 20 milioni di fatturato.
**CTA:** Entra nella lista d'attesa. *Serve meno di 2 minuti. Nessun impegno.*

## 2. Ti riconosci? – Succede ogni fine mese.
1. Stripe ti accredita 12.480 € in banca. Sono 214 transazioni, meno commissioni, meno due rimborsi. A quali ordini corrisponde quella cifra?
2. Il totale su PayPal, quello in banca e quello delle fatture emesse sono tre numeri diversi. Nessuno sa dire subito da dove viene la differenza.
3. Il commercialista chiede chiarimenti su un accredito. Per rispondere serve riaprire estratti conto e file di tre piattaforme.
4. Il file che quadra gli incassi lo sa usare una persona sola. Se è in ferie o se ne va, la chiusura si ferma.

## 3. Quanto ti costa – Fai un conto, con i tuoi numeri.
- **Tempo.** Se il tuo team dedica 10 ore al mese alla quadratura, sono 120 ore l'anno. Quanto costano, sommando il costo di chi le fa?
- **Errori.** Se una commissione non spiegata o un rimborso non registrato passa inosservato, chi se ne accorge? E quando?
- **Ritardi.** Se la chiusura aspetta la quadratura, ogni giorno di attesa è un giorno in cui non sai bene quanto hai incassato davvero.
- **Rischio.** Se il metodo vive in un file e in una testa sola, il costo si vede solo il giorno in cui manca.

*Sono esempi ipotetici, non dati di mercato.*

## 4. Come funzionerà
1. **Collega le fonti:** conto bancario, gateway e marketplace, ordini e fatture emesse.
2. **TornaConti abbina:** ogni accredito aggregato viene scomposto in transazioni, commissioni e rimborsi e collegato a ordini e fatture.
3. **Tu verifichi le eccezioni:** differenze, chargeback, incassi mancanti. Poi esporti per commercialista o gestionale.

*Gateway citati solo come fonti di dati supportate, non come partner ufficiali.*

## 5. Cosa otterrai
- Una chiusura mensile più rapida
- Ore restituite al team
- Commissioni chiare
- Differenze visibili subito
- Meno dipendenza da una persona
- Risposte pronte per il commercialista

## 6. Per chi è / per chi non è
**È per te se:** fatturi 2–20 mln €; incassi molto con pagamenti elettronici; vendi online, multicanale, in abbonamento o su marketplace; la quadratura ti costa tempo o ti preoccupa.
**Non è per te se:** incassi quasi solo con bonifici; hai pochissime transazioni elettroniche; cerchi un gestionale contabile completo; ti serve una soluzione pronta oggi.

## 7. Perché iscriversi ora
TornaConti è in sviluppo. Chi è in lista ottiene: accesso anticipato alla beta, condizioni riservate (in definizione), possibilità di influenzare le funzionalità.

## 8. FAQ
Sicurezza dei dati · Integrazione con banca e gestionale · Commercialista · Tempi · Costi ("in definizione") · Impegno. Testi completi nell'HTML.

## 9. CTA finale + form
**Titolo:** Fai tornare i conti a fine mese.
Campi: email, nome, azienda, ruolo, fatturato, canali (multipla), transazioni/mese, chi riconcilia, ore/mese, metodo, gravità 1–5, campo libero, disponibilità a chiacchierata, consenso privacy (obbligatorio), consenso marketing (facoltativo).

**Ringraziamento:** Sei in lista. Grazie. Ti scriveremo quando l'accesso anticipato sarà disponibile. Conosci un collega che chiude il mese sugli stessi file? Condividi la pagina.

## Segnaposto da completare
- Endpoint del form (`ENDPOINT` nello script)
- Link informativa privacy
- Ragione sociale, P. IVA e contatti nel footer
- Testo sicurezza dati (FAQ)
- Data beta: prevista gennaio/febbraio 2027 (indicativa)

## Eventi di tracciamento (dataLayer, e gtag se presente)
`cta_click` (con `cta_location`), `form_start`, `form_submit`, `scroll_75`, più `share_click` e `ab_variant`.
