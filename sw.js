self.addEventListener('install', (e) => {
 e.waitUntil(
   caches.open('calc_schlumberger').then((cache) => {
     return cache.addAll([
       "./",
       "./index.html",
       "./img/logo-white.png",

       "./img/demo/favicon.ico",
       "./img/demo/apple-touch-icon.png",
       "./img/demo/apple-touch-icon-57x57.png",
       "./img/demo/apple-touch-icon-72x72.png",
       "./img/demo/apple-touch-icon-76x76.png",
       "./img/demo/apple-touch-icon-114x114.png",
       "./img/demo/apple-touch-icon-120x120.png",
       "./img/demo/apple-touch-icon-144x144.png",
       "./img/demo/apple-touch-icon-152x152.png",
       "./img/demo/apple-touch-icon-180x180.png",
       
       "./css/bootstrap.min.css",
       "./js/jquery-3.4.1.slim.min.js",
       "./js/popper.min.js",
       "./js/bootstrap.min.js",
       "./js/object.js",
       "./js/formula.js",
       "./js/form.js",
       ].map(url => new Request(url, {credentials: 'same-origin'})))
   })
   )
})


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log("getting from cache", event.request.url)
      return response || fetch(event.request)
    })
  )
})