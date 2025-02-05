const myString = 'developer';
console.log(`From myString = ${myString}`);

// Solution 1

const myNewString1 = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;
console.log(`Solution 1: ${myNewString1}`);

// Solution 2

const myNewString2 = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(`Solution 2: ${myNewString2}`);

// Solution 3

const myNewString3 = `${myString.slice(0, 1).toUpperCase()}${myString.slice(1)}`;

console.log(`Solution 3: ${myNewString3}`);
