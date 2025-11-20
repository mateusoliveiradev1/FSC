const names = ["Mateus", "Raquel", "Solange", 10, false];

const raquel = names[1];

names.push("Pedro");
names.unshift("Caua");

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

const indexOfmateus = names.indexOf("Mateus");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names);

console.log(names);
console.log(sortedNames);
console.log(namesIsArray);
