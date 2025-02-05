let x;

//creating an object

const person = {
    name: 'Juan Dela Cruz',
    age: 19,
    isAdmin: true,
    address: {
        street: '143 Paghanapin St.',
        barangay: 'Salawag',
        city: 'Bacoor',
    },
    hobbies: ['music','sports'],
};

//access object properties
x = person.name //dot notation
x = person['age'] //bracket notation
x= person.address.barangay
x= person.hobbies[0]

//Update properties
person.name = "Maria Clara"
person['isAdmin'] = false

//deleting properties
delete person.age

//create new properties
person.hasChildren = true

//Add function
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet()

x = person
console.log(x);