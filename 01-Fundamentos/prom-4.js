
function sumarLento(numero){
     return new Promise(function(resolve,reject){

          setTimeout(function(){
               resolve(numero+1);
               //reject("sumar lento falló");
          },800);
     });
     
}

let sumarRapido = (numero) => {
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               reject("error en sumar rápido");
               //resolve(numero+1);
          }, 1000);
     });
}

Promise.race([sumarLento(5), sumarRapido(10)])
       .then(respuesta=>{
          console.log(respuesta);
       })
       .catch(console.log);