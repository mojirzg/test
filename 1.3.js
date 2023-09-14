const arr = [4, [[5], [6, [7], 8], 9, 10]];
const flatArray = arr.flat(Infinity);

console.log(flatArray); // [4, 5, 6, 7, 8, 9, 10]
