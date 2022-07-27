function sumatoria () {
    let numero = parseInt(document.getElementById('numero').value)

    if(document.getElementById('numero').value == ''){
        alert('Ingresa un numero')
    } else {
        let i = numero
        let resultado = 0
        for(; i >= 1; i--){
            resultado = resultado +  i
        }
        document.getElementById('resultado').innerHTML = '<p> El secuencia de las sumatoria del  ' + numero + ' es igual a: ' + resultado + '</p>'
    }
}
document.getElementById('button').addEventListener('click', sumatoria)