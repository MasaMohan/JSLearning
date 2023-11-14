
//1. Create the object → ‘bankSbi’ using literals with at least 4 properties


let bankSbi = {
    bankName: "SBI Bank",
    location: "Mumbai",
    accountNumber: 12345,
    ifscCode: "sbi125234",

}

//2. Create the object → ‘bankLocation’ using literals with properties: street, city, pin_code

let bankLocation = {

    street:"Haji Malang",
    city: "Kalyan",
    pin:421306,

}

Object.assign(bankSbi,bankLocation);
console.log("After cloning  with bankLocation ");

console.table(bankSbi);

let rateOfInterest = {
    homeLoanInterest: "10%",
    personalLoanInterest: "12",
    dueInterest: "5%"
}

//5. Merge the step 1, step 2 and step 4 objects into new object namely → sbiDetails
//Log all the properties that ‘sbiDetails’ got after merging with meaning message//

const sbiDetail = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`Merging Object bankSbi,bankLocation and rateOfInterest in sbiDetails`);
console.table(sbiDetail);



console.log(`Traversing of an object sbiDetails`);
for (const key in sbiDetail)
    {
   console.log(key, sbiDetail[key]);



    }

    