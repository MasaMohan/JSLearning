



let add = function(){
console.log(`Inside function expression`);
}

add();

// Arrow function without any Argument
let arrowFun = ()=>{
console.log(`Inside arrow function `);
}

arrowFun();

()=>{} // Arrow function 

let aFun = ()=> console.log(`Inside one line short cut arrow function`);

aFun();



// Arrow function with  Argument

let sub = (num1,num2)=>{
console.log(`Subtraction is: ${num1 - num2}`);
}
sub(20,10);


// let square = (num)=>{
// let result = num*num;
// return result;
// }
// let result = square(7);
// console.log(`Square of 7 is :${result}`);



let square = (num)=>{
    let result = num*num;
    console.log(`Square of 7 is :${result}`);
    }
    let result = square(7);
    // console.log(`Square of 7 is :${result}`);
