class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); 
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const rabbit1 = new Rabbit("Kuceng", 3);
const eagle1 = new Eagle("Mamat", 1);
console.log(rabbit1);
console.log(rabbit1.eat());
console.log(eagle1);
console.log(eagle1.fly());

const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit instanceof Rabbit); 

const myEagle = new Eagle("Elo", 4);
console.log(myEagle instanceof Eagle); 
console.log(myEagle.isMammal); 