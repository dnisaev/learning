console.log(duplicateEncode("din"),"========== (((")
console.log(duplicateEncode("recede"), "========== ()()()")
console.log(duplicateEncode("Success"), "========== )())())")
console.log(duplicateEncode("(( @"),"========== ))((")

function duplicateEncode(word) {
    const array = word.toLowerCase().split('');
    const charsCount = {};

    for (let char of array) {
        charsCount[char] ? charsCount[char] += 1 : charsCount[char] = 1;
    }

    return array.map(char => charsCount[char] === 1 ? '(' : ')').join('');
}


// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }