// String
const firstName = "Ryan"
console.log(firstName);

//Numbers
const age = 19;
const temp = 98.5

console.log(age);
console.log(temp);

//Boolean
const hasKids = true;
const hasKabit = false;

//Null
const aptNumber = null

//Undefined
let score;
score = undefined

//Symbol
const id = Symbol('id')

//BigInt
const n = 3141592653589793238462643383279028841971693993751058209749445923078164062862089986280348253421170679n

//reference types
const numbers = [1,2,3,4]

const person = {
    fname: "Ryan",
}

function sayHello() {
    console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
