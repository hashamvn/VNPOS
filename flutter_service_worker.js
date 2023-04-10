'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1cc92abec79d4bcf2df3c571513f1806",
"assets/assets/png/dashboardNavBarProfilePng.png": "cd9c13a390f5d8c50637a74b661703e0",
"assets/assets/png/pngApple.png": "a849c2a80e0bbaff0f3f104831868c42",
"assets/assets/png/pngAppLogo.png": "099745c72a208f1c48a67d8e9ed91bd4",
"assets/assets/png/pngBanana.png": "254bfff51f62c2fbfd9f0d38bcb6e7a8",
"assets/assets/png/pngBiscuits.png": "0a2a57d72e0f4a42fa6882974d3b4b0f",
"assets/assets/png/pngIcecream.png": "4666ae90c82966d1623bc4124a0b1848",
"assets/assets/png/pngIphone.png": "746380df06f6859ed2c3e07431798315",
"assets/assets/png/pngLaptop1.png": "5a5a480672a59aea9e455f91d34a5681",
"assets/assets/png/pngLaptop2.png": "224658c02124b40e7c89a4299f20e070",
"assets/assets/png/pngSocks.png": "1d20962e6a5f8ac0ad54fbf23f66907f",
"assets/assets/png/sidebarCloseLogoPng.png": "dd79123e33696094d6cf316cbb337368",
"assets/assets/png/sidebarOpenLogoPng.png": "6cfde916b25494ef09303442417d4ae9",
"assets/assets/svg/active_business_setting_svg.svg": "50e67940b0b7425b997474cb9be4d716",
"assets/assets/svg/active_business_svg.svg": "972d225c563ac99a791f480659c2b343",
"assets/assets/svg/active_owner_svg.svg": "599c0f50cba5bbf85893f82c51500ef3",
"assets/assets/svg/addContacLocationSvg.svg": "9ca5e4a94941071209f639d9b4fa56f5",
"assets/assets/svg/addContactCalenderSvg.svg": "3dc5e76bb79c424837de09bb61f38d8e",
"assets/assets/svg/addContactCustomerGroupSvg.svg": "23c409b739eed023afbe4f252e303ed5",
"assets/assets/svg/addContactEmailSvg.svg": "d0fdf8a43b120c33c2cad3b6ce324d51",
"assets/assets/svg/addContactMobileSvg.svg": "b540be7a3594e5bb6332c4f3fe236a8d",
"assets/assets/svg/addContactPersonSvg.svg": "34959818234bb7d817d22f56cc318924",
"assets/assets/svg/addContactPhoneSvg.svg": "0e09eeed1ed2b519592b6b200952887f",
"assets/assets/svg/addContactWorldSvg.svg": "b0464f27a38c2d5bfd1673b18e0b9c20",
"assets/assets/svg/addFilledSvg.svg": "7f68e679cd31455db4e76cc2fe4dea0d",
"assets/assets/svg/app_logo_svg.svg": "7a5e7fee94838eef5f56c055daeb0f75",
"assets/assets/svg/auth_circle_svg.svg": "adaf0ee38e5be2a8b2981ccaa2313bee",
"assets/assets/svg/auth_polygoan_svg.svg": "f11ffaf19a4cf60cfdc0beed8fe33a91",
"assets/assets/svg/change_language_svg.svg": "50a6af6d66589672240b4867e362d446",
"assets/assets/svg/dashboardNavBarAddSvg.svg": "c2f9896645a9fe1bd03846d45a57ad0c",
"assets/assets/svg/dashboardNavBarCalculationSvg.svg": "c9b139ac164ebd4020419effcab1b2dc",
"assets/assets/svg/dashboardNavBarDollarSvg.svg": "a6a297904264ad67d50c8bd65a68722a",
"assets/assets/svg/dashboardNavBarNotificationSvg.svg": "e354fdd66e8aaff8089ef0b15278e3c8",
"assets/assets/svg/deleteCalculatorSvg.svg": "9e5b192d62c0ea89868fe98bf6e944d1",
"assets/assets/svg/dropDownSvg.svg": "d8dcb2205527d722ce0db0e7d291624e",
"assets/assets/svg/email_suffix_svg.svg": "b44f64f6ff85164caba5acb81893fb9c",
"assets/assets/svg/folder_svg.svg": "1bf113ce2ecacf801e66d46a530024cc",
"assets/assets/svg/hide_password_svg.svg": "fd2d7b2674bd6c6c4b60b6e4d60eba51",
"assets/assets/svg/homeAwesomeShopSvg.svg": "3f705339b9417530c4ac4ef998c052dd",
"assets/assets/svg/homeDollarSvg.svg": "c8703c074c2809de9070271ada974f96",
"assets/assets/svg/homeFilterByDateSvg.svg": "5f9a67356be199a0221b02755dd8c37c",
"assets/assets/svg/homeInvoiceDueSecondSvg.svg": "1d61e9e55bf878cf9f7adc23e57d9a6e",
"assets/assets/svg/homeInvoiceDueSvg.svg": "94b0cefe22e62ce278f9a5e1172bcc3d",
"assets/assets/svg/homeNetSecondSvg.svg": "faa41835547dfb9a5c896bd74e18968c",
"assets/assets/svg/homeNetSvg.svg": "52f839c0365fdd79e0eb3a6f17c8f365",
"assets/assets/svg/homeSalesPaymentDueFirstSvg.svg": "af451dd8c7c9f1f6d671a4372f5f0b6e",
"assets/assets/svg/homeTotalSaleReturnSvg.svg": "d21aef29a737a4ec32bd013e8061e97e",
"assets/assets/svg/homeTotalSalesSvg.svg": "419b0c171527472a5c507bbd0f7d0d24",
"assets/assets/svg/inactive_business_setting_svg.svg": "0d868eede53c0abece891ed99df32cd8",
"assets/assets/svg/inactive_business_svg.svg": "e3dec29dcf2dd46c058904df3b1b7ad2",
"assets/assets/svg/inactive_owner_svg.svg": "8aca80d7d7a60a0ae0bfb8d7f2be8676",
"assets/assets/svg/minusFilledSvg.svg": "ada59b52ba9291cb637ce39c993121c7",
"assets/assets/svg/password_suffix_svg.svg": "b256a59ed941856e523522b74d9271b0",
"assets/assets/svg/personSvg.svg": "df51520cf90b6165fde4b0df7ee69db6",
"assets/assets/svg/posCancelSvg.svg": "ac2bf2bc92395c6a818ba36b866a17b0",
"assets/assets/svg/posCardSvg.svg": "5f18c7ccedc1fc47064f8d0d21280fb6",
"assets/assets/svg/posCashSvg.svg": "1453b141a13976ccfe969a34bb7aec6a",
"assets/assets/svg/posCircleEditingSvg.svg": "24022adf558334ed1a441179f1071a64",
"assets/assets/svg/posCircleEditSvg.svg": "6d0ce42063dc48fc31ed78171ef7d11d",
"assets/assets/svg/posCircleMinusSvg.svg": "28e742942190dfe1b177d7528fb0f748",
"assets/assets/svg/posCircleMultiplySvg.svg": "1b49e4b760dab1d0d0b19a0ed23db3d8",
"assets/assets/svg/posCirclePlusSvg.svg": "c31516f03f9e5fdf1487fa4840d0a9aa",
"assets/assets/svg/posCloseSvg.svg": "4b44b63efb1dce9a4cce3dcdf50a8951",
"assets/assets/svg/posDoubleLeftArrowSvg.svg": "169da5a687f4c08692be40a3069404dc",
"assets/assets/svg/posDraftSvg.svg": "5e9a3687c07ba2f4125a1741806bf8ca",
"assets/assets/svg/posEditPaperSvgSvg.svg": "5eee67981b1e5531e7a43f5a50b65647",
"assets/assets/svg/posFilledCircleMultiplySvg.svg": "ef09fe7261d9feca8412d82b5743938a",
"assets/assets/svg/posFullScreenSvg.svg": "ad8b8d7313addc4b750b1b749cc45c31",
"assets/assets/svg/posInformationFilledSvg.svg": "453409c050589cfc8c8b94ea7846c54c",
"assets/assets/svg/posKeyboardSvg.svg": "e8f02ec86717934fc3b78af6561b109e",
"assets/assets/svg/posLeftArrowSvg.svg": "ae1cc5ff9222fb4996ae99241ba0d473",
"assets/assets/svg/posMultipleSaleSvg.svg": "dc4a82ee9cc7a1687a240863714573a7",
"assets/assets/svg/posPauseSvg.svg": "2444f1903b77736cc57dbc24e20f3de0",
"assets/assets/svg/posPaymentSvg.svg": "41cd1a27bd62e314a543a11fbd075b12",
"assets/assets/svg/posPrintSvg.svg": "ef937ec55afd63f6f0de1a43f336a857",
"assets/assets/svg/posRecentHistorySvg.svg": "281d555cb285dd88f8fb6133b70bdca6",
"assets/assets/svg/posRecentTransectionCircleEditSvg.svg": "d6248472f6a974d85c0272a77bc488ac",
"assets/assets/svg/posRecentTransectionRightArrowSvg.svg": "360fa2b92638a0da62b289881e4a6fc3",
"assets/assets/svg/posRecentTransectionTickSvg.svg": "3aee45976ca71837a86684f61518c819",
"assets/assets/svg/posSuspendSvg.svg": "49cbf052cea5cc1e8e9aaae1ee848fef",
"assets/assets/svg/posTickSvg.svg": "3d715129415485d49e6ea984a66a6aa5",
"assets/assets/svg/searchSvg.svg": "aef80263e56a2752cf84e829cc97bc80",
"assets/assets/svg/show_password_svg.svg": "60a0e623d7fdc6c6bfbcbff072f28951",
"assets/assets/svg/sidebarContactsSvg.svg": "7eeb1dbbbb8ab032a198a6dda2cbd6bb",
"assets/assets/svg/sidebarEssentialsSvg.svg": "6b83a5b06bfa89c77f151abdbee5d650",
"assets/assets/svg/sidebarExpansesSvg.svg": "692f2d1ec7dc38595df3d69940cbcba8",
"assets/assets/svg/sidebarHomeSvg.svg": "f85b416e804236fa64b357f9931465f6",
"assets/assets/svg/sidebarNotificationsSvg.svg": "99d8c6484aa6871382862043ff73ec84",
"assets/assets/svg/sidebarPaymentAccountsSvg.svg": "4b3e0cd52162f3bdeaf183f7dc3fc95d",
"assets/assets/svg/sidebarProductsSvg.svg": "c1477468bbd8ad8353d5f159f9914548",
"assets/assets/svg/sidebarPurchasesSvg.svg": "443a1f7d49f3b6aeb9bda98862ae0535",
"assets/assets/svg/sidebarReportsSvg.svg": "e33b36d3e114d3b2e86d01e0b2887fec",
"assets/assets/svg/sidebarSellSvg.svg": "ddffd25f01efb0bd7264b234377d834f",
"assets/assets/svg/sidebarSettingsSvg.svg": "48f71ae0b951da5b0325ee20be5ae444",
"assets/assets/svg/sidebarStockAdjustmentSvg.svg": "d9cb8575061fce0571e9251b33ae5717",
"assets/assets/svg/sidebarStockTransferSvg.svg": "72e0ec5d5fb5c8436ba4529120defb74",
"assets/assets/svg/sidebarUserManagementSvg.svg": "b9feb4a7c2b0954e45e6d99bb5128354",
"assets/assets/svg/sidebarWoocommerceSvg.svg": "1667951bbc1349295823645aaa48f2ba",
"assets/assets/svg/suspededSaleBoxSvg.svg": "9b39fa6c99d687daa45c86ab77048b42",
"assets/assets/svg/suspededSaleDeleteOutlinedSvg.svg": "b7fca7507593f9b7c6babafe8cea748a",
"assets/assets/translations/en.json": "bc0fd0baf44a41fa1e1ae92b4061a792",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "06e4a3296eca18eaffee08a0d7af1d75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"favicon.png": "609347dc4b72e659f8fe9d8e1c292183",
"icons/Icon-192.png": "cda3a05906d5aa3a400fa5ae7ed82040",
"icons/Icon-512.png": "5202b8a97106d0e2990591f795c9f834",
"icons/Icon-maskable-192.png": "cda3a05906d5aa3a400fa5ae7ed82040",
"icons/Icon-maskable-512.png": "5202b8a97106d0e2990591f795c9f834",
"index.html": "0fa4abcebf2ecba33d00d283a04662bc",
"/": "0fa4abcebf2ecba33d00d283a04662bc",
"main.dart.js": "cbc012fbf5c20a81fe203d2e43ebe6fd",
"manifest.json": "474c1355ae2341c1de76a9e632089ee2",
"version.json": "108384a15c8575a32c5fd9adb16ca947"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
