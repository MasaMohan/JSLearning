
// Using literals object

let personalDetail = {
    name: "Mohan masa",
    city: "Delhi",
    contactDetail:{
     mobileNumber: 9594525911,
     emailAddress: "masamohan14@gmail.com"


    }

}

let collegeDetail = {
    name: "Delhi University Engineering College",
    degree: "B.E(Comp)",
    passingYear: 2023
   

}

Object.assign(personalDetail,collegeDetail);


// Object.assign(stdDetails,personalDetails,collegeDetails)

console.log(`Merged Details: ${personalDetail}`)
console.table(personalDetail);


let friends = ["Mukund","Mayur","Mona","Saurab"];

const free = Object.freeze(friends);
console.log(free);

for (const element of friends) {
     console.log(element);
           
    }

    let str = "Codemind Technology";

let reverse = "";

for (let index = str.length-1; index >=0; index--) {
 
    if (str.charAt(index)==" ") {
        break;
        
    } else {
        reverse= reverse+str.charAt(index)
        
    }
}


console.log(`6==> Reverse Second word of "${str}" is : "${reverse}"`);

