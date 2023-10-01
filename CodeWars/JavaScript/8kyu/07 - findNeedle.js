function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}

// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`;
// }

// let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'needle']

// console.log(findNeedle(haystack))