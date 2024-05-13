console.log(isSquare(-1));  // Output: false
console.log(isSquare(0));   // Output: true
console.log(isSquare(3));   // Output: false
console.log(isSquare(4));   // Output: true
console.log(isSquare(25));  // Output: true
console.log(isSquare(26));  // Output: false

// var isSquare = function (n) {
//     if (n < 0) {
//         return false;
//     }
//     const squareRoot = Math.sqrt(n);
//     return Number.isInteger(squareRoot);
// }

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}