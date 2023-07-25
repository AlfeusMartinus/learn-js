let object = {
    name: 'Luke Skywalker',
    age: 19,
    species: 'Human',
    "hair color": 'Blond'
}

console.log(`Hello world, my name ${object.name}🚀 and my age is ${object.age}`);
console.log(`my hair color is ${object["hair color"]}`);

object["hair color"] = 'Light Gray';

delete object["hair color"];

console.log(object);    