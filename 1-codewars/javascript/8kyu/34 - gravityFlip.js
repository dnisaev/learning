const flip = (d, a) => {
    return d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
}

console.log(flip('L', [2, 2, 3, 1, 6, 5, 3, 4]));
console.log(flip('R', [2, 2, 3, 1, 6, 5, 3, 4]));