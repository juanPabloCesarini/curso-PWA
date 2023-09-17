function sumarUno(numero) {

    var promesa = new Promise(function (resolve, reject) {
        console.log(numero);
        if (numero >= 7){
            reject("numero muy alto");
        }
        setTimeout(function () {
            //return numero +1;

            resolve(numero + 1);
        }, 800);
    });
    return promesa;


}

sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .catch(error => {
        console.log("error: " + error);
    })
   