numbers = [0, 3, 4, 5];

function squareSum(numbers){
    
    let newArr = [...numbers]
    let sum = 0;

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] === 1 ? sum += 1 : sum += newArr[i] * newArr[i];
    }

    return sum;
}

console.log(squareSum(numbers));