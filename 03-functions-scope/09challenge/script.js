// Challenge 1

const getCelsius = function (f) {
    return ((f - 32) * 5) / 9;
};

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2

const minMax = (nums) => {
    return {
        min: Math.min(...nums),
        max: Math.max(...nums),
    };
};

console.log(minMax([1, 2, 3, 4, 5]));
