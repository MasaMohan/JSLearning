


var num1 = 20; 
num1 = 200;
console.log(num1);

let num2 = 30;
num2 = 40;
num2 = 50;

const PI = 3.14; // Declaration and initialization on same line
// PI = 3.5678; not allowed

console.log(PI);

console.log(`===================================`)
// Scope = Accessibility

function addition(){
    var great = "Good Morning";
    if (30>20) {
        let num3 = 100;
        const num4  = 200;
        var result = 10 +20;
    }
   
    console.log(result);
//     console.log(num3); not allowed because block scope
//     console.log(num4); not allowed because block scope
}
addition();

for (let index = 0; index < 3; index++) {
  console.log(index);
    
}
//console.log(index); let and const not allowed because block scope
