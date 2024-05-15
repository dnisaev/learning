const sig = [1, 1, 1, 3, 4, 5, 6]

// console.log(sig.slice(-3).reduce((x, y) => x + y))
console.log(tribonacci([1, 1, 1], 1))

function tribonacci(signature, n) {
    if (n === 1) return [1]
    if (n <= 0) return []
    if (signature.length === n) return signature

    const number = signature.slice(-3).reduce((x, y) => x + y, 0)
    signature.push(number)

    return tribonacci(signature, n)
}