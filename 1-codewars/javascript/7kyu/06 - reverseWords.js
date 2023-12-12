let str = 'The quick brown fox jumps over the lazy dog.';

reverseWords(str)

function reverseWords(str) {

    let strToArray = str.split(' ');
    let newArray = [];

    for (let i = 0; i < strToArray.length; i++) {

        let newStr = "";

        for (let j = 0; j < strToArray[i].length; j++) {
            newStr = strToArray[i][j] + newStr;
        }
        newArray.push(newStr.trim());
    }

    return newArray.join(' ');
}