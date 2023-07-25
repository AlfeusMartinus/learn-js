function minimal(a, b) {
  return a <= b ? a : b;
}
console.log(minimal(1, 4));
console.log(minimal(4, 2));
console.log(minimal(10, 10));

function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return i;
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3));