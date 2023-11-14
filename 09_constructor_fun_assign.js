function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

const yesBank = new Bank("Yes Bank", "Mumbai", "yes1234", 1234);
console.log(
  `Yes Bank Details is:- ${yesBank.bankName} ${yesBank.location} ${yesBank.ifscCode} ${yesBank.branchCode}`

);

const sbiBank = new Bank("SBI Bank", "Pune", "sbi1234", 1234);
console.log(
  `SBI Bank Detail is:- ${sbiBank.bankName} ${sbiBank.location} ${sbiBank.ifscCode} ${sbiBank.branchCode}`
);

const mahBank = new Bank("Maharashtra Bank","nashik","mah1234",1234);
console.log(`Maharashtra Bank Details is:- ${mahBank.bankName} ${mahBank.location} ${mahBank.ifscCode} ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank","Delhi","axis1234",1234);
console.log(`Axis Bank Details is :- ${axisBank.bankName} ${axisBank.location} ${axisBank.ifscCode} ${axisBank.branchCode}`);

console.log(`==========================================================================================================
`);

Bank.prototype.openTime = "9 AM IST"

Bank.prototype.closeTime ="6 PM IST"

console.log(`SBI Bank Open time is:-${sbiBank.openTime} and SBI Bank Close Time is:-${sbiBank.closeTime}`);


console.log(`Bank Name is:-${axisBank.bankName} Close Time is:-${axisBank.closeTime}`);

console.log(`Bank Name is:-${yesBank.bankName} ${yesBank.branchCode} ${yesBank.openTime}`);
console.log(`==========================================================================================================
`);

