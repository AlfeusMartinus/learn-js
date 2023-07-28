import {coffeStock, isCoffeeMachineReady as bang} from './state.js'
// const makeCoffe = (type, miligrams) => {
//     if (coffeStock[type] >= miligrams) {
//         console.log('Kopi berhasil dibuat!');
//     } else {
//         console.log('Biji Kopi Habis!');
//     }
// }
// makeCoffe('liberica', 200);


const displayStock = stock => {
    for(const type in stock) {
        console.log(type);
    }
}
console.log(coffeStock);