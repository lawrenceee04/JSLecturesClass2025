// //Define a function
function sayHello() {
  console.log('Hello Baby!');
}

//invoke /execute / call the function
sayHello();

// Define a function with parameters
function add(num1, num2) {
  //num1 and num2 parameters (params)
  console.log(num1 + num2);
}
// Parameters are the names of the variables that are used to pass data into a function
//Arguments are the values that are passed into a function

add(5,10)

function subtract(num1, num2) {
  console.log('Hello before return');

  return num1 - num2;
  console.log('Hello after return');
}
const result = subtract(10,2);
console.log(result);