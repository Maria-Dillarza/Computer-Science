function factorial () {
    let numero = parseInt(document.getElementById('numero').value)

    if(document.getElementById('numero').value == ''){
        alert('Ingresa un numero')
    } else {
        let i = numero
        let resultado = 1
        for(; i>1; i--){
            resultado = resultado * i
        }
        document.getElementById('resultado').innerHTML = '<p> El factorial de ' + numero + ' es igual a: ' + resultado + '</p>'
    }
}
document.getElementById('button').addEventListener('click', factorial)