console.log(order("is2 Thi1s T4est 3a"), "=== Thi1s is2 3a T4est")

function order(words) {
    return words
        .split(' ')
        .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
        .join(' ')
}