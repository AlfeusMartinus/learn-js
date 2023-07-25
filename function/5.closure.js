function init() {
  const name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}
init();

// JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java. Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun. Kenapa kita membutuhkan private method? Salah satunya adalah untuk membatasi akses ke fungsi atau variabel. Perhatikan contoh berikut:

// contoh tidak private
let counter = 0;

const add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
console.log(add());
counter = 25;
console.log(add());

// contoh yang private menggunakan closure
const addNumber = () => {
  let konter = 0;
  return () => {
    return ++konter;
  };
};

const addCounter = addNumber();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
