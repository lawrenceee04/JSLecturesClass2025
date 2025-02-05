//Array literals
const numbers = [12, 45, 33, 29, 39]

//Array constructor
const fruits = new Array('apple', 'grape', 'orange')

//get value by index
x = numbers[3]
x = numbers[3] + numbers[0];

//utilize template literals with array
x = `My favorite fruit is an ${fruits[0]}`

//length
x = numbers.length

//change orange with pears
fruits[2] = 'pear'

//adding fruits to our array (hardcoded)
fruits[3] = 'strawberry'

//use the length as the index and it will always add to the end
fruits[fruits.length] = 'banana'
fruits[fruits.length] = 'blueberry'
fruits[fruits.length] = 'bulok na mangga'

x = fruits
console.log(x);