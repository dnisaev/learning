function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= (x * n); i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }
    return z
}

console.log(countBy(3, 10))