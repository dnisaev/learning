console.log(toCamelCase("the_stealth_warrior"))

function toCamelCase(str) {
    return str
        .replace(/[^a-zA-Z]/g, ' ')
        .split(' ')
        .map(((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('')
}