fetch('https://reqres.in/api/users/10000')
     .then(resp => {
          
          if (resp.ok){
             return resp.json();
                    
          }else{
              // console.log('no existe usuario')
              throw new Error("No existe usuario 10000")
          }
     })
     .then(console.log)
     .catch(error =>{
          console.log('Error en la petición');
          console.log(error);
     })

