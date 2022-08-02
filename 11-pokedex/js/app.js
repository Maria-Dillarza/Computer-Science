let pokemones = []// todos los pokemones
let pokemones2 = [] // todos los pokemones menos los filtros


window.onload = function () {
    
    fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
    .then(response => response.json())
    .then(data => {
        pokemones = data
        pokemones2 = pokemones
        listPokemones(pokemones)
    })
    
    const close = document.querySelector('#delete')
    close.addEventListener('click', function() {
        document.querySelector('#popup').classList.toggle('is-active')
    })

    document.getElementById("reset").addEventListener("click", getFullList);
    
    getFavoritos()

    document.getElementById("favoritos").addEventListener("click", function(){
        document.getElementById("mis-favoritos").classList.toggle("is-hidden");
        /*var resultados= JSON.parse(sessionStorage.getItem("favoritos"))
        listPokemones(resultados);*/

    })

    document.getElementById("pokemon_type").addEventListener('change', function(e){
        
        let tipo_buscado = e.target.value

        if(tipo_buscado == "") {
            listPokemones(pokemones2)
        } else {
            pokemones2 = pokemones2.filter((pokemon) => pokemon.type.includes(tipo_buscado))
            listPokemones(pokemones2)
        }
    })

    document.querySelector('#buscar').addEventListener("keyup", function(e){
        if(e.target.value.length >= 3){
    /*         for (let i = 0; i < pokemones.length; i++){
                if(pokemones[i].name.toLowerCase().includes(e.target.value.toLowerCase())){
                    resultados.push(pokemones[i])
                }
            } */

            pokemones2 = pokemones2.filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))


            listPokemones(pokemones2)
        }
    })

/*     document.querySelector('#es-agua').addEventListener("click", function(e){
            let resultados = pokemones.filter((pokemon) => 
                pokemon.type.includes("water")
            )
            listPokemones(resultados)
    })

    document.querySelector('#es-dos-tipos').addEventListener("click", function(e){
        let resultados = pokemones.filter((pokemon) => 
            pokemon.type.length == 2
        )
        listPokemones(resultados)
    }) */

    document.querySelector('#ascendente').addEventListener("click", function(){
        pokemones2.sort((a,b) => a.name > b.name ? 1 : -1)
        listPokemones(pokemones2)
    })

    document.querySelector('#descendente').addEventListener("click", function(){
        pokemones2.sort((a,b) => a.name > b.name ? -1 : 1)
        listPokemones(pokemones2)
    })


}

function getFullList()
{
    pokemones2=pokemones;
    listPokemones(pokemones2);
    document.querySelector('#buscar').value = ''
    document.querySelector('#pokemon_type').value = ''
}

function getFavoritos(){
    document.querySelector("#listado-favoritos").innerHTML='';
    var listadoFavoritos = JSON.parse(sessionStorage.getItem("favoritos"));
    for(var i=0;i<listadoFavoritos.length;i++){
        document.querySelector("#listado-favoritos").innerHTML+="<div class='has-text-centered'>"+listadoFavoritos[i].name+"</div>"
    }
}

