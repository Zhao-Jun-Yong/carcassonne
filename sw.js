const CACHE = 'carc-v1';
const STATIC = ['./', './index.html', './en.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Cache-first for Google Fonts (immutable assets)
  if (url.hostname.includes('fonts.gstatic.com') || url.hostname.includes('fonts.googleapis.com')) {
    e.respondWith(
      caches.open(CACHE).then(c =>
        c.match(e.request).then(hit =>
          hit || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; })
        )
      )
    );
    return;
  }
  // Network-first for local pages (fallback to cache when offline)
  if (e.request.mode === 'navigate' || STATIC.some(s => url.pathname.endsWith(s.replace('./', '/')))) {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match(e.request))
    );
  }
});
