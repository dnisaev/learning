function digitalRoot(n) {

    const sumOfNum = Array
        .from(n.toString())
        .reduce((acc, num) => +acc + +num);

    return sumOfNum.toString().length > 1 ? digitalRoot(sumOfNum) : sumOfNum;
}

console.log(`${digitalRoot(493193)} - should be - 2`)

// Senior Solution
//
// function digitalRootSeniorSolution(n) {
//     return (n - 1) % 9 + 1;
// }
//
// console.log(`${digitalRootSeniorSolution(493193)} - should be - 2`)