function declarative(arr, func) {
  return arr.map(func);
}

function Imperative(arr, func) {
  const result = [];
  for (const i of arr) {
    result.push(func(i));
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;

const declarativeExample = declarative(numbers, square);
const imperativeExample = Imperative(numbers, square);

console.log("Declarative Result:", declarativeExample); // [1, 4, 9, 16, 25]
console.log("Imperative Result:", imperativeExample); // [1, 4, 9, 16, 25]
