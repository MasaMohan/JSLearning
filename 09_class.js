

let personJenny = {
    name :"Stew",
    age:28,
    isMarried:true

}


let personElon = {
    name :"Stew",
    age:28,
    isMarried:true

}


let personStew = {
    name :"Stew",
    age:28,
    isMarried:true

}

class Person {
    //properties
    firstName
    lastName
    city
    graduation

    // construction
    constructor(firstName,lastName,city,graduation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.graduation = graduation;
        
    }
    //method
}

const personElan = new Person("Elon","Musk","Austin","MSC Physics")

console.log(personElan);

console.log(`Elon Details: ${personElan.firstName},${personElan.lastName},${personElan.city},${personElan.graduation}`);

const personStew1 = new Person("Stew","Job","San Francisco","Dropout");
console.log(personStew1);

const personBill =  new Person("Bill","gate","San Francisco","Dropout");
console.log(personBill);

const personRatan = new Person("Ratan","Tata","Mumbai","Architecture");
console.log(personRatan);

console.log(`Ratan Sir: ${personRatan.graduation}`);

console.log(`=============array of Object ===============`);
const arrayPerson = [personBill,personElan,personJenny,personRatan,personStew]
for (const element of arrayPerson) {
 console.log(element);   
}

