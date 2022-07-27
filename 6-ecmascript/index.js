// Function parameters 

// Default settings

// Before

/* function dataUser(fistName, lastName, age, role) {
    var fistName = fistName || 'Maria'
    var lastName = lastName || 'Dillarza'
    var age = age || 26
    var role = role || "User"

    var message = 'My name is ' + fistName + ' ' + lastName + '. My age is ' + age + ' years old. My rol in the system is '+ role + '.'
    return message
}

console.log(dataUser('Alonso', 'Igartua', 26)) */

// After

function dataUser1(fistName = "Maria", lastName = "Dillarza", age = "25", role = "User") {
    var message = 'My name is ' + fistName + ' ' + lastName + '. My age is ' + age + ' years old. My rol in the system is '+ role + '.'
    return message
}

console.log(dataUser1('Alonso', 'Igartua', 26, 'Admin'))

// Concatenate text in JS

var pet = 'dog'
var cita = '2022-05-03'

// Before
var message = 'My ' + pet + ' has an appointment on ' + cita

// After
var message = `My ${pet} has an appointment on ${cita}`

console.log(message)

// Multiple lines

// Before
console.log('Clean code \n' + 'Introduction\n' + 'This is a book that ....')

// After
console.log(`Clean code 
Introduction
This is a book that ....`)

// Destructuration

var characterBDZ = {
    name: 'Vegeta',
    level: 8000,
    breed: 'saiyajin',
    planet: 'Vegeta',
}

// Before
console.log(characterBDZ.name, characterBDZ.level, characterBDZ.planet)

// After
var {name, level, breed, planet} = characterBDZ

console.log(name, level, planet)

// Spread Operator

/* characterBDZ.age = 25 */

console.log({...characterBDZ, age: 25, height: '1.60'});

var students_male = ['Roberto', 'Victor', 'Alonso', 'Fausto']
var students_female = ['Maria', 'Delia', 'Flor', 'Frida']
// var all_students = [students_male, students_female]
// console.log(all_students.flat()), only use the position 0 
// var all_students = students_male.concat(students_female)
var all_students = [...students_male, ...students_female]

console.log(all_students);

// Types of variables

// var, let, const

var country = 'Mexico'
country = 'USA'
console.log(country)

// Function declaration 

/* function greetings (name) {
    return 'Hello ' + name
} */

/* const greetings = (name) => {
    return 'Hello' + name
} */

// const greetings = (name) => (`Hello ${name}`)

//const greetings = name => `Hello ${name}`

const greetings = data => `Hello ${data.name} ${data.lastName}`

console.log(greetings({name:'Maria', lastName:'Dillarza'}))

// Module
// {} only use for export not for export default 
// import emoji from './modules'

// rename the imported item
// import { config as dataBaseConfig } from './modules'

// JS class   

class Calculator {
    constructor () {
        this.value1 = 0;
        this.value2 = 0;
    }
    sum(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        return this.value1 + this.value2
    }
    subtract(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        return this.value1 - this.value2
    }
}

const sum = new Calculator()
const sub = new Calculator()


console.log(sum.sum(12, 6))
console.log(sub.subtract(12, 6))


class Dates {
    constructor () {
    }
    today(){
        return new Date()
    }

}

const date = new Dates()
console.log(date.today())

