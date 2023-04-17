
const cacheName = 'shop';
const assets = [
    '/pages/page.html',
];

self.addEventListener('install', event => {   // برای نصب کش
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener('activate', event => {   //برای این که با تغییر نام کچ قبلی پاک شه و جدید اضافه شه
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== cacheName).map(name => caches.delete(name))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // Check if the request is made over HTTP/HTTPS protocols
    if (event.request.url.startsWith('http')) {
        event.respondWith(
            caches.open(cacheName).then(cache => {
                return cache.match(event.request).then(cachedResponse => {
                    const fetchPromise = fetch(event.request).then(networkResponse => {
                        // Check if the response is valid
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        const clonedResponse = networkResponse.clone();
                        caches.open(cacheName).then(cache => {
                            cache.put(event.request, clonedResponse);
                        });

                        return networkResponse;
                    }).catch(() => {
                        return cachedResponse;
                    });

                    return cachedResponse || fetchPromise;
                });
            })
        );
    }
});


// set up the service worker to use the new icon for its own loading screen
self.addEventListener('load', () => {
    self.registration.showNotification("My PWA", { body: "Loading...", icon: "/images/pc.png" });
  });