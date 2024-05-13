console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);

function findOutlier(integers) {
    const odd = integers.filter(int => int % 2 !== 0);
    const even = integers.filter(int => int % 2 === 0);
    return even.length === 1 ? even[0] : odd[0];
}