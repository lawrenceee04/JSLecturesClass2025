const fizzBuzz = (num) => {
    const answers = new Array();
    for (let i = 0; i <= num; i++) {
        let answer = '';
        if (i % 3 == 0) {
            answer = answer.concat('Fizz');
        }
        if (i % 5 == 0) {
            answer = answer.concat('Buzz');
        }
        answers.push(answer);
    }
    return answers;
};

console.log(fizzBuzz(100));
