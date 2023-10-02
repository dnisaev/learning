function spinAround(turns) {
    let sum = 0;
    for (let i = 0; i < turns.length; i++){
      if (turns[i] === "right"){
        sum += 90    
      } else if (turns[i] === "left"){
        sum -= 90
      } else {
        sum = 0;
      }
    }
    return Math.floor(Math.abs(sum / 360))
  }