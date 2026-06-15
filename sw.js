/* ============================================================
   STAR WARS: WHICH CHARACTER ARE YOU?
   Service Worker — Cache Version 2
   Bump the version number to force all devices to reload.
   ============================================================ */

var CACHE_NAME = 'star-wars-v5';

/* Core shell — always cached */
var CORE_FILES = [
  './',
  './index.html',
  './quiz.html',
  './chat.html',
  './ceremony.html',
  './manifest.json',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-192-maskable.png',
  './assets/icons/icon-512-maskable.png',
  './questions.js',
  './audio.js',
  './battle.html',
  './force-map.html',
  './transmissions.html',
  './transmissions-admin.html',
  './unlocked.html',
  './404.html',
  './sw-prototypes/cyberpunk/index.html',
  './sw-prototypes/mando/index.html',
  './sw-prototypes/imperial/index.html',
  './sw-prototypes/grogu/index.html'
];

/* UI assets */
var UI_FILES = [
  './assets/ui/projector.png',
  './assets/ui/rebel-symbol.png',
  './cockpit-bg.PNG',
  './falcon.png',
  './xwing.png',
  './tiefighter.png',
  './destroyer.png',
  './mandalore.png',
  './naboo.png',
  './coruscant.PNG',
  './dagobah.PNG',
  './hoth.PNG',
  './tatooine.PNG',
  './crystal-blue.png',
  './crystal-green.png',
  './crystal-purple.png',
  './crystal-white.png',
  './crystal-yellow.png',
  './chamber-coruscant.png',
  './chamber-mandalore.png',
  './chamber-naboo.png',
  './chamber-tatooine.png'
];

/* Character portraits */
var CHARACTER_FILES = [
  './assets/characters/yoda.png',
  './assets/characters/obiwan.png',
  './assets/characters/luke.png',
  './assets/characters/mace.png',
  './assets/characters/poe.png',
  './assets/characters/finn.png',
  './assets/characters/quigon.png',
  './assets/characters/mando.png',
  './assets/characters/mando2.png',
  './assets/characters/boba.png',
  './assets/characters/han.png',
  './assets/characters/chewie.png',
  './assets/characters/vader.png',
  './assets/characters/vader2.png',
  './assets/characters/palpatine.png',
  './assets/characters/kylo.png',
  './assets/characters/maul.png',
  './assets/characters/grogu.png'
];

var ALL_FILES = CORE_FILES.concat(UI_FILES).concat(CHARACTER_FILES);

/* ── INSTALL: cache everything ── */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ALL_FILES);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

/* ── ACTIVATE: delete old caches ── */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NAME;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* ── FETCH: cache-first, network fallback ── */
self.addEventListener('fetch', function(event) {
  /* Only handle GET requests */
  if (event.request.method !== 'GET') return;

  /* Skip cross-origin requests (Google Fonts, GitHub CDN, etc.) */
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      /* Not in cache — fetch from network and cache it */
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, toCache);
        });
        return response;
      }).catch(function() {
        /* Offline fallback for HTML pages */
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').indexOf('text/html') !== -1) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
