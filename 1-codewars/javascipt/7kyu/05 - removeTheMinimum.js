function removeSmallest(numbers) {
  
  const newArray = [...numbers];
  
  let minNum = newArray[0];
  let minNumIndex = 0;
  
  for (let i = 0; i < newArray.length; i++) {
    
    if (newArray[i] < minNum) {
      minNum = newArray[i];
      minNumIndex = i;
    }
  }
  newArray.splice(minNumIndex,1);
  
  return newArray;
  }