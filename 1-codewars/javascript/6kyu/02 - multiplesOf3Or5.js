let number = 10;

console.log(solution(number));

function solution(number) {

    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

// function solution(number) {
//     if (number <= 3) {
//         return 0
//     }
//
//     let array = [];
//     let result = [];
//
//     for (let i = 1; i < number; i++) {
//         array.push(i);
//     }
//
//     for (let j = 0; j <= array.length; j++) {
//         if (array[j] % 3 === 0 || array[j] % 5 === 0) {
//             result.push(array[j])
//         }
//     }
//
//     return result.reduce((acc, num) => acc + num);
// }