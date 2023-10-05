



// count the total number of vowels like "aieous"

var str = "I am very good IT Developer";
var count = 0;
var vowels = "AEIOU";

for (let index = 0; index <str.length -1; index++) {
   var char = str.charAt(index).toUpperCase();
   if(vowels.includes(char)){
    count = count +1;
   }
  
    
}
console.log(`1)Total number of vowels is:-${count}`);
var result = 0;
for (let index = 1; index <=5; index++) {
    result = result + index * index * index;
    
}
console.log(`2)The sum of cube 1 to 5 is:-${result}
`);


console.log(`==================== 1.String ===========================`);

function oddPositionedChars(str){

    for (let index = 0; index <=str.length -1; index++) {
       if (index%2!==0 && str.charAt(index)!=" ") {
   

        console.log(str.charAt(index));

        
       }
        
    }
}
oddPositionedChars("Hard work always pays back");

console.log(`==================== 2.String ===========================`);

oddPositionedChars("Soon I will be UI chap");

