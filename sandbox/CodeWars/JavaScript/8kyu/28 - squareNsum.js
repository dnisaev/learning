let numbers = [0, 3, 4, 5];

function squareSum(numbers){
    
    //let newArr = [...numbers]
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] === 1 ? sum += 1 : sum += numbers[i] * numbers[i];
    }

    return sum;
}

console.log(squareSum(numbers));