'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f417644497899f7cea1f171afc672258",
".git/config": "43d905d5951b3d6e7389b9480c3337f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1a32dfbd2fc0421252cac592464f5112",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd61353cd59b046aee65fd5f55212d61",
".git/logs/refs/heads/master": "bd61353cd59b046aee65fd5f55212d61",
".git/logs/refs/remotes/origin/master": "561ce7ee6b87ecf7bf221036e889276b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/577c38c3c7d8af6f54b9c41b3d0d576bca1470": "f0a9ec4cd25c26b082140c7438e462d6",
".git/objects/08/9ca667e4fdaa10f964319b5be3297b5b26b33d": "59a30f66349adc966cad962ebb46f06a",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/d637e24841eabedf92ff24248c58c0cbd30ba7": "56b0e567a4dfd2d50c92d8539882379c",
".git/objects/10/2a1b5f2182db3a0f2176d68e35627c6437a437": "1e499491bab85473d5e923dcc7edc078",
".git/objects/12/ae52e5f9301e19c01a3005971c2d62110dfa13": "df039557ff5f7f0e7d3d8515f9891fa2",
".git/objects/19/7ff9acb3d3c123d11cb0decbd85ddf08406db3": "40f4adb562c91924f89eb9b546253ab8",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/1947c51a0741c73396af83b3361ba94b61879e": "9f19b566a27e15691de1d8893acf20f9",
".git/objects/27/9fbae676fe088ea0156c2a1c2f8fa84ffa0cf5": "c5a7a94d820e580bcc1720bac2bbd788",
".git/objects/2f/e03d40272a59986129ae252048e15c9a56f40c": "60f33253ed216add2383ed2fc7b61132",
".git/objects/2f/f71ad8dd1dd6d1a2aa275358a72eb663e5cc4d": "b73e4f945c449bbcdef0cf94f5a7daf3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/5791433e8ad981f46167f21ca46dc307d8e586": "014c461d0a8da4b56b428df669a359ce",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/61687d7f330353f63dfe8fe3e56e1865b3ed95": "1c05574107ee2906ba775dce40156b0d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7e/9544f3220c1a736f580a264462c3eeba59d0f5": "60df83edbde34af3b0eec648a9baa440",
".git/objects/80/d00e27e66870039b13f2e61f25ad15c647c54d": "3b07880d1f592ba374be65d7cd665439",
".git/objects/8d/802522f40bb88817104ce8b57c0a12471f511a": "6f62d905f5bac9305ffe59b0ace10367",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/07a261574d86513ac565f4109aa8c1b1360100": "42589d0df09cf1690a43d15115215ebd",
".git/objects/8f/854d7c1aa004da733a63a5270eae76744d2c9a": "8a903191f5c44871c9765673223e0d78",
".git/objects/92/774f133e5f6bc2bc9db420096234cf69f69ae2": "8c5836b25e5f589b99cffbe26dcbaa5d",
".git/objects/97/430e5f84db9e2b9d4aef2452dbdde9a2028453": "a3119cdbc872e186a7a31b97f7f4ceba",
".git/objects/9b/fd826db0c3ebc514f480f7b188e1441aeb6878": "c0dcd2a05bba8d2fd1d903c4af097016",
".git/objects/a0/4241c3e334b753e947f942cd1c15946f200461": "2fa7a90224c471ed43205f381577c054",
".git/objects/a3/84447d183c4d2641dc84dfca766fc7198564d0": "9155d5f5bf5aef60870699980efc79f8",
".git/objects/a6/fec7bfcf2089f168ee024dbb22673abdd54bed": "6e49dbadc511db9a3f754fb1cad8714f",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/965d2fedddfadb8972df02bdb6bb9d9a9d2094": "279f314a4876ade7790e68e0d2b53207",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ba/6412fc8f6e5fe4d8c0a55113c40f5e42e1a62d": "d81ff62b11d6f90a72068065694fa22f",
".git/objects/bb/6c7927f38cf24de1c709e98c9166ec9c3d2a98": "cf8efbb804ae3c5ed3b516f3aa2c6f72",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/e4caf9a46c2686a5e9f72559369c61903d9e85": "e8fd21bb5a1d31c3eac83d5b76bd488e",
".git/objects/c7/917ad2b63345cfeb6996e946626c42cfc00f7f": "966cab655ddf81399b0dbe20434603fa",
".git/objects/c9/8f0d53082d236541bfe366040c73dfb0f4a714": "ef1cf95586b023409c40f20a1cfed975",
".git/objects/ce/4c63699a5e283cfd30c18d7cae36b5ab102aad": "3bfc81ab2e2c8492ed43ee3b1061088d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/c4e4ee29d58788a6bc888dfb83190ed5d11c94": "28245f0dc384772d36659f65f196c7b0",
".git/objects/eb/ef0f9e9e8fe4a12b9267bf2e8d9c222188f7c3": "50220e2f8438feb2b4b30d5026df960d",
".git/objects/ee/71bbedf7ea372d32eb7fba614c61f43e3b39c6": "f9c29becae3d22928a7a8bc3bf17127a",
".git/objects/f5/e580a0ad709f2af1c933b99c4d10d449962de4": "390b9d169f18181bfe274558b3f75a30",
".git/objects/f6/3ddcc1f5dde9d22a0d08546913d8b4d6b42990": "63f1df34b11cccec59efc508b7d50a9a",
".git/refs/heads/master": "59cbc352dfaf58f93614d05df4d6c8f9",
".git/refs/remotes/origin/master": "59cbc352dfaf58f93614d05df4d6c8f9",
"assets/AssetManifest.bin": "37162338a3ad53ab15aad298ab547c6c",
"assets/AssetManifest.json": "765a594936f3a6796c177c49fe81174d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "00e704f9ffd4dc23503b4ead71d81322",
"assets/img/logo.png": "816319816bf3c1486fa4db33b24f60a2",
"assets/NOTICES": "442743859c4ba428f78e09d9278e8be1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "86d844299a7700161942a1047d5ef6aa",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "567752f56f648316fc1676d41e1ca29b",
"icons/Icon-512.png": "cbefd8ce1c58b76a9a0de758e0b6a61c",
"icons/Icon-maskable-192.png": "567752f56f648316fc1676d41e1ca29b",
"icons/Icon-maskable-512.png": "cbefd8ce1c58b76a9a0de758e0b6a61c",
"index.html": "e66d9827d480a2163ef88060f76078a8",
"/": "e66d9827d480a2163ef88060f76078a8",
"main.dart.js": "1c465413033948bfc6f56ecb8e97b73c",
"manifest.json": "4d658d44c415ed9aacbfc1b124ba24f1",
"version.json": "a03579c3daa1027aee330610e61f683c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
