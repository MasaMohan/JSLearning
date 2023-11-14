


function Bank (bankName,city,pin){
    this.bankName = bankName;
    this.city = city;
    this.pin = pin;

    this.show = function(){
        console.log(`Bank details is:${this.bankName} ${this.city} ${this.pin}`);
    }
}

const sbiBank = new Bank("SBI","Pune",112233);
console.log(sbiBank);

console.log(sbiBank.bankName,sbiBank.city,sbiBank.pin);
console.log(typeof sbiBank);
console.log(typeof Bank);

const axisBank = new Bank("Axis","Kalyan",421306);
console.log(axisBank);


const hdfcBank = new Bank("HDFC","Mumbai",400006);
console.log(hdfcBank);

// const array = [1,2,40,50];
// array.push(100); //adding last element in array//
// console.log(array);

// array.unshift(244); //adding 1st element in array//
// console.log(array);

// array.shift(); //deleting 1st element in array//
// console.log(array);

// array.pop()
// console.log(array);

// console.log(array.length)


Bank.prototype.country = "Bharat";
console.log(axisBank.country);

console.log(hdfcBank);

console.log(hdfcBank.country);

sbiBank.show();

axisBank.show();

hdfcBank.show();

console.log(
    axisBank instanceof Bank);

