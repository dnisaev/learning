const string = "This is another test";

function spinWords(string){
  let array = string.split(' ');
  let reverseArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      let reverseWord = '';
      for (let j = 0; j < array[i].length; j++){
        reverseWord = array[i][j] + reverseWord;
      }
      reverseArray.push(reverseWord);
    } else {
      reverseArray.push(array[i]);
    }
  }

  return reverseArray.join(' ');
}

console.log(spinWords(string))