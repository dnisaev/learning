function warnTheSheep(queue) {
    let indexWolf = queue.indexOf("wolf")

    return indexWolf === queue.length - 1
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${queue.length - indexWolf - 1}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))

