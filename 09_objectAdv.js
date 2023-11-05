



let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person)
console.log(values);

const valuesArray = ['name', 'age', 'isMarried', 'city']

valuesArray.splice(2,1,"graduation");
console.log(valuesArray);

const entry = Object.entries(person);
console.log(entry);

const array0th = entry[0]; //["name","Jenny"]
console.log(array0th);

console.log(array0th[1]);

    
for (const element of entry) {
    console.log(element[0],(element)[1]);
}

console.log(`Traversing of an object...`);

for (const key in person) {
console.log(key,person[key]);
}

const isNameAvailablePerson="name" in person
console.log(isNameAvailablePerson);

const isAvailable = "pin" in person;
console.log(isAvailable);

const  personJenny = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
}

personJenny.age = 25;

console.log(personJenny);
Object.freeze(personJenny) // when we feeze object we cannot update 
// personJenny{}; not allowed


console.log(`Object.assign() `);
let elan ={
    name:"elan",
    age:54,
    isMarried:true,
    country:"USA"
}

const elanClone = Object.assign({},elan)

console.log(elanClone);

let Stew ={
    name:"elan",
    age:54,
    isMarried:true,
    country:"USA"
}

const address= {
    pin:234567,
    city:"Austin Texas "

}

Object.assign(Stew,address)
console.table(Stew)
