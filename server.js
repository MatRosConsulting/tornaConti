// Server minimale per Railway: serve index.html e inoltra POST /api/waitlist alla funzione in api/waitlist.js.
const http = require('http');
const fs = require('fs');
const path = require('path');
const waitlist = require('./api/waitlist.js');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const send = (res, code, body, type = 'application/json') => {
  res.writeHead(code, { 'Content-Type': type });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
};

http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');

  if (pathname === '/api/waitlist') {
    // Adattatore in stile Vercel: res.status(n).json(obj)
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (obj) => send(res, res.statusCode || 200, obj);

    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 1e6) req.destroy(); });
    req.on('end', async () => {
      try { req.body = raw ? JSON.parse(raw) : {}; } catch { return send(res, 400, { error: 'JSON non valido' }); }
      try { await waitlist(req, res); } catch (e) { console.error(e); send(res, 500, { error: 'Errore interno' }); }
    });
    return;
  }

  if (pathname === '/' || pathname === '/index.html') {
    return fs.readFile(INDEX, (err, data) => err ? send(res, 500, 'Errore', 'text/plain') : send(res, 200, data, 'text/html; charset=utf-8'));
  }
  send(res, 404, 'Not found', 'text/plain');
}).listen(PORT, () => console.log(`In ascolto sulla porta ${PORT}`));