function listPokemones (pokemones) {
    document.getElementById("listado").innerHTML = ""

    for( let i = 0; i < pokemones.length; i++) {
        let div = document.createElement("div")
        div.classList.add("column", "is-3")

        let card = document.createElement("div")
        card.classList.add("card")
        // card.dataset.name = pokemones[i].name // No visible
        card.setAttribute("data-name", pokemones[i].name) // Visible
        card.setAttribute("data-number", pokemones[i].number)
        card.setAttribute("data-weight", pokemones[i].weight)
        card.setAttribute("data-height", pokemones[i].height)
        card.setAttribute("data-id", pokemones[i].id)
        card.setAttribute("data-imagen", pokemones[i].ThumbnailImage)
        card.setAttribute("data-type", pokemones[i].type)

        card.addEventListener('click', gritoBatalla)

        var buttonFav = document.createElement("button");
        buttonFav.dataset.id=pokemones[i].id;
        buttonFav.classList.add("button","is-warning", "is-fav");
        buttonFav.innerHTML="<span class='icon'> <i class='fa fa-star'> </i> </span>"
        buttonFav.addEventListener("click", function(evt){
            //evt.preventDefault();
            evt.stopPropagation();
            var id = parseInt(evt.currentTarget.dataset.id);
            console.log(evt.currentTarget.dataset.id);
            
            var resultados = pokemones.filter((pokemon) =>
                pokemon.id === id
            );

            var listadoFavoritos = JSON.parse(sessionStorage.getItem("favoritos"));
            
            if(listadoFavoritos == null){
                sessionStorage.setItem("favoritos",JSON.stringify(resultados));
            }else{
                listadoFavoritos.push(resultados[0]);
                sessionStorage.setItem("favoritos",JSON.stringify(listadoFavoritos));
            }
            getFavoritos();
            console.log(listadoFavoritos);
        })

        card.append(buttonFav);

        let cardImage = document.createElement("div")
        cardImage.classList.add("card-image")

        let figure = document.createElement("figure")
        figure.classList.add("image", "is-square", "has-background-light")
        figure.innerHTML = '<img src="'+pokemones[i].ThumbnailImage+'">'

        cardImage.append(figure)

        let cardContent = document.createElement("div")
        cardContent.classList.add("card-content")

        let hTitle = document.createElement("h2")
        hTitle.classList.add("is-size-4", "has-text-weight-bold")
        hTitle.innerHTML = pokemones[i].name

        cardContent.append(hTitle)

        for ( let j = 0; j < pokemones[i].type.length; j++) {
            let tSpan = document.createElement("span")
            tSpan.classList.add("tag", "mr-1")
            tSpan.innerHTML = pokemones[i].type[j]
            type = pokemones[i].type[j]
            var color = typeColor(type)
            tSpan.classList.add(color)
            cardContent.append(tSpan)
        }

        let p1 = document.createElement("p")
        p1.innerHTML = "<b>No. " +pokemones[i].number+"</b>"
        cardContent.append(p1)

        let p2 = document.createElement("p")
        p2.innerHTML = "<b>Altura: "+pokemones[i].height+"</b>"
        cardContent.append(p2)

        let p3 = document.createElement("p")
        p3.innerHTML = "<b>Peso: " +pokemones[i].weight+"</b>"
        cardContent.append(p3)

        card.append(cardImage)
        card.append(cardContent)
        div.append(card)

        document.getElementById("listado").append(div)
    }
}

function gritoBatalla(e) {
    //alert(e.currentTarget.dataset.name)
    //alert(e.currentTarget.dataset.number)
    // document.querySelector('#popup').classList.add('is-active')
    // document.querySelector('#popup').style.display='block'
    console.log(e.currentTarget.dataset)

    let info = e.currentTarget.dataset

    console.log(info.type.split(","))

    document.querySelector('#tags').innerHTML=''

    var tipoArreglo = info.type.split(",")

    for ( let j = 0; j < tipoArreglo.length; j++) {
        let tSpan = document.createElement("span")
        tSpan.classList.add("tag", "mr-1")
        tSpan.innerHTML = tipoArreglo[j]
        
        var micolor = typeColor(tipoArreglo[j])
        tSpan.classList.add(micolor)
        console.log(micolor)
        document.querySelector('#tags').append(tSpan)
    }

    document.querySelector('#name').innerHTML = info.name
    document.querySelector('#imagen').src = info.imagen
    document.querySelector('#number').innerHTML = info.number
    document.querySelector('#altura').innerHTML = info.height
    document.querySelector('#peso').innerHTML = info.weight

    document.querySelector('#popup').classList.toggle('is-active')
}


function typeColor(tipo){
    var colorClass;
    switch(tipo){
        case "grass":{
            colorClass="grass";
            break;
        }
        case "poison":{
            colorClass="poison";
            break;
        }
        case "fire":{
            colorClass="fire";
            break;
        }
        case "water":{
            colorClass="water";
            break;
        }
        case "psychic":{
            colorClass="psychic";
            break;
        }
        case "dark":{
            colorClass="dark";
            break;
        }
        case "bug":{
            colorClass="bug";
            break;
        }
        case "dragon":{
            colorClass="dragon";
            break;
        }
        case "electric":{
            colorClass="electric";
            break;
        }
        case "flying":{
            colorClass="flying";
            break;
        }
        case "ghost":{
            colorClass="ghost";
            break;
        }
        case "ground":{
            colorClass="ground";
            break;
        }
        case "ice":{
            colorClass="ice";
            break;
        }
        case "rock":{
            colorClass="rock";
            break;
        }
        case "steel":{
            colorClass="steel";
            break;
        }
        case "fairy":{
            colorClass="fairy";
            break;
        }
        default:{
            colorClass="normal";
        }
    }
    return colorClass;
}
