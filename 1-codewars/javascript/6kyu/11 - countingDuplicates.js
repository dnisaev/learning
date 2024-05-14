console.log(duplicateCount(""), 0)
console.log(duplicateCount("aabbcde"), 2)
console.log(duplicateCount("aabBcde"), 2)
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)

function duplicateCount(text) {
    let uniqueCharsSet = new Set()
    let duplicateCharsArray = []

    for (let char of text.toLowerCase()) {
        uniqueCharsSet.has(char) ? duplicateCharsArray.push(char) : uniqueCharsSet.add(char)
    }

    return Array.from(new Set(duplicateCharsArray)).length
}

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
