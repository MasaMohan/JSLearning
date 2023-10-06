


// 1 to 10


var sum = 0;
for (let index = 0; index <=10; index++) {
   sum = sum + index; //3+3

    
}
console.log(`Addition of 1 to 10 is: ${sum}`);




for (let index = 1; index <=20; index=index+2) {


    console.log(index);

}

//Reverse the string

var str  = "Developer";
var reverseStr = "";
for (let index = str.length -1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index);
}

console.log(`Reverse string is: "${reverseStr}"`);
console.log(`===============================================`);

//Reverse the string
var str = "Mobile"
var con = "";
for (let index = str.length -1; index >=0; index--) {
    con = con + str.charAt(index);
    
}
console.log(`${con}`);


// Count of vowels like  aeious 

var str = "i am ui developer";
var count =0;
for (let index = 0; index <=str.length-1; index++) {
    var char = str.charAt(index);
    if(char=="a" ||char=="e" || char=="i" || char=="o"|| char=="u"||char=="S")
    count = count + 1;
    
}
console.log(`Total number of vowels are:-${count}`);

console.log(`=============================`);

var str = "I am ui developer";

var count = 0;

var vowelsCap = "AEIOU";

for (let index = 0; index < str.length-1; index++) {

    var char = str.charAt(index).toUpperCase();

    if(vowelsCap.includes(char)){

        count = count + 1;

    }  

}

console.log(`Total number of vowels are: ${count}`);

