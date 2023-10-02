
console.log(`Assignment of Function Expression`);

console.log(`Step 01)..`);

var square = function(value){
var result = value * value;
return result;
   
}
var result1 = square(5);
console.log(`The Square of 5 is:-${result1}`);

var result2 = square(6);
console.log(`The Square of 6 is:-${result2}`);

var result3 = square(25);
console.log(`The Square of 25 is:-${result3}`);

var result4 = square(100);
console.log(`The Square of 100 is:-${result4}`);

var result5 = square(67.89);
console.log(`The Square of 67.89 is:-${result5}`);

var result6 = square(55);
console.log(`The Square of 59 is:-${result6}`);
console.log(`*******************************************************`);

console.log(`Step 02)..`);
console.log(`Type of Function Expression is:- ${typeof square}`);

console.log(`*******************************************************`);

console.log(`Step 03)..`);

var rectLength = function(value1,value2){
    console.log(`Length of rectangle is := 499 `);
    console.log(`width of rectangle is := 917`);
    result = (value1 * value2);

}
rectLength(499,917);
console.log(`Total Area of rectangle is:=${result}`);

console.log(`******************************************************`);

console.log(`Step 04)..`);
var swapValue = function(arg1,arg2){
console.log(`Before swap ==> ${arg1} ${arg2}`);
temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log(`After Swap ==> ${arg1} ${arg2}`);


}
swapValue("Mahi","Raina");
swapValue (55,77);
console.log(`*****************************************************`);

console.log(`Step 05)..`);
var fun = function(){
 var str = "JS the most popular language of internet";
 var result = str.length;
 console.log(`Total number of character is:- ${result}`);

 var index6 = str.charAt(6);
 console.log(`Character at index6 is:- ${index6}`);

 var index11 = str.charAt(11);
 console.log(`Character of index 11 is:- ${index11}`);

 var lastCharat = str.charAt(result -1);
 console.log(`Last character using length property is:-${lastCharat}`);

 var firstCharat = str.charAt(str.length [1]);
 console.log(`First character of given string is:- ${firstCharat}`);
 console.log(str);
//  var s = str.charAt(3);
//  console.log(`${s}`);

var words = str.split(" ");
console.log(`The total number of words is :-${words.length}`);

var square = 7*7;
console.log(`The total number of square is:-${square}`);
}
fun();




