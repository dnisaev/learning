const num = 3212 // 9414

function squareDigits(num){
    let array = num.toString().split('');
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2);
    }
    return Number(newArray.join(''));
  }

console.log(squareDigits(num));
console.log(typeof squareDigits(num));