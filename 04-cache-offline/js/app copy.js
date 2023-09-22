

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}
if (window.caches) {
    caches.open('prueba-1'); // almacena
    caches.open('prueba-2');
    // caches.has('prueba-2').then(console.log) // comprueba si existe
    // caches.delete('prueba-1').then(console.log) // borra

    caches.open('cache-v1.1').then(cache => {

        // cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() => {
     //       cache.delete('/css/style.css');
            cache.put('index.html', new Response('Hola Mundo'));
        });

    /*     caches.match('/index.html') // para saber si existe en cache
            .then(res => {
                res.text().then(console.log);
            }) */

})
    caches.keys().then(key => {
        console.log(key);
    })

};