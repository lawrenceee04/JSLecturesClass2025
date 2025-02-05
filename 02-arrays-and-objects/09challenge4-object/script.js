// Step 1

const library = [
    {
        title: 'Introduction to Engineering Programming',
        author: 'James Paul Holloway',
        status: true,
    },
    {
        title: 'Understanding Open Source & Free Software Licensing',
        author: 'Andrew M. St. Laurent',
        status: false,
    },
    {
        title: 'Python Crash Course',
        author: 'Eric Matthes',
        status: true,
    },
];

// Step 2

library[0].status = true;
library[1].status = true;
library[2].status = true;

// Step 3

const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4

console.log(JSON.stringify(library));
