const person = {
  firstName: "Mateus",
  lastName: "Oliveira",
  age: "27",
  hobbies: ["Jogar Video Games", "Jogar Futebol", "Assistir animes"],
  dog: {
    name: "Lui",
    age: 4,
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

const see = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

console.log(person.dog.age);
console.log(dogName);
