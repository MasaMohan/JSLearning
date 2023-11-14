let firstName = "Mohan";

let lastName = "Masa";

let myName = firstName; // deep clone primitive data

console.log(myName);
firstName = "MM";

console.log(firstName);

const person = {
  name: "Elon",
  city: "Pune",
  isMarried: true,
};

let elonPerson = {
  country: "USA",
};

elonPerson = person; // Shallow clone
elonPerson.city = "Mumbai";

console.log(elonPerson.city);

console.log(person.city);

let stdNagesh = {
  name: "Nagesh",
  age: 22,
  graduation: "BE- computer Science",
};

let stdGanesh = { ...stdNagesh }; // Deep clone using spread operator
stdGanesh.name = "Ganesh";

console.log(stdNagesh.name);

let stdJenny = {
  name: "Jenny",
  age: 22,
  gender: "Female",
  mark: {
    computer: 96,
    math: 78,
    english: 56,
  },
};

let stdBill = JSON.parse(JSON.stringify(stdJenny)); // Deep clone when we have nested object

console.table(stdBill);
