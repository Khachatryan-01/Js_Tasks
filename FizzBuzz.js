function FizzBuzz(number) {

    let value = '';

    if (number % 3 === 0) {
        value += 'Fizz'
    } 
    if (number % 5 === 0) {
        value += 'Buzz'
    }
    if(!value){
        value = 'Incorrect Value'
    }

    return value;
}

console.log(FizzBuzz(15)); // FizzBuzz
console.log(FizzBuzz(3));  // Fizz
console.log(FizzBuzz(5));  // Buzz
console.log(FizzBuzz(14)); // Incorrect Value