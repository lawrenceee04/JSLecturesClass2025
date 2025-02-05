let x;

const num = new Number(51.35432)

//toString() - returns a string representation of the number
x = num.toString()

//to get the length
x = num.length //this will not work kasi walng property yung number na length
x = num.toString().length

//toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2)

//toPrecision - returns a number with the specified length
// x = num.toPrecision(4)

//toExponential=convert a number to exponential notation and returns its value as a string
// x = num.toExponential(2)

//toLocaleString() - returns a string representation of the number using the current locale

// x = num.toLocaleString('ja-JP')
//valueOf - get the value
x = num.valueOf()

// x = Number.MIN_VALUE
// x = Number.MAX_VALUE




console.log(x, typeof x);