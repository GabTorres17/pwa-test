const CACHE_NAME = "my-cache-v1";
const urlsToCache = ["/", "/about", "/globals.css"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return Promise.all(
				urlsToCache.map((url) => {
					return fetch(url)
						.then((response) => {
							if (!response.ok) {
								throw new Error(`HTTP error! status: ${response.status}`);
							}
							return cache.put(url, response);
						})
						.catch((error) => {
							console.error(`Failed to cache ${url}:`, error);
						});
				})
			);
		})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
