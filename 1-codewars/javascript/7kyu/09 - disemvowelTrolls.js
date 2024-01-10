function disemvowel(str) {
    let arr = str.split(' ');
    let result = arr.map(word => word.replace(/[aeiou]/gi, ''))
    return result.join(' ')
  }

  console.log(disemvowel('falsy, truthy!'));