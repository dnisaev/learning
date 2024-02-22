var countBits = function (n) {
    return n <= 0 ? n : n.toString(2).split('').reduce((acc, num) => +acc + +num)
};

console.log(countBits(1234))