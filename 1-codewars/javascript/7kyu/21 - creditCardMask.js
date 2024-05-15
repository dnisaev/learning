console.log(maskify('5539913768866531'))

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// function maskify(cc) {
//     return cc.length < 5 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4)
// }
