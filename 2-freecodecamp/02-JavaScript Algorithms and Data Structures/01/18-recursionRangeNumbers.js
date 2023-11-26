function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
        return [endNum]
    } else {
        let array = rangeOfNumbers(startNum, endNum - 1);
        array.push(endNum);
        return array
    }
  };