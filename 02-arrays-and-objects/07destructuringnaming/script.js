// Setting object properties with same name as a variable

// const firstName = 'Juan';
// const lastName = 'Dela Cruz';
// const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// console.log(person.age);

// ################################

const firstName = 'Juan';
const lastName = 'Dela Cruz';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age); //this will give us the same output as the original
// ################################
//Destructuring Object properties
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };


// const id = todo.id;
// console.log(id); //1

// ################################
//destructuring the code above
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const { id } = todo;
// console.log(id);

// ################################
//adding title to the output in the console log
const todo = {
  id: 1,
  title: 'Magluto ng Scrammble Egg',
  user: {
    name: 'Juan',
  },
};

const { id, title } = todo;
console.log(id, title);

// const { id, title, user } = todo;
// console.log(user);


// ################################
//Destructure arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

//to destructure arrays, we use brackets
// const [first, second] = numbers;
// console.log(first, second); //first 2 numbers

//using rest
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// ################################
// ################################