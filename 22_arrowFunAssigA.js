

console.log(`Step..1`);

let arrowFun = ()=>{
console.log(`Good Morning, Today is Tuesday`);

}
arrowFun();

console.log(`
Step..2`);
let multi = (a,b,c=1)=>{
let result = a*b*c;
console.log(`Multiplication result is:`,result);

}

 multi(5,5,2);
 multi(10,4);

 console.log(`
Step..3`);

 let addition = (a,b,c,d,e)=>{
let result=a+b+c+d+e;
return result;
 }

 let result = addition(100,100,200,349,756);

 console.log(`Addition result is`,result);

 let result2 = addition("I am ","learning ","ES6 ","feature ","in depth ")
 console.log(`Addition of string is: ${result2}`);







