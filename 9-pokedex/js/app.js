let pokemones = []

document.querySelector("#pokedex").addEventListener("submit", getFormData)

function getFormData (e) {
    e.preventDefault()
/*     let p_nombre = document.querySelector('#nombre').value
    let p_tipo = document.querySelector('#tipo').value
    let p_numero = document.querySelector('#numero').value
    let p_altura = document.querySelector('#altura').value
    let p_peso = document.querySelector('#peso').value
    let p_foto = document.querySelector('#foto').value */

    const {nombre, tipo, numero, altura, peso, foto} = e.target
    let pokemon = {
        nombre: nombre.value,
        tipo: tipo.value,
        numero: numero.value,
        altura: altura.value,
        peso: peso.value,
        foto: foto.value
    }

    pokemones.push(pokemon)

    document.querySelector("#pokedex").reset()
    listPokemones()
    // console.log(pokemones)
}

function listPokemones () {
    document.getElementById("listado").innerHTML = ""

    for( let i = 0; i < pokemones.length; i++) {
        let div = document.createElement("div")
        div.classList.add("column", "is-3")

        let card = document.createElement("div")
        card.classList.add("card")

        let cardImage = document.createElement("div")
        cardImage.classList.add("card-image")

        let figure = document.createElement("figure")
        figure.classList.add("image", "is-square", "has-background-light")
        figure.innerHTML = '<img src="'+pokemones[i].foto+'">'

        cardImage.append(figure)

        let cardContent = document.createElement("div")
        cardContent.classList.add("card-content")

        let hTitle = document.createElement("h2")
        hTitle.classList.add("is-size-4", "has-text-weight-bold")
        hTitle.innerHTML = pokemones[i].nombre

        cardContent.append(hTitle)

        let tSpan = document.createElement("span")
        tSpan.classList.add("tag", "is-link")
        tSpan.innerHTML = pokemones[i].tipo

        cardContent.append(tSpan)

        let p1 = document.createElement("p")
        p1.innerHTML = "<b>No." +pokemones[i].numero+"</b>"
        cardContent.append(p1)

        let p2 = document.createElement("p")
        p2.innerHTML = "<b>Altura:"+pokemones[i].altura+"</b>"
        cardContent.append(p2)

        let p3 = document.createElement("p")
        p3.innerHTML = "<b>Peso:" +pokemones[i].peso+"</b>"
        cardContent.append(p3)

        card.append(cardImage)
        card.append(cardContent)
        div.append(card)

        document.getElementById("listado").append(div)
    }
}
