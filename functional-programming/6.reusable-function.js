// Array map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}👍`;
});
console.log(newArray);

// Array Filter
const thruthArray = [1, "", "Hallo", 0, null, "Hari", 14].filter((item) =>
  Boolean(item)
);
console.log(thruthArray);

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const lolosBeasiswa = students.filter((student) => student.score > 85);
console.log(lolosBeasiswa);

// Array Reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

// Array Some
const array = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}
const even = array.some((element) => element % 2 === 0);
console.log(even);

// Array Find
const findHarry = students.find((student) => student.name === "Harry");
console.log(findHarry);

// Array Sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000];
const compareNumber = (a,b) => {
  return a-b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

// Array Every