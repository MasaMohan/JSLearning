

const bankSbi ={
    bank:"SBI Bank",
    customerName: "Mohan Masa",
    accountNumber:106701508232,
    branch:"Mumbai"

}

const bankLocation ={
street:"Haji Malang",
city:"Mumbai",
pin:421306

}

const bankSbiClone = Object.assign({},bankSbi)
console.table( bankSbiClone);

const bankLocationClone = Object.assign({},bankLocation)
console.table(bankLocation);

const rateOfInterest = {
    homeLoanInterest:9,
    personalLoanInterest:12,
    dueInterest:5
}

const sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);


console.log(`Traversing of an object...`);



for (const key in sbiDetails) {
   
        console.log(key,sbiDetails[key]);
    }

