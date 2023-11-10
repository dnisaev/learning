function sameCase(a, b) {
    if (a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
        return 1
    } else if (a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else if (a.toLowerCase() === a.toLowerCase() || b.toLowerCase() === b.toLowerCase()) {
        return 0
    }
}

console.log(sameCase("a", "a"))