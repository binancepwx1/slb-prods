self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calc_schlumberger').then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./img/logo-purple.png",
 
        "./img/demo/favicon.ico",
        "./img/demo/apple-touch-icon-57x57.png",
        "./img/demo/apple-touch-icon-72x72.png",
        "./img/demo/apple-touch-icon-76x76.png",       
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
      console.log("getting from cache real life ", event.request.url)
      return response || fetch(event.request)
    })
  )
})


