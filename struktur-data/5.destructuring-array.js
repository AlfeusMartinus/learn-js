// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// const [, , tigaFood] = favorites;
// console.log(tigaFood);

// let a = 1;
// let b = 2;

// [a, b] = [b, a]
// console.log('Nilai a :' + a + ' Nilai b :' + b); 

const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
console.log(myFood, herFood);