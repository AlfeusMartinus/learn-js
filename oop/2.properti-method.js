// class Mail {
//     constructor(sender, receiver, subject, body) {
//         this.sender = sender;
//         this.receiver = receiver;
//         this.subject = subject;
//         this.body = body;
//         // membuat kode token sukses terkirim
//         this.tokenNumber = `${sender}-${Math.floor(Math.random() * 1000) + 1}`
//     }

//     get SubBod() {
//         return `${this.subject} | ${this.body}`;
//     }

//     set SubBod(subBod) {
//         const [subject, body] = subBod.split(' ');
//         this.subject = subject;
//         this.body = body;
//     }
// }

// const mailFirst = new Mail('AlfeusMartinus', 'Sandhika Galih');
// Mail.tokenNumber = '10291092';
// console.log(mailFirst);

// Mail.subject = 'Achievment';
// console.log(mailFirst);

class Car {
    #chassisNumber = null;

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

const car = new Car('BMW', 'Black', 109);
console.log(car.chassisNumber);
car.chassisNumber = 'awdawd';
console.log(car.chassisNumber);
