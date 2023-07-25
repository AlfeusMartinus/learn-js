const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others]; // ini penggabungan manual
const allVavorit = [...favorites, ...others] // ini penggabungan menggunakan spread operator

console.log(allVavorit);

console.log(favorites);
const sum = favorites.length;

// Menggunakan Spread Operators
console.log(...favorites);

