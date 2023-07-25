const user = {
  id: 24,
  displayName: "usman",
  fullName: "Alfeus Martinus",
};

function introduce({ displayName, fullName }) {
  console.log(
    `Introduce my self, my display name is ${displayName} and full name is ${fullName}`
  );
}
introduce(user, 2, 3); // => tidak apa-apa memasukan argumen yang tidak sesuai
introduce("1"); // akan undefined
introduce(user.displayName, user.fullName); // ini akan muncul undefined

// Rest Parameter
function sum(...numbers) {
  // ... adalah three consecutive dots untuk menggabungkan beberapa elemen menjadi satu array
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  console.log(numbers);
  return result;
}

console.log(sum(5, 5, 5, 1));
