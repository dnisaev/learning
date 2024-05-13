console.log(accum('ZpglnRxqenU'))
console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))

function accum(s) {
    return s
        .split('')
        .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
        .join('-')
}

// function accum(s) {
//     let result = ''
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             j > 0 ? result += s.toLowerCase()[i] : result += s.toUpperCase()[i]
//         }
//         if (i !== s.length - 1) {
//             result += `-`
//         } else {
//             return result
//         }
//     }
// }