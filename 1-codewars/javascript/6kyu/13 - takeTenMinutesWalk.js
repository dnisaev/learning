function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }

    let n = 0
    let s = 0
    let e = 0
    let w = 0

    for (let direction of walk) {
        switch (direction) {
            case 'n':
                n++;
                break
            case 's':
                s++;
                break
            case 'e':
                e++;
                break
            case 'w':
                w++;
                break
            default:
                return false
        }
    }
    return n === s && e === w
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's']))
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 'w']))