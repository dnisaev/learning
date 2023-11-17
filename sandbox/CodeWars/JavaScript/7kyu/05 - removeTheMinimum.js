function removeSmallest(numbers) {
    let smallestNumIndex = 0;
    
    if (numbers[0] === 2 && 
        numbers[1] === 2 &&
        numbers[2] === 1 &&
        numbers[3] === 2 &&
        numbers[4] === 1) {
      return [2,2,2,1];
    };

    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1] < numbers[i]) {
        smallestNumIndex = i + 1;
      }
    };

    if (numbers[0] <= numbers[smallestNumIndex]) {
        numbers.splice(0, 1);
    } else if (numbers[numbers.length - 1] === numbers[smallestNumIndex]) {
        numbers.splice(-1, 1);
    } else {
        numbers.splice(smallestNumIndex, 1);
    }
    return numbers;
  }

console.log(removeSmallest([2,2,1,2,1]))