console.log(XO("zpzpzpp"), true)
console.log(XO('xo'), true)
console.log(XO("xxOo"), true)
console.log(XO("xxxm"), false)
console.log(XO("Oo"), false)
console.log(XO("ooom"), false)

// function XO(str) {
//     const array = str.toLowerCase().split('')
//     const x = [];
//     const o = [];
//
//     for (let i = 0; i < array.length; i++) {
//         switch (array[i]) {
//             case 'x':
//                 x.push(array[i])
//                 break
//             case 'o':
//                 o.push(array[i])
//         }
//     }
//     return x.length === o.length
// }

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}