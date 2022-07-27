function numeroPrimo () {
    let numero = parseInt(document.getElementById('numero').value)
    let resultado = 0

    if(numero < 2){
            alert('Solo se permiten números mayores o iguales a 2')
    } else {

        for(i=1; i < numero; i++){
            if( ( numero % i ) === 0 && i > 1) {
                resultado = 'No es un numero primo'
                document.getElementById('resultado').innerHTML = resultado
                break;
            } if ( resultado === 0 && (i + 1) === numero ) {
                resultado = 'Es un numero primo'
                document.getElementById('resultado').innerHTML = resultado
            }
        }
    }
}

document.getElementById('button').addEventListener('click', numeroPrimo)