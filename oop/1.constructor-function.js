// menggunakan function
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is driving`);
};
Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
};
Car.prototype.turn = function () {
  console.log(`${this.brand} ${this.color} is turning`);
};

const car1 = new Car("Xenia", "Silver", 400, "xe-01");
car1.drive();

// Menggunakan class
class Car {
  constructor(brand, color, maxSpeed, policeNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.policeNumber = policeNumber;
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand} ${this.color} is turning right↪️`);
  }
}

const car2 = new Car("Xenia", "Silver", 400, "xe-01");
console.log(car1);
car1.drive();
car1.turn();
