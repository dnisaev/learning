console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLowSenior("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

function highAndLow(numbers){
    const arr = numbers.split(' ').map(char => +char);
    const min = arr.reduce((acc, num) =>
        acc >= num ? num : acc);
    const max = arr.reduce((acc, num) =>
        acc >= num ? acc : num);
    return [max, min].join(' ');
}

function highAndLowSenior(numbers){
    const arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}