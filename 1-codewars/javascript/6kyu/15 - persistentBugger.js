function persistence(num) {
    if (num < 10) return 0

    let result = 1
    for (let digit of num.toString()) {
        result *= +digit
    }

    return 1 + persistence(result)
}

console.log(persistence(25)); // 3
// console.log(persistence(999)); // 4
// console.log(persistence(4)); // 0
