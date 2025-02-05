let x;

const arr = [28, 38, 44, 29, 309, 88]

//push() - push a value on to the end of the array
arr.push(100)

//pop() - takes the last value off
arr.pop()

//unshift - Add a value to the beginning of the array
// arr.unshift(99)

//shift() - removes the first value
// arr.shift()

//reverse() - reverses an array
// arr.reverse()

//includes() - check to see if something is in the array
// x = arr.includes(2912)

//indexof() - return the index of the first match
// x = arr.indexOf(44)


//return array as string
// x = arr.toString()
// x = arr.join()  

//slice() - returns selected elements in an array as a NEW array. This takes in the index of the first element up to the index before the last element
// x= arr.slice(1,4)  //38, 44, 29

//splice() - works like slice except it takes the index of the first element and the number of elements after that as a second argument. It also mutates the original array
console.log(arr);
// x= arr.splice(1,4) //38, 44, 29, 309

//remove a single element / value
// x = arr.splice (3,1)

//chaining methods = some methods can be chained depending on the return value
// x = arr.splice(1, 4).reverse().charAt(0).toString() //this will give an error kasi yung charAt hindi applicable sa array
x = arr.splice(1,4).reverse().toString().charAt(0)
console.log(x);


// x = arr
// console.log(x);