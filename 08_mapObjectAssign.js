class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

const axisBank = new Bank("Axis Bank", "Mumbai", "854762354787", "axiB0000003", "12%");
const sbiBank = new Bank("State Bank of India", "Pune", "5633404578203", "SBIN0000340", "9%");
const iciciBank = new Bank("ICICI Bank", "Thane", "5010059777917", "ICICI0000966", "10%");
const kotakBank = new Bank("Kotak  Bank", "Hyderabad", "845698752146", "kot002023", "13%");
const hdfcBank = new Bank("HDFC Bank", "Chennai", "45896325412589", "HDFC000966", "9%");
const punjabBank = new Bank("Punjab National Bank", "Bangalore", "854693214789", "PUN0123456", "12%");

const bankMap = new Map();
bankMap.set(axisBank.accountNo, axisBank);
bankMap.set(sbiBank.accountNo, sbiBank);
bankMap.set(iciciBank.accountNo, iciciBank);
bankMap.set(kotakBank.accountNo, kotakBank);
bankMap.set(hdfcBank.accountNo, hdfcBank);
bankMap.set(punjabBank.accountNo, punjabBank);

const totalKeys = bankMap.keys();
for (const key of totalKeys) {
    const details = bankMap.get(key);
    console.log(`Bank Name: ${details.bankName} Account NO: ${details.accountNo} Interest Rate: ${details.interestRate}`);
}