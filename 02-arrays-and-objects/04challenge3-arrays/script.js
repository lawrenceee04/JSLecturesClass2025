// Challenge 1
// Original array

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Modified array

arr.unshift(arr[0] - 1);
arr.push(arr[arr.length - 1] + 1);
arr.reverse();

console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();

const arrFinal = Array.of(...arr1, ...arr2);

console.log(arrFinal);
