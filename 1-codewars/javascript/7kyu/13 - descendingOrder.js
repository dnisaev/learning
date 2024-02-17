console.log(descendingOrder(1234567891))

function descendingOrder(n) {
    return +n.toString().split('').sort((a, b) => b - a).join('')
}