console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => a - b).slice(0, 2).reduce((sum, current) => sum + current, 0)
}