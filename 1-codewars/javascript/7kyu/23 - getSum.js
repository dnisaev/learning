console.log(getSum(0,-1), -1)
console.log(getSum(0, 1),  1)
console.log(getSum(2, 2),  2)
console.log(getSum(-1, 2),  2)
console.log(getSum(1, 1),  1)

function getSum(a, b) {
    const array = []
    if (a > b) {
        for (let i = b; i <= a; i++) {
            array.push(i)
        }
    } else {
        for (let i = a; i <= b; i++) {
            array.push(i)
        }
    }
    return array.reduce((x, y) => x + y, 0)
}