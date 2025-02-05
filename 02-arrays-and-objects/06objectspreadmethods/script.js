// let x;

// const todo = {}

// todo.id = 1;

// x = todo;

// console.log(x);

//using object constructor
let x;

const todo = new Object(); 

todo.id = 1
todo.name = "Uwian na"
todo.completed = true

x = todo

//object nesting
const person = {
    address: {
        coords: {
            lat: 14.3533,
            lng: 120.598,
        }
    }
}

//access the latitude
x = person.address.coords.lat

//spread operator in objects 
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

//nesting
// const obj3 = {obj1, obj2}


//spread to combine
const obj3 = {...obj1, ...obj2}

//using assign (oldies but not goodies --> before ES6)
const obj4 = Object.assign({}, obj1, obj2)

//Array of objects
const todos = [
    {id: 1, name:'Justine'},
    {id: 2, name:'Vince'},
    {id: 3, name:'Lawrence'},
]

//to access specific objects
x =todos;
x =todos[2];
x =todos[2].name;

//Get array of object keys
x= Object.keys(todo)

//get the length of object
x= todo.length//mali kasi yan
x= Object.keys(todo).length

//get array of object values
x = Object.values(todo)

//check if object has property
x = todo.hasOwnProperty('name')

console.log(x);