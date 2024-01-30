console.log(`answer = ${findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])}`);
console.log(`answer = ${findOdd([7])}`);

function findOdd(arr) {

    let countItems = {};
    for (const item of arr) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }

    console.log(countItems)

    let result= 101;
    for (let i = 0; i < arr.length; i++) {
        console.log(countItems[i])
        countItems[i] % 2 > 0 ? result = i : result;
    }

    return result;
}

