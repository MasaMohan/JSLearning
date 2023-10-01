

console.log(`Step 01)`);
function greaterNumber(num1,num2){

    // var num1 =10;
    // var num2 = -10;
    var result = num1 > num2 ? num1 : num2;
    console.log(`The greater number between ${num1} and ${num2} is:- ${result} `);
}

var n1 = 10;
var n2 = -10;
greaterNumber(n1,-n2);

var n3 = 800;
var n4 = 899;
greaterNumber(n3,n4);

console.log(`==============================================
`);


console.log(`Step 02)`);
function isEvenOrOddNum(oddEven){
    var evenOdd = oddEven % 2== 0 ? "Even" : "Odd";
    console.log(`Given number is ${oddEven} ${evenOdd}`);
    

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


// var ev = 10;
// var result = 10%2 ==0 ? "e":"o";
// console.log(`${ev} ${result}`);

console.log(`=============================================
`);


console.log(`Step 03)`);
function wordLength(word){
const lengthIsEven = (word.length % 2==0) ? "Even" : "ODD";
return `Given word is:-${word} and its length is:- ${word.length} ==> ${lengthIsEven}`

}
console.log(wordLength("JavaScript"));
console.log(wordLength("Developer"));
console.log(wordLength("Google"));
