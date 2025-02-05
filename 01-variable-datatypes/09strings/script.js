//Strings are primitive but you can use methods in it because JS is using a wrapper so that you can use tyhis methods

let x;

const name = 'Ryan'
const age = 43;

//concatenation
x = 'Hello, my name i ' + name + ' and I am ' + age + 'years old'

//Template literals or template strings (ES6)
x = `Hello, my name is ${name} and I am ${age} years old`

//String Properties and Methods
//Creating a "string object" (JS does this automatically when using property or methods on a primitive string)

const s = new String('Hello World')
x= typeof s

x = s.length

//access value by key
x = s[6]

//shows the prototype of the string object
x = s.__proto__

//returns the characted at the specified index
x = s.charAt(6)

//returns the index of the first occurence of a specified value in a string
x = s.indexOf('l')

//search a string for a specified value
x = s.substring(0,5)//Hello
x = s.slice(-11, -6)
x = s.slice(-11) //Hello World

//trim() - removes white spaces 
x = '          Hello World    '
x = x.trim()

//replace() - replace all instances of a string
x = s.replace('World', 'Coffee') 

//includes() - return true if the string is found
x = s.includes('Hell')

//valueOf() - returns the primitive calue of variable
x = s.valueOf();

//split() = returns an array of strings
x = s.split('')





console.log(x);