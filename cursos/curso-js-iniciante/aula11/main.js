// Entendendo classes

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }

//   static speak() {
//     console.log("Hello world!");
//   }
// }

// const person = new Person("Mateus", "Oliveira", 27);

// console.log(person);
    
// Person.speak();

// Heranças

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} Barked!`);
  }
}

const animal = new Animal("Lui");
const dog = new Dog("bob");

animal.speak();
dog.speak();
