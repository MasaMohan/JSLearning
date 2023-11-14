

// 3! = 1 * 2 * 3 ==> 6

// 3! = 3 * 2 * 1 ==> 6

// 4! = 4 * 3 * 2 * 1 ==> 24

// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

 

function factorial(num){

    let factNum = 1; // 60 

    for (let index = num; index >=1; index--) {

        factNum = factNum * index;

    }

    console.log(`Factorial of ${num} is ${factNum} `);

}


factorial(5);

factorial(7);

factorial(10);

//==================Prime Number==================//

let num = 10;
var isPrimeNumber = true;

for (let index = 2; index < num; index++) {
   
    if (num % index==0) {
        isPrimeNumber = false
        
    }
}
if (isPrimeNumber == true) {
    console.log(`${num} is a Prime Number`);
}

else{
   console.log(`${num} is not Prime Number`);
}







