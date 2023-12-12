function getGrade(s1, s2, s3) {

  let sum = s1 + s2 + s3;

  let score = sum / 3;

  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  }
}

//////////////// refact ////////////////

function getGrade(s1, s2, s3) {

  let numbers = [s1, s2, s3];
  let numbersCount = numbers.length;

  // -----

  let amount;
  let i;

  function sum(numbers) {
    amount = 0;
    i = 0;

    for (i; i < numbers.length; i++) {
      amount += numbers[i];
    }
    return amount;
  }

  sum(numbers);

  // -----

  let score = amount / numbersCount;

  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  }
}
