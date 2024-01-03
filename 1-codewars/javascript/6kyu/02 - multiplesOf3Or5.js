let number = 100;

console.log(solution(number));

function solution(number) {
    if (number <= 3) {
        return 0
    }

    let array = [];
    let result = [];

    for (let i = 1; i < number; i++) {
        array.push(i);
    }

    for (let j = 0; j <= array.length; j++) {
        if (array[j] % 3 === 0 || array[j] % 5 === 0) {
            result.push(array[j])
        }
    }

    return result.reduce((acc, num) => acc + num);
}