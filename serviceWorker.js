/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", e => {
  e.waitUntil(
      caches.open("static").then(cache => {
          return cache.addAll(["/w15_collaborative-react-project-fitness-app/logo192.png"])
      })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", e => {
   e.respondWith(
       caches.match(e.request).then(response => {
           return response || fetch(e.request);
       })
   );
})