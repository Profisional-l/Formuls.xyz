const cacheName = 'formuls-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './images/formulslogo.png',
        // Add other resources to cache
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Удаление старых кэшей при обновлении версии приложения
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(request) {
  return caches.open(cacheName).then((cache) => {
    return fetch(request).then((response) => {
      // Проверка успешности запроса
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      const responseToCache = response.clone();

      // Кэширование нового ресурса
      return cache.put(request, responseToCache).then(() => {
        return response;
      });
    }).catch((error) => {
      console.error('Fetch failed:', error);
      throw error; // Прокидываем ошибку дальше
    });
  });
}
