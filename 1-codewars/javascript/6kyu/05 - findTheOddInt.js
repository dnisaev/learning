// console.log(`answer = ${findOddJuniorSolution([7])}, should be = 7`);
// console.log(`answer = ${findOddJuniorSolution([0])}, should be = 0`);
// console.log(`answer = ${findOddJuniorSolution([1,1,2])}, should be = 2`);
// console.log(`answer = ${findOddJuniorSolution([0,1,0,1,0])}, should be = 0`);
// console.log(`answer = ${findOddJuniorSolution([1,2,2,3,3,3,4,3,3,3,2,2,1])}, should be = 4`);
// console.log(`answer = ${findOddJuniorSolution([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])}, should be = 5`);
// console.log(`answer = ${findOddJuniorSolution([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])}, should be = -1`);
// console.log(`answer = ${findOddJuniorSolution([20,1,1,2,2,3,3,5,5,4,20,4,5])}, should be = 5`);
// console.log(`answer = ${findOddJuniorSolution([10])}, should be = 10`);
// console.log(`answer = ${findOddJuniorSolution([1,1,1,1,1,1,10,1,1,1,1])}, should be = 10`);
// console.log(`answer = ${findOddJuniorSolution([5,4,3,2,1,5,4,3,2,10,10])}, should be = 1`);
//
// function findOddJuniorSolution(arr) {
//     const countNumbers = {};
//
//     for (const num of arr) {
//         countNumbers[num] = countNumbers[num] ? countNumbers[num] + 1 : 1;
//     }
//
//     const arrayNum= Object.keys(countNumbers).map(str => +str);
//     const minNum = Math.min.apply(null, arrayNum);
//     const maxNum = Math.max.apply(null, arrayNum);
//
//     for (let i = minNum; i <= maxNum; i++) {
//         if (countNumbers[i] % 2 > 0) {
//             return i
//         }
//     }
// }

const findOddSeniorSolution = (arr) => arr.reduce((a, b) => a ^ b);
console.log(`answer = ${findOddSeniorSolution([7])}, should be = 7`);
console.log(`answer = ${findOddSeniorSolution([0])}, should be = 0`);
console.log(`answer = ${findOddSeniorSolution([1,1,2])}, should be = 2`);
console.log(`answer = ${findOddSeniorSolution([0,1,0,1,0])}, should be = 0`);
console.log(`answer = ${findOddSeniorSolution([1,2,2,3,3,3,4,3,3,3,2,2,1])}, should be = 4`);
console.log(`answer = ${findOddSeniorSolution([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])}, should be = 5`);
console.log(`answer = ${findOddSeniorSolution([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])}, should be = -1`);
console.log(`answer = ${findOddSeniorSolution([20,1,1,2,2,3,3,5,5,4,20,4,5])}, should be = 5`);
console.log(`answer = ${findOddSeniorSolution([10])}, should be = 10`);
console.log(`answer = ${findOddSeniorSolution([1,1,1,1,1,1,10,1,1,1,1])}, should be = 10`);
console.log(`answer = ${findOddSeniorSolution([5,4,3,2,1,5,4,3,2,10,10])}, should be = 1`);