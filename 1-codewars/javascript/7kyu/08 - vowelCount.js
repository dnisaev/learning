function getCount(str) {

    let count = 0;
    const arr = Array.from(str.toLowerCase());
    const arrChar = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrChar.length; j++) {
            arr[i] === arrChar[j] ? count += 1 : count
        }
    }
    return count
}

const str = 'hello'

console.log(getCount(str))