// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        './index.html',
        './css/styles.css',
        './images',
        './flip.js',
        './theme.js',
        './appdownload.html',
        './formulsCALC.html',
        './gamepage.html',
        './podborgame.html',
        './kinimatica.html',
        './dinamica.html',
        './zaksochrn.html',
        './gasewater.html',
        './mkt.html',
        './termodinamica.html',
        './elektrtok.html',
        './magnit.html',
        './kolebania.html',
        './volni.html',
        './allformuls.html',
        './optica.html',
        './atom.html',
        './electrostat.html',
        './aboutai.html',
        './kinematicagame.html',
        './dinamicagame.html',
        './zaksochrngame.html',
        './gasewatergame.html',
        './mktgame.html',
        './termodinamicagame.html',
        './elektrtokgame.html',
        './magnitgame.html',
        './kolebaniagame.html',
        './volnigame.html',
        './opticagame.html',
        './atomgame.html',
        './electrostatgame.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('image-cache').then((cache) => {
      return fetch('./images/') // Получаем список файлов из папки
        .then(response => response.blob())
        .then(blob => {
          // Преобразуем полученный blob в объект File
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const content = reader.result;
              const parser = new DOMParser();
              const htmlDocument = parser.parseFromString(content, 'text/html');
              const images = htmlDocument.querySelectorAll('a[href]');
              const imageUrls = Array.from(images).map(image => image.getAttribute('href'));
              resolve(imageUrls);
            };
            reader.onerror = reject;
            reader.readAsText(blob);
          });
        })
        .then(imageUrls => {
          // Добавляем каждое изображение в кэш
          return Promise.all(imageUrls.map(imageUrl => {
            return fetch(imageUrl)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to cache ' + imageUrl);
                }
                return cache.put(imageUrl, response);
              });
          }));
        });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
