self.addEventListener('fetch', event => {
  // if (event.request.url.includes('.jpg')) {
      /*  console.log(event.request.url);
       //   let fotoReq = fetch('img/main.jpg');
       //let fotoReq = fetch(event.request.url);
       let fotoReq = fetch(event.request); 
       event.respondWith(fotoReq); */

      if (event.request.url.includes('.jpg')) {
         let respuesta = fetch('img/main-patas-arriba.jpg') ;
         console.log(respuesta);
         event.respondWith(respuesta);
      }
      
  // }
});