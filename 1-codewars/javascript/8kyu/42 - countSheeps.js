console.log(countSheeps([false,true,true,false,true,false,true,false,false]))
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))
console.log(countSheeps([undefined,null,null,false,undefined]))
console.log(countSheeps([]))

// function countSheeps(sheep) {
//     return sheep.filter(x => x === true).reduce((x, y) => x + y, 0)
// }

function countSheeps(sheep) {
    return sheep.filter(Boolean).length
}