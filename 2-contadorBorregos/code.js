let count = 0
let borregos = document.getElementById('botonBorregos')
let descansar = document.getElementById('descansar')

function contarBorregos () {
    count++
    document.getElementById('botonBorregos').innerHTML = count
    console.log(count)
    if(count % 5 === 0) {
        document.getElementById('descansar').innerHTML = '<div class="alert alert-danger">Tomar un descanso</div>'
    } else {
        document.getElementById('descansar').innerHTML = ''
    }
}

document.getElementById('botonBorregos').addEventListener("click", contarBorregos)
//borregos.('botonBorregos').addEventListener("click", contarBorregos)
