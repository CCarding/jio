'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6513ec6b644c5dfe48db110967723256",
"assets/AssetManifest.bin.json": "e9f5eb7d84082faed2c5cd8edb7d7a46",
"assets/AssetManifest.json": "dff4c44ac5da3bb32fa898bffdf52b29",
"assets/assets/a.jpg": "2482600cc4666b597038f6028ffa0034",
"assets/assets/amazonprime.png": "bf91841b2202e39257abb3dc84dc14f4",
"assets/assets/cell-phone.png": "137c6fa0b45f860c6f35e63487240a7d",
"assets/assets/discount-badge.png": "ef49920a31ae38b2345143f71bfc9e0e",
"assets/assets/DisneyHotstar.png": "1fe4a8c2bdb7cb9d04ec0348bec3c224",
"assets/assets/fonts/RobotoSlab-Bold.ttf": "2c44adc1ebd36820fd75012412e6f550",
"assets/assets/fonts/RobotoSlab-ExtraBold.ttf": "38782544ee0ed1c813100e5539b0f469",
"assets/assets/fonts/RobotoSlab-Regular.ttf": "2100b4a02ebb94c0aa18cabd642ee507",
"assets/assets/footer.153f35181d1adde12abf.png": "31e229879b541986ff7a6239e72a6d0a",
"assets/assets/Google_Pay.png": "5a95ae140f7ae12ce1300e357904046f",
"assets/assets/Jio-Logo-768x483.png": "258dcf026e11389d2e96b9c3472a7a0a",
"assets/assets/Jio-Savan.png": "e0664bc1e3fcd62ad2623064f5e43847",
"assets/assets/jio1-ezgif.com-video-to-gif-converter.gif": "3d7e39e6bbaed40445902270c4f3cb88",
"assets/assets/JioCiema.png": "808f1782de4c3ffd413915f50394dbca",
"assets/assets/jiocloud.png": "6d83247b2ed81336816b341ca0319e4d",
"assets/assets/JioTV.png": "6bb732c3d1e58d1349520281f23be9eb",
"assets/assets/netflix.png": "b5a3011c8b57a2f7e3a82eb1c17e9795",
"assets/assets/Paymentpage%2520bottom.jpg": "b53367347321553be3f90c49169b1bf0",
"assets/assets/PaymentPageLast.jpg": "7422523d9fe538662a6fcc613d188933",
"assets/assets/Paytm.png": "53d4f20fb45178317e9fd7a9e3fb3822",
"assets/assets/phonePe.png": "f01a5d4f14afeeba7c5bbd8f4dcb748c",
"assets/assets/SonyLiv.png": "8b98c552e057207fda8c19046a3764fd",
"assets/assets/UPI-Pay.jpeg": "9f8dc7c72f312e7116c31ca0fbc2d29a",
"assets/assets/WhatsApp-Pay.png": "01c30c861a79958c9834c3130b3e0edf",
"assets/assets/zee.png": "1e9cbab9de84169029f332c08bb624ee",
"assets/FontManifest.json": "afb7eb2348e0f2a5df4cff2986f8dae0",
"assets/fonts/MaterialIcons-Regular.otf": "866a909805a465fd78b38a7b69e0e1eb",
"assets/NOTICES": "0413e1cdda225db32d6ae9837ed46a2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "ceb19d15572f2fed7e7e008ca227ab6f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "00b9a48496c873526500c3c270a3ceaa",
"icons/favicon-16x16.png": "641b0ce1bd903af7cf489e02bf23377b",
"icons/Icon-192.png": "c1a57aeaa077188f01bdd59ab78b90a4",
"icons/Icon-512.png": "ebf6675acfc25c9420da431dfd30e6c3",
"icons/Icon-maskable-192.png": "fce7349e311fc95a2873ed8fef6e2197",
"icons/Icon-maskable-512.png": "de60710a0b54bb89c20ce1dd9623ad35",
"index.html": "153bd6d287d8b3d56e0c11a367286445",
"/": "153bd6d287d8b3d56e0c11a367286445",
"main.dart.js": "50837629ec4823b2c39f8e88756c985b",
"manifest.json": "a5a5ff0ebf7a954b61f6d381bdb99f89",
"payment_links.json": "cb59f5ca44c771feefe17bebb5d537a2",
"version.json": "b7e3215acaecb0f4e0d65ecafe2db3e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
