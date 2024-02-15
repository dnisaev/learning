console.log((createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))) // "(123) 456-7890"
console.log((createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))) // "(123) 456-7890"

function createPhoneNumber(numbers) {
    const string = numbers.join('');
    let result = '(';
    for (i = 0; i < string.length; i++) {
        switch (i) {
            case 2: {
                result += `${string[i]}) `
                break
            }
            case 5: {
                result += `${string[i]}-`
                break
            }
            default: {
                result += string[i]
            }
        }
    }
    return result
}

console.log((createPhoneNumberSenior([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))) // "(123) 456-7890"
console.log((createPhoneNumberSenior([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))) // "(123) 456-7890"

function createPhoneNumberSenior(numbers) {
    let result = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        result = result.replace('x', numbers[i]);
    }
    return result;
}