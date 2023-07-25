function multiPly(a, b) {
  return a * b;
}
console.log(multiPly(3, 4));

function greeting(name, age) {
  if (name === "Alfeus") {
    console.log(`Good morning ${name}🚀 at ${age} year`);
  } else {
    console.log(`Data not found`);
  }
}
greeting("Alfeus", 20);

// Expression function
const greetingName = function (name, language, age) {
  if (language === "Indonesia") {
    return `Halo ${name} Selamat Pagi, hari ini kamu berusia ${age}`;
  } else {
    return `Data ${name} dengan umur ${age} tidak ditemukan!`;
  }
};
console.log(greetingName("Alfeus", "Malaysia", 19));
