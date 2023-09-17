function retornaTrue(){
     return true;
}
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
          setTimeout(()=>resolve(numero+1),300);
     });
}
//sumarLento(5).then(console.log);
//sumarRapido(3).then(console.log);
let cosas = [sumarLento(10), sumarRapido(5), true, "hola mundo", retornaTrue()];
Promise.all(cosas)
       .then(respuestas => {
          console.log(...respuestas);
       })
       .catch(console.log);