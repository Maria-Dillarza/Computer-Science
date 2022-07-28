const TOTAL_NUMEROS = 100
const listadoDeNumeros = []
const numbersGrid = document.querySelector('#numbers-grid')

const esPrimo = (num) => { 
    if (num !== undefined) {
        if ( num == 1) {
            return false
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log('No es primo')
                return false
            }
        }
        console.log('Es primo')
        return true
    } else {
        console.error('Debes ingresar un número')
    }
}

for ( let i = 1; i <= TOTAL_NUMEROS; i++) {
    listadoDeNumeros.push({
        numero: i,
        esPrimo: esPrimo(i)
    })
}

listadoDeNumeros.forEach((element) => {
    const square = document.createElement('div')
    numbersGrid.appendChild(square)
    square.innerHTML = element.numero
    element.esPrimo 
    ? square.classList.add('primo__si') 
    : square.classList.add('primo__no')
})



