console.log(narcissistic(153), true)
console.log(narcissistic(122), false)

function narcissistic(value) {
    return Array
        .from(String(value), Number)
        .reduce((acc, curr) => acc + (curr ** value.toString().length), 0) === value
}