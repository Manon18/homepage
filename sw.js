/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "2815957484a632de4dfffb41d9d75564"
  },
  {
    "url": "pictures/envelope.svg",
    "revision": "400c4dbf960c3c8fa0a5374faf6e2485"
  },
  {
    "url": "pictures/facebook.svg",
    "revision": "422e766543a3850de8db1f049775a1e9"
  },
  {
    "url": "pictures/github.svg",
    "revision": "a112a001d5170d13d5f46d9387e526a4"
  },
  {
    "url": "pictures/phone-symbol-of-an-auricular-inside-a-circle.svg",
    "revision": "c9f4d7dbb18b5dd22331993ed32b4742"
  },
  {
    "url": "pictures/skype.svg",
    "revision": "1ea929479883c2e12e29653deef5ccc2"
  },
  {
    "url": "style.css",
    "revision": "031fa5de67852e2fa7831e3efac55303"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
