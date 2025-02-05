//Type conversion is converting a value from one type to another

let amount = "hello";

//Convert string to number
// amount = +amount; // 55 number
// amount =  0 + +amount; // 55 number
// amount = Number(amount) // 55 number
// amount = amount + 0 //550 string

//Convert number to string
// amount = amount.toString();
// amount = String(amount)

// Convert string to decimal
// amount = parseFloat(amount)
// amount = parseInt(amount)

// amount = Boolean(amount)

//ways to get a NaN 
// amount = parseInt(amount)
console.log(Math.sqrt(-1));
console.log(undefined + undefined);
console.log(1 + NaN);
console.log('foo' / 3);


// console.log(amount, typeof amount);