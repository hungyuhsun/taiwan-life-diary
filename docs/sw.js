// 台灣生活日記 離線支援：遊戲、字型、語音存在手機裡，沒有網路也能玩。
const CORE = 'twdiary-core-v1', AUD = 'twdiary-audio', FONT = 'twdiary-fonts';
const FILES = ['./', './manifest.json', './icon-192.png', './icon-512.png', './icon-mask.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CORE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('twdiary-') && ![CORE, AUD, FONT].includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

// 有網路時拿最新版（4 秒沒回應就先用存好的），沒網路用存好的
async function fresh(req, cacheName, key) {
  const c = await caches.open(cacheName);
  const net = fetch(req).then(r => { if (r.ok) c.put(key || req, r.clone()); return r; });
  const timer = new Promise(ok => setTimeout(ok, 4000));
  try { const r = await Promise.race([net, timer]); if (r) return r; } catch (e) {}
  const hit = await c.match(key || req, { ignoreSearch: true });
  return hit || net;
}
// 先用存好的，沒有才上網抓並存起來
async function stored(req, cacheName) {
  const c = await caches.open(cacheName);
  const hit = await c.match(req.url, { ignoreSearch: true });
  if (hit) return hit;
  const r = await fetch(req.url, { mode: req.mode === 'navigate' ? 'same-origin' : req.mode, credentials: 'same-origin' });
  if (r.ok || r.type === 'opaque') c.put(req.url, r.clone());
  return r;
}
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') { e.respondWith(stored(req, FONT)); return; }
  if (u.origin !== location.origin) return;
  const base = new URL('./', self.registration.scope).pathname;
  const rel = u.pathname.startsWith(base) ? u.pathname.slice(base.length) : null;
  if (rel === null) return;
  if (rel === 'audio/index.json') { e.respondWith(fresh(req, AUD, new URL('audio/index.json', self.registration.scope).href)); return; }
  if (rel.startsWith('audio/') && rel.endsWith('.mp3')) { e.respondWith(stored(req, AUD)); return; }
  if (rel === '' || rel === 'index.html') { e.respondWith(fresh(req, CORE, new URL('./', self.registration.scope).href)); return; }
  if (FILES.includes('./' + rel)) { e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req))); return; }
});
