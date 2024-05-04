// // SIMPLEservice-worker.js 
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('my-cache').then((cache) => {
//       return cache.addAll([
//         '/',
//         './index.html',
//         './css/styles.css'
//       ]);
//     })
//   );
// });


const CACHE_NAME = 'my-site-cache-v2';
const urlsToCache = [
  '/',
  './index.html',
  './css/styles.css',
  './css/fonts/Inter-Medium.ttf',
  './theme.js',
  './flip.js',
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
  './images/1якосмическая.png',
  './images/2йзакон.png',
  './images/3йзакон.png',
  './images/848qu4tg3uqgt8y43thf4.png',
  './images/android (1).png',
  './images/apple-logo (2).png',
  './images/back-button-light.png',
  './images/back-button.svg',
  './images/BG_all.png',
  './images/BG_atomics.png',
  './images/BG_kinemat.png',
  './images/BG_kolebania.png',
  './images/BG_mechanics.png',
  './images/BG_mkt.png',
  './images/BG_optics.png',
  './images/BG_toki.png',
  './images/calculator(1).png',
  './images/cопротивлениепроводника.png',
  './images/cопротивлениепроводникаприt.png',
  './images/down.png',
  './images/downloads (1).png',
  './images/formulslogo.png',
  './images/formulslogopng.png',
  './images/glowedblurbg.png',
  './images/google-play.png',
  './images/Group7.png',
  './images/holder212.png',
  './images/icon_all.png',
  './images/icon_atomic.png',
  './images/icon_kinematica.png',
  './images/icon_kolebania.png',
  './images/icon_mechanics.png',
  './images/icon_mkt.png',
  './images/icon_optics.png',
  './images/icon_toki.png',
  './images/IMG_20240218_163722_495.JPG',
  './images/IMG_5835.PNG',
  './images/info.png',
  './images/kurssad.png',
  './images/mathlogo.png',
  './images/mathlogoColored.png',
  './images/maximize.png',
  './images/monologo.png',
  './images/moon.png',
  './images/no-signal.png',
  './images/periodob.png',
  './images/physlogo.png',
  './images/reload.png',
  './images/scrolluo.png',
  './images/scrollup.png',
  './images/seelkphlogo.png',
  './images/share.png',
  './images/sneakersADD1.png',
  './images/sochinad.png',
  './images/Subtract.png',
  './images/sun.png',
  './images/whitelogotg.png',
  './images/абсолпокпреломл.png',
  './images/абсолютвлажн.png',
  './images/амплзначнапряж.png',
  './images/амплзначсилтока.png',
  './images/бора.png',
  './images/внутэнергияадноатга.png',
  './images/высота.png',
  './images/высотаброшгориз.png',
  './images/гидрстатдав.png',
  './images/давление.png',
  './images/давсмесигаз.png',
  './images/дальность.png',
  './images/дейстзначнапряж.png',
  './images/дейстзначсилытока.png',
  './images/длинаволны.png',
  './images/емкостьплоскогоконденсатора.png',
  './images/зависзаряданакондприколебвконт.png',
  './images/зависнапряжвконтуре.png',
  './images/зависускрсвпотвыстоты.png',
  './images/зависэлектртокавконтуре.png',
  './images/законарихимеда.png',
  './images/законвстяг.png',
  './images/законДжоуля-Ленца.png',
  './images/законкулона.png',
  './images/ЗаконОма.png',
  './images/ЗаконОмаполнцепь.png',
  './images/законпреломления.png',
  './images/законсохраненияимпульса.png',
  './images/законфарадея.png',
  './images/заряд.png',
  './images/зарядконденс.png',
  './images/зарядконденспоссоед.png',
  './images/зарядконденспрсоед.png',
  './images/ЗСЭ.png',
  './images/импульс.png',
  './images/импульссилы.png',
  './images/импульсфотона.png',
  './images/индуктивностькатушки.png',
  './images/индукциянасолиноиде.png',
  './images/ИндукцияполявценттокомсR.png',
  './images/кинетическаяэнергия.png',
  './images/количтепл.png',
  './images/количтеплконден.png',
  './images/количтеплкристал.png',
  './images/количтеплтопли.png',
  './images/концентрациявитков.png',
  './images/кординатапох.png',
  './images/кординатапохy.png',
  './images/кофповерхнат.png',
  './images/коэфтранс.png',
  './images/кпдисточтока.png',
  './images/кпдмеханизма.png',
  './images/КПДтепловоймашины.png',
  './images/кпдтранс.png',
  './images/линейнаяскоростьпоокруж.png',
  './images/линувеллинзы.png',
  './images/магнпотоком.png',
  './images/магнпроницвещ.png',
  './images/максвысота.png',
  './images/макскинетэнергэлектрона.png',
  './images/максэдсинд.png',
  './images/масса.png',
  './images/массаодноймолек.png',
  './images/массафотона.png',
  './images/моднапряж.png',
  './images/МодульиндукцииBIR.png',
  './images/моментсилы.png',
  './images/моментсилыстоком.png',
  './images/мощностьвцепипеременноготока.png',
  './images/мощностьмгн.png',
  './images/мощностьпоглдозы.png',
  './images/мощностьсред.png',
  './images/Мощностьэлектрическоготока.png',
  './images/напряжвтранс.png',
  './images/напряжениемнаклеммахисточника.png',
  './images/напряжениепоссоед.png',
  './images/напряжениепрсоед.png',
  './images/напряженность.png',
  './images/оснмкт.png',
  './images/относвлажн.png',
  './images/первыйзаконЗСЭ.png',
  './images/периодколеб.png',
  './images/периодколебвконтуре.png',
  './images/периодколебпружмая.png',
  './images/периодматколеб.png',
  './images/плотностьтока.png',
  './images/поглдозаионизлуч.png',
  './images/полезнаямощностьвнешнейцепи.png',
  './images/полнаямехэнергия.png',
  './images/полнаямехэнергияпружмая.png',
  './images/полнаяэнергияколебконтура.png',
  './images/полнмощтока.png',
  './images/полноедавление.png',
  './images/потэнергия.png',
  './images/потэнергиязарядов.png',
  './images/потэнергупртел.png',
  './images/потэнциалэлекполя.png',
  './images/предуголотр.png',
  './images/принцсуперпоз.png',
  './images/путь.png',
  './images/путьfull.png',
  './images/путьравнускр.png',
  './images/путьравнускрбезвремени.png',
  './images/работавыхода.png',
  './images/работагаз.png',
  './images/работапостояннойсилы.png',
  './images/работасилытрения.png',
  './images/работасилытяжести.png',
  './images/работасилыупругости.png',
  './images/работаэлектрполя.png',
  './images/равнодействующаясила.png',
  './images/равномерноедвижение.png',
  './images/радиуснорбиты.png',
  './images/Радиустраектполчастицы.png',
  './images/разностьфаз.png',
  './images/связьскоростиволны.png',
  './images/СилаАмпера.png',
  './images/силадав.png',
  './images/силалинзы.png',
  './images/СилаЛоренца.png',
  './images/силанастенки.png',
  './images/силатока.png',
  './images/силатокакоротзамык.png',
  './images/силатокапоссоед.png',
  './images/силатокапрсоед.png',
  './images/силатренияпокоя.png',
  './images/силатренияскольжения.png',
  './images/силатяжести.png',
  './images/силаупругости.png',
  './images/скоростпригармонколеб.png',
  './images/скоростьволны.png',
  './images/скоростьпоx.png',
  './images/скоростьпоy.png',
  './images/скоростьравнускр.png',
  './images/следствияизмктос.png',
  './images/соотношсилгидрпрес.png',
  './images/сопрпоссоед.png',
  './images/сопрпрсоед.png',
  './images/средкинетэнергия.png',
  './images/средскмолек.png',
  './images/теорияокинет.png',
  './images/тепловоерасширенижидкостей.png',
  './images/теплоемкость.png',
  './images/тризаконарасширен.png',
  './images/углскорость.png',
  './images/уравнгарколеб.png',
  './images/уравнениеидеалгаза.png',
  './images/уравнклайперона.png',
  './images/уравнравнускрдвиж.png',
  './images/урравндвиж.png',
  './images/ускорение.png',
  './images/ускорпригармонколеб.png',
  './images/условиеквантования.png',
  './images/фильтр.png',
  './images/фильтр0.png',
  './images/формтонклинзы.png',
  './images/формулабальмера.png',
  './images/формуладифреш.png',
  './images/формэншт.png',
  './images/химколич.png',
  './images/центстремитускр.png',
  './images/циклчастотаколеб.png',
  './images/циклчастотаматколеб.png',
  './images/циклчастотапружмая.png',
  './images/циклчистотавконтуре.png',
  './images/частотаколеб.png',
  './images/эдс.png',
  './images/эдсиндукции.png',
  './images/эдсиндукциидвиж.png',
  './images/эдссамоинд.png',
  './images/эквивалентнаядоза.png',
  './images/экспозиционнаядоза.png',
  './images/электремкость.png',
  './images/электремкостьконденс.png',
  './images/электремкостьпоссоед.png',
  './images/электремкостьпрсоед.png',
  './images/электрохимическимэквивалентом.png',
  './images/энергиягарммехколеб.png',
  './images/энергияконденсатора.png',
  './images/энергиясвязиатомногоядра.png',
  './images/энергияфотона.png',
  './images/индуктивностьсоленоида.png',
  './images/энергмагполя.png'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      // Проверяем метод запроса
      if (event.request.method === 'GET') {
        // Если есть интернет-соединение, обновляем кэш полностью
        if (navigator.onLine) {
          return fetch(event.request).then(function(response) {
            // Клонируем ответ для кэширования
            var responseToCache = response.clone();
            // Обновляем кэш полностью
            cache.put(event.request, responseToCache);
            return response;
          }).catch(function() {
            // Если запрос не удался, вернем ресурс из кэша
            return cache.match(event.request);
          });
        } else {
          // Если интернет-соединение отсутствует, вернем ресурс из кэша
          return cache.match(event.request).then(function(response) {
            return response || fetch(event.request);
          });
        }
      } else {
        // Если метод не GET, просто выполним запрос в сеть
        return fetch(event.request);
      }
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
