let numbers = [0, 3, 4, 5];

function squareSum(numbers){
    
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }

    return sum;
}

console.log(squareSum(numbers));