function sumarUno(numero, callback) { 
    if (numero >= 7) {
        callback("numero muy alto");
        return;
    }
    setTimeout(null, function () {
        //return numero +1;

        callback(null, numero + 1);
    }, 800);

}


// dio error//
sumarUno(4, function (error, nuevoValor) { // callback
    if (error) {
        console.log(error);
        return;
    }
    sumarUno(nuevoValor, function (error, nuevoValor2) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(nuevoValor2)
    });
});