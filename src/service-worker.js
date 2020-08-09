var cacheName = 'v1';

self.addEventListener('active', event => {
  // Remove unwanted cache
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const resClone = response.clone();

        caches
          .open(cacheName)
          .then(cache => {
            // Add the response to cache
            cache.put(event.request, resClone);
          });

        return response;
      })
      .catch(() => caches.match(event.request).then(response => response))
  )
});
