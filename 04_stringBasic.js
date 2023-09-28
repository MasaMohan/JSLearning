


var greet = "Good Morning";

console.log("======= Length Property =====-");
var totalLength = greet.length;
console.log("Length of the string is:",totalLength);



console.log("========= chartAt() ===========");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ",charAt0);

var charAt5 = greet.charAt(5);
console.log("Character at index 5:",charAt5);

greet.charAt(5);
console.log("index 5",greet.charAt(5));

var lastIndexChar = greet.charAt(greet.length-1);
console.log("last index char is :", lastIndexChar);


 var r = greet.charAt(greet.length-2);
 console.log("2rd last char:",r);

 lastThird = greet.charAt(greet.length-3);
 console.log("3rd Last char:",lastThird);


console.log("========== Concatenation ==========");
var firstName = "Jenny ";
var lastName = "Gates";
var result = firstName.concat(lastName);
console.log(result);

console.log("=========== indexOf ==========");
var indexOf = greet.indexOf("M");
console.log("Index of M is :",indexOf);

greet.indexOf("nin");
console.log("Index of nin:",greet.indexOf("nin"));

console.log("Index of char D",greet.indexOf("D"));

console.log("Index of O is : ",greet.indexOf("o"));


console.log("=========== replace ==========");
var result = greet.replace("Morning","Afternoon");
console.log(result);

var result = greet.replace(" ","-");
console.log(result);

var result = greet.toUpperCase();
console.log(result);


console.log("=========== trim ==========");

var str = "   Good Afternoon  "
var lengthBeforeTrim = str.length;
console.log("Length before trim:",str.length);
var result = str.trim();
console.log("Length after trim:",result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log("Removed extra space are:", result);



var city = "  My city is Pune.   ";
var beforeTrim = city.length;
console.log("before trim length",beforeTrim);


var result = city.trim();

console.log("after trim:",result.length);
// var afterTrim = result

var  afterTrim = result.length;

var result1 = beforeTrim - afterTrim
console.log(result1);  

console.log("======= inCludes() ========");
var result = greet.includes("Morning");
console.log( "Is Morning word available:",result);


console.log("======= search() ========");
var greet = "Good Morning";
greet.search("orn");
var result = greet.search("orn");
console.log(result);

var result = greet.search("after");
console.log(result);


console.log("======= slice() ========");

var greet = "Hello Good Morning!"
var result = greet.slice(6);
console.log(result);

var result =greet.slice(6, 10);

console.log(result);


console.log("======= split() ========");
var result = greet.split(" ");
console.log(result);

//wap to the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log("total number of words:",words.length);
console.log(`total number of words: ${words.length}`);

// String template
console.log(`I am "UI" Developer`);
var num1 = 10;
var num2 = 20;
var result = num1 + num2
console.log("Addition of ",num1, "and", num2, "is :", result);
console.log(`Addition of ${num1} and ${num2} is : ${result}`)


 


 






























