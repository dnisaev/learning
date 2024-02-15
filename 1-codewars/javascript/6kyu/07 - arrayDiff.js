console.log(arrayDiff([1, 2], [1])) // [2]
console.log(arrayDiff([1, 2, 2], [1])) // [2,2]
console.log(arrayDiff([1, 2, 2], [2])) // [1]
console.log(arrayDiff([1, 2, 2], [])) // [1,2,2]
console.log(arrayDiff([], [1, 2])) // []
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element));
}