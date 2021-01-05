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
    "url": "404.html",
    "revision": "965b0cff17047a42711576ec19d5e6ae"
  },
  {
    "url": "about.html",
    "revision": "b97527ccd975b31cb631077489df5a50"
  },
  {
    "url": "assets/css/0.styles.13924602.css",
    "revision": "2ea3e7ba4c7deed75dc47c526d6d4bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f19632f.js",
    "revision": "b712ed529a255ffdcd749e4dd1f394ee"
  },
  {
    "url": "assets/js/11.4a71461e.js",
    "revision": "51c6997666ba22e7cacb16153ad47157"
  },
  {
    "url": "assets/js/12.f99f7f0c.js",
    "revision": "aa67f1b10e69acd0ebc5fe420c69b1a6"
  },
  {
    "url": "assets/js/13.c29f99aa.js",
    "revision": "0a12089ba48550dbe90a4541a227cedd"
  },
  {
    "url": "assets/js/14.3aa11214.js",
    "revision": "099136481d771c60a49d610991033d27"
  },
  {
    "url": "assets/js/15.c18e8b9b.js",
    "revision": "ab368c989089b81736324c63b61d7888"
  },
  {
    "url": "assets/js/16.1d0b91fb.js",
    "revision": "7a4a3246337179d2672398b555305fb8"
  },
  {
    "url": "assets/js/17.4d865d4c.js",
    "revision": "8b9738335aadd1a2bbe53c13364a25a7"
  },
  {
    "url": "assets/js/18.a32eb954.js",
    "revision": "9cfb44a5c33cd50327ed1da7820f806f"
  },
  {
    "url": "assets/js/19.341c803c.js",
    "revision": "f2f0a973fab6fa619498fcafe1e0935c"
  },
  {
    "url": "assets/js/20.0d4b55e2.js",
    "revision": "d242f02b263b447c0a0f6c279d4c50ca"
  },
  {
    "url": "assets/js/21.1b6d2d65.js",
    "revision": "8e6ba273d39858ae2c1029d194df06a4"
  },
  {
    "url": "assets/js/22.82bff54c.js",
    "revision": "5dc4c090f84fa373bb58b46752dded7a"
  },
  {
    "url": "assets/js/23.99e3235c.js",
    "revision": "e57fc9ee7b581be20a6ff372db9b2850"
  },
  {
    "url": "assets/js/24.93f7f648.js",
    "revision": "3a58cdebe40b7bad7d9d0bdc3ef8e8b6"
  },
  {
    "url": "assets/js/25.fde67afd.js",
    "revision": "4411987aac85275d0449e5b85a85dc7d"
  },
  {
    "url": "assets/js/26.5e4cba07.js",
    "revision": "d5dd652849fbae78ab9a446d96c416f3"
  },
  {
    "url": "assets/js/27.35f83edc.js",
    "revision": "ea54dea1864510060a42ceeb3248a8f3"
  },
  {
    "url": "assets/js/28.d771d83c.js",
    "revision": "bf17659c68267fd959c903ed95fed223"
  },
  {
    "url": "assets/js/29.141cb061.js",
    "revision": "77a21f345b3c74efbc307d61a28f808f"
  },
  {
    "url": "assets/js/3.310a806d.js",
    "revision": "6fc61d04c8b04befbad9e55ed2102d1e"
  },
  {
    "url": "assets/js/30.0fea0a69.js",
    "revision": "ae9f47b48f2c8638159cbcb5bc8048b9"
  },
  {
    "url": "assets/js/4.d145ac5d.js",
    "revision": "0f3f6ed5473f378d5b5f45cdfbed689c"
  },
  {
    "url": "assets/js/5.5f12df19.js",
    "revision": "c1233a23e7f0d9aef21df386164cd60f"
  },
  {
    "url": "assets/js/6.95840eb1.js",
    "revision": "cc2160f6f3e00146acff681caa2bb64b"
  },
  {
    "url": "assets/js/7.1869c5dc.js",
    "revision": "b78b365c1ed025cd897766b2ee76e45f"
  },
  {
    "url": "assets/js/8.5ca2c538.js",
    "revision": "caf624bb95e05f87968ba918f33b8525"
  },
  {
    "url": "assets/js/9.807bee39.js",
    "revision": "b99ce2236361f34bd3dd5436baa0feb0"
  },
  {
    "url": "assets/js/app.0da71e72.js",
    "revision": "e63714953db4cd7b55be5133bbce386b"
  },
  {
    "url": "assets/js/vendors~docsearch.cc0a77fb.js",
    "revision": "4c525dd45a570f09d5c985cd2b73a18e"
  },
  {
    "url": "demo.html",
    "revision": "0f8c1acf4f961186f41e5d452315b0de"
  },
  {
    "url": "en/about.html",
    "revision": "55c6792ccfb2446d950b9bd6b1e5ab72"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "fb7a6a738c7e55194ea9e17599f4705a"
  },
  {
    "url": "en/guide/config.html",
    "revision": "4f07f8a464c859169f54bd767d35724b"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "0b38c85df5d12d01319163aa99cbb776"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "f3f8c28c9e416db3bf74fb1d99936cf7"
  },
  {
    "url": "en/guide/index.html",
    "revision": "abb85d637c7dbdd62b0339f56dac2016"
  },
  {
    "url": "en/guide/page.html",
    "revision": "93abab501ab3c5d0480dc64cdec2e63e"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "0df62de92f0f8d005504fbb10e4ba405"
  },
  {
    "url": "en/index.html",
    "revision": "2156fc73f109bdd76eea53cffeeffcce"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "f45d33295b9e26e48a3b63386d81f520"
  },
  {
    "url": "guide/config.html",
    "revision": "c221cca425a26d1648eb78a5d6b484e7"
  },
  {
    "url": "guide/faq.html",
    "revision": "48130299ae5da7b266a99864cc2f0a85"
  },
  {
    "url": "guide/icon.html",
    "revision": "e6cdb27abf20cec5111b9e1ddb5f93d0"
  },
  {
    "url": "guide/index.html",
    "revision": "93097f12c006f47eca7e5cac4e165e1a"
  },
  {
    "url": "guide/migrate.html",
    "revision": "40069c6f8cb0a86f6904af7f5f51a35b"
  },
  {
    "url": "guide/page.html",
    "revision": "8c0f9414964fd29e98d75ac99619c15a"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "87bf4d2d4a595b7290a8869c33ca696d"
  },
  {
    "url": "index.html",
    "revision": "10fb0e4ea31acc13db30a160f1c09c6f"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
