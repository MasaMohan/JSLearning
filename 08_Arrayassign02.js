



const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
result = arrayNumbers.length;
console.log(`1) The total number of element is :-${result}
`);

console.log(`2)`);
console.log(`First element of arrayNumber is:-${arrayNumbers[0]}`);
console.log(`Last element of arrayNumber is :-${arrayNumbers[arrayNumbers.length-1]}
`);

console.log(`3) Last third element of arrayNumber is :-${arrayNumbers[arrayNumbers.length-3]}
`);


evenNumber= [];
for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index]%2==0) {
   evenNumber.push(arrayNumbers[index])
   }
    
}
console.log(`4) All Even Numbers is:-${evenNumber}
`);

oddNumber = [];
for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index]% 2 !== 0) {
      oddNumber.push(arrayNumbers[index]);
   }
   
   
}
console.log(`5) All Odd numbers is :- ${oddNumber}
`);

let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  
   if (arrayNumbers[index]%2==0) {
      sum+= arrayNumbers[index];
      
   }
}
console.log(`6) All even position element is:- ${sum}
`);


let odd = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index]%2!==0) {
      odd+= arrayNumbers[index];
   }
}

console.log(`7) All odd position element is :- ${odd}
`);

let add = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  add+=arrayNumbers[index];
   
}
console.log(`8) Sum of all element is :-${add}
`);


const multiplesOfFive = [];
for (let index = 0; index < arrayNumbers.length; index++) {
 if (arrayNumbers[index]%5==0) {
   multiplesOfFive.push(arrayNumbers[index]);
 }
   
}
console.log(`9) The number multiple of 5 is :-${multiplesOfFive}
`);

let num =115;
if (arrayNumbers.includes(num)) {
   console.log(`10) Number ${num} is available`);
} else {
   console.log(`10) Number ${num} is not available
   `);
}


let num1 = 23;
if (arrayNumbers.includes(num1)) {
   console.log(`11) Number ${num1} is available
   `);
   
}
else{
   console.log(`11) Number ${num1} is not available 
   `);
}

arrayNumbers.splice(3,0,55,66);
console.log(`12) Insert numbers 55,66:- ${arrayNumbers}
`);

arrayNumbers.splice(4,3);
console.log(`13) Deleted 3 element starting from 4 index is :-  ${arrayNumbers} `);


