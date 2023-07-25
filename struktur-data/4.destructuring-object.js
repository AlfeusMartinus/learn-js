const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// const { firstName, lastName, age } = profile;
// console.log(firstName, lastName, age);

// let firstName = 'Budi';
// let age = '20';
// ({ firstName,age } = profile) 

const { firstName: localFirstName, lastName: localLastName, age: localAge} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);