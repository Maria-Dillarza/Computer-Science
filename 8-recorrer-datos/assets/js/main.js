const usuariosElement = document.querySelector('#usuarios')
const emojiElement = document.querySelector('#emoji')
const codeElement = document.querySelector('#json')

const loadUsers = users => {
  let allUsers = []
  // let gafasDeSol = []
  // let doggy = []
  let filterEmoji = []

  // forEach no crea un arreglo nuevo
  users.forEach((user, i) => {
    let li = document.createElement('li')
    li.innerHTML = user.name
    usuariosElement.appendChild(li)
    // console.log({...user, index: i})
  });
  // map te genera otro arreglo porque retorna datos
  allUsers =   users.map((user, i) => ({...user, index: i}))
  // console.log({...user, index: i})
  //console.log(allUsers)

/*   gafasDeSol = users.filter(user => user.emoji === ':gafas_de_sol:')
  doggy = users.filter(user => user.emoji === ':doggy:') */

  filterEmoji = users.filter(({emoji}) => emoji === ':gafas_de_sol:' || emoji === ':doggy:')
  //console.log(filterEmoji)
  // console.log({...user, index: i})

  filterEmoji.forEach(({emoji}, i) => {
    let li = document.createElement('li')
    li.innerHTML = emoji
    emojiElement.appendChild(li)
  });

  let words = ['a', 'b', 'c', 'd', 'e']
  let position = words.indexOf('c')
  let word = words[words.indexOf('c')]

  console.log('position ', position)
  console.log('word ', word)

  // Obtener el tamaño de un array 

  console.log(allUsers.length)

  //Obtener el último valor del arreglo
  console.log(allUsers[allUsers.length - 1])

  // Array.every si todos cumplen la condición
  let todosMenoresDeEdad = allUsers.every(({age}) => age < 18)
  console.log(todosMenoresDeEdad)

  // Array.some si alguno cumple con la condición 
  let todosMayoresDeEdad = allUsers.some(({age}) => age > 18)
  console.log(todosMayoresDeEdad)

  // Parsear o convertir un objeto a un String
  codeElement.innerText = JSON.stringify(users, null, 2)

  // Imprimir todos los valores de un objeto
  let userObject = users[0]
  for (const key in userObject) {
    console.log(`${key}: ${userObject[key]}`)
  }
}



fetch('./data/users.json')
  .then(response => response.json())
  .then(data => loadUsers(data))
  .catch(() => console.error('Hubo un error'))