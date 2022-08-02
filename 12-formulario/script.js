const formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (e) => {
    console.log(e.target)
    e.preventDefault()
    const {nombre, apellido, estudiante} = e.target
    const data = { nombre: nombre.value, apellido: apellido.value, estudiante: estudiante.checked}
    alert(JSON.stringify(data))
})