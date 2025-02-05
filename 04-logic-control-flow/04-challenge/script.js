const calculator = (num1, num2, op) => {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'ERROR: Invalid operator';
    }
};

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));
