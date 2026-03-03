self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('baqala-store').then(function (cache) {
      return cache.addAll([
        '/baqala-store/',
        '/baqala-store/index.html',
        '/baqala-store/admin.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
