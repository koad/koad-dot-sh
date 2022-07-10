// use a cacheName for cache versioning
var cacheName = 'v1:static';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    console.log('pwa is being installed!')
    // e.waitUntil(
    //     caches.open(cacheName).then(function(cache) {
    //         return cache.addAll([
    //             './',
    //             './css/style.css',
    //             './js/build/script.min.js',
    //             './js/build/vendor.min.js',
    //             './css/fonts/roboto.woff',
    //             './offline.html'
    //         ]).then(function() {
    //             self.skipWaiting();
    //         });
    //     })
    // );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    console.log('pwa is fetching!', event.request)
    // either respond with the cached object or go ahead and fetch the actual url
    // event.respondWith(
    //     caches.match(event.request).then(function(response) {
    //         if (response) {
    //             // retrieve from cache
    //             return response;
    //         }
    //         // fetch as normal
    //         return fetch(event.request);
    //     })
    // );
});

self.addEventListener('beforeinstallprompt', (e) => {
  console.log(`'beforeinstallprompt' event is fired.`);
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

self.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  // hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed');
});


// function getPWADisplayMode() {
//   const isStandalone = self.matchMedia('(display-mode: standalone)').matches;
//   if (document.referrer.startsWith('android-app://')) {
//     return 'twa';
//   } else if (navigator.standalone || isStandalone) {
//     return 'standalone';
//   }
//   return 'browser';
// }
// console.log(`App launched via ${getPWADisplayMode()}`)

// self.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
//   let displayMode = 'browser';
//   if (evt.matches) {
//     displayMode = 'standalone';
//   }
//   // Log display mode change to analytics
//   console.log('DISPLAY_MODE_CHANGED', displayMode);
// });

// if ('serviceWorker' in navigator) {
// navigator.serviceWorker.register('./pwa-service-worker.js').then(function(reg) {
//     console.log('Successfully registered service worker', reg);
// }).catch(function(err) {
//     console.warn('Error whilst registering service worker', err);
// });
// }
