var cacheName="v1";self.addEventListener("active",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(e!==cacheName)return console.log("Service Worker: Clearing Old Cache"),caches.delete(e)}))))}),self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).then(c=>{const t=c.clone();return caches.open(cacheName).then(c=>{c.put(e.request,t)}),c}).catch(()=>caches.match(e.request).then(e=>e)))});