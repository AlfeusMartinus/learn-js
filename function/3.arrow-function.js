// menggunakan => (fat arrow)

// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// arrow function dengan 1 parameter
const sayHellow = (name) => {
  console.log(`${name}`);
};

// refactor jadi 1 baris
const sayHelloww = (nama) => console.log(`${nama}`);
sayHelloww("Sinurat");

sayHellow("Alfeus Martinus Sinurat🚀");

// arrow function tidak ada parameter
const sayHi = () => {
  console.log("Selamat pagi world🚀");
};
sayHi();
