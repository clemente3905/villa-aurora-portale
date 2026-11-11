// Serve solo a rendere installabile l'app: non salva nulla, ogni richiesta va in rete (così l'app è sempre aggiornata).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
