// Tarea sobre promesas y fetch
// Realice resoluciÃ³n de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el cÃ³digo del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y gÃ©nero de la persona.
*/

// ResoluciÃ³n de la tarea #1

fetch('https://swapi.dev/api/people/1/') // hago la peticion
     .then(resp => { // promesa
          resp.json() // si está ok convierto a json
               .then(data => { // aca nombro el resultado como data
                    console.log('Nombre: ' + data.name + " Genero: " + data.gender);
               })
     })


// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el cÃ³digo )
 https://swapi.dev/api/people/1/

 Pero con el nombre y el gÃ©nero, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegÃºrese que tenga
 el ID y la fecha de creaciÃ³n del objeto
*/

// ResoluciÃ³n de la tarea #2
function postData(data){
     let persona = {
          nombre: data.name,
          genero: data.gender
     };
     return fetch('https://reqres.in/api/users', {
          method: 'POST',
          body: JSON.stringify(persona),
          headers: {
               'Content-Type': 'aplication/json'
          }
     });

}
fetch('https://swapi.dev/api/people/1/') // hago la peticion
     .then(resp => { // promesa
          resp.json() // si está ok convierto a json
               .then(postData)
               .then(resp2 =>resp2.json())
               .then(console.log);

     })
     

