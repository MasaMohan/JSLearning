


// Object creation using object literals

let person= {
 name:"Jenny",
 age: 22,
 isMarried: true,
 show:function(){
    console.log(`Hi Hello,How are you ?`);
 }
}

console.log(typeof person);

console.log(person);

// Property access
//1. Dot Notation

let personName = person.name;
console.log(`Person name is: ${personName}`);

personAge = person.age;
console.log(`Person age is: ${personAge}`);

// 2. [] Notation
let nameOfPerson = person["name"]
console.log(`Person name is: ${nameOfPerson}`);


console.log(`Adding property in object`);
person.city = "Pune";
console.log(person);

console.table(person);


person.age = 20;
console.log(person);

console.log(`Delete property from an object`);
delete person.age;
console.log(person);

person.show();
person.display=function(){
    console.log(`I am inside display function`);
}
console.log(person);

console.table(person);
person.display();





console.log(`
========Nested Object=====
-+`);
const personElon = {
    name: "Elon Musk",
    age:54,
    totalCompany:9,
    companies: {
        tesla: {
            companyName: "tesla",
            totalEmployee: 4500,
            location: "USA",
        },
        twitter: "150B USD",
        spacex: "200B USD"
    },
    kidsName:["Denny","Weny","Rony","Randy"]
}
console.log(personElon.companies.tesla);
console.log(personElon.kidsName[0]);
console.log(personElon.kidsName.length);

personElon.kidsName.push("Stew")

console.log(personElon.kidsName);

for (const kid of personElon.kidsName) {
    console.log(kid);
}

console.log(personElon.companies.tesla.location);