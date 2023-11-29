const games = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]; // result 12

function points(games) {
    
    let scores = 0;

    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            scores += 3;
        } else if (games[i][0] === games[i][2]) {
            scores += 1;
        } else {
            scores;
        }
    }

    return scores;
  }

  points(games);