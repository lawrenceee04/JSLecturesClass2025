// Ways to declare variables
// var | let | const


let firstName = "Juan"
const lastName = "Cruz"

console.log(firstName, lastName);

let age = 30;
console.log(age);

//Naming COnventions
// only letters, numbers, underscores and dollar signs
// cannot start with a number

// MultiWord Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

let score
score = 1

if (true) {
    score = score + 1
}

console.log(score);

// This will result in error because x is declared constant
/* const x = 100
x = 200
console.log(x); */

let score1;

const arr = [1,2,3,4]
arr.push(5)
console.log(arr);

// objects
const person = {
    name: "Ryan",
}

console.log(person);
person.name = "Alden"
person.email = "ryan@iskolarniprof.online"
console.log(person);

let a,b,c;
const d = 10, e = 20, f = 30;
console.log(d);
console.log(a);