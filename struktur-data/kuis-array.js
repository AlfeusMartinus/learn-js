const evenNumber = [];

for (let i = 1; i <= 100; i++) {
  i % 2 == 0 ? evenNumber.push(i) : null;
}

console.log(evenNumber);