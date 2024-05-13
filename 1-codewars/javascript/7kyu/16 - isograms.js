console.log(hasDuplicateLetters('Dermatoglyphics'))
console.log(hasDuplicateLetters('aba'))
console.log(hasDuplicateLetters('moOse'))

function hasDuplicateLetters(str) {
    const string = str.toLowerCase();
    const charSet = new Set();
    for (let char of string) {
        if (charSet.has(char)) {
            return false;
        } else {
            charSet.add(char);
        }
    }
    return true;
}

// console.log(isIsogram('Dermatoglyphics'))
// console.log(isIsogram('aba'))
// console.log(isIsogram('moOse'))
//
// function isIsogram(str) {
//     const string = str.toLowerCase()
//
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < string.length; j++) {
//             if (i !== j)
//                 if (string[i] === string[j]) return false
//         }
//     }
//     return true
// }