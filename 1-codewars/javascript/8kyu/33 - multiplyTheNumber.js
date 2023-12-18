function multiply(number){
    let sum = number;
    let numToSting = number.toString();
    for (let i = 0; i < numToSting.length; i++) {
        numToSting[i] === '-' ? sum : sum = sum * 5;
    }
    return sum;
  }

let number;

number = 3; // 15
multiply(number);

number = 10; // 250
multiply(number);

number = 200; // 25000
multiply(number);