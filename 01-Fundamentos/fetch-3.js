let usuario ={
     nombre: 'Juan Pablo',
     edad:49
};
fetch('https://reqres.in/api/', {
     method:'POST',
     body: JSON.stringify(usuario),    // data que se envia a la api
     headers: {
          'Content-Type':'application/json'
     }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
     console.log('error en la peticion');
     console.log(error);
});

     