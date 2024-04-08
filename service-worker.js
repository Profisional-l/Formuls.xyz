// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        './index.html',
        './css/styles.css',
        './images/',
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
        './electrostatgame.html',
      ]);
    })
  );
});


// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });
