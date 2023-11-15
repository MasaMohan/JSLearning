

// Create a class ‘Bank’ with all possible data members in such as way that all properties
//should be initialized using constructor.



class Bank {
constructor(bank_name,location,account_no,ifsc,interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;

}

}

// Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank 

const axis_bank = new Bank("Axis Bank","Pune","12345","axis123","12%");
console.log("Details",axis_bank);


const sbi_bank = new Bank("SBI Bank","Mumbai","12345","sbi123","10%");
console.log("Details",sbi_bank);


const icici_bank = new Bank("Icici Bank","Delhi","12345","icici123","11%");
console.log("Details",icici_bank);


const kotak_bank = new Bank("Kotak Bank","Goa","12345","kot123","14%");
console.log("Details",kotak_bank);


const hdfc_bank = new Bank("HDFC Bank","Nashik","12345","hdfc123","14%");
console.log("Details",hdfc_bank);


const punjab_bank = new Bank("Punjab Bank","Pune","12345","axis123","11%");
console.log("Bank Details",punjab_bank);

console.log(`Add all object element in a Set and Traverse`);

const banks = new Set([axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]);

for (const Bank of banks) {
    console.log(`Bank name==> ${Bank.bank_name} Location==> ${Bank.location}`);
    
}
