


var girlAge = 19;
if (girlAge>=18) {
    console.log(`You could go inside office`);
    console.log(`Have you informed your parent`);
    console.log(`Signed.. Congrats!!!`);
    
}
console.log(`Daily life`);

console.log(`**********************************************************************
`);

// If age is greater than equal 18 then allow for vote else no,

var elonAge = 17;
if (elonAge>=18) {
    console.log(`Welcome.. Elon`);
    console.log(`Please let5 me mark your finger with ink`);
    console.log(`Please now vote`);

} else {
    console.log(`Yet you are not eligible for vote`);
    console.log(`Try next time please `);
    
}


const array = [1,2,3,4,5,6,7];

function even(){

    if (array %2==0) {
      console.log(`  Even num`);
        
    } else {console.log(`
    odd num`);
        
    }


};
even(array)


console.log(`***********************************************************************************************`);

function getEvenNumbers(array2) {
    const evenNumbers = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array2[i] %2!==0) {
        evenNumbers.push(array2[i]);
      }
    }
  
    return evenNumbers;
  }
  
  const array2 = [1, 2, 3, 4, 5, 6, 7];
  const evenNumbersArray = getEvenNumbers(array2);
  
  console.log("Even numbers:", evenNumbersArray);
