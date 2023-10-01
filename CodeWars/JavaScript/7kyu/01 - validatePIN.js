function validatePIN(pin) {

    let num = Number(pin);
    let isNum = Number.isInteger(num);
    let lenNum = pin.length;

    if (num < 0) {
        return false
    } else if (pin.indexOf(".") !== -1) {
        return false
    } else if (pin.indexOf(" ") !== -1) {
        return false
    } else if (pin.indexOf("\n") !== -1) {
        return false
    } else if (pin.indexOf("+") !== -1) {
        return false
    } else if (isNum && lenNum === 4 || isNum && lenNum === 6) {
        return true
    } else {
        return false
    }
}
console.log(validatePIN("123+"))