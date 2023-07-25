// const visitsCountMap = new Map(); // Menyimpan daftar user

// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: 'Jonas'};
// countUser(jonas);
// jonas = null;

// setTimeout(function() {
//     console.log(visitsCountMap);
// }, 10000);

const { inspect } = require("util");
const visitsCountMap = new WeakMap();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);

jonas = null;

setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 100000);
