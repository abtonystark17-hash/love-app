const cacheName = "love-app-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./bg-music.mp3",
  "./yes.html",
  "./no1.html",
  "./no2.html",
  "./no3.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});