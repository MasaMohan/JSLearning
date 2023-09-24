

console.log("Step 01");
function noaArgu(){
    console.log("Name:- Mohan Masa");
}
noaArgu();

function noArg1(){
    console.log("Address:- Kalyan");
}
noArg1();
console.log("*****************************");
console.log("Step 02");
function personalDetails(firstName,lastName,collegeName){
console.log("First Name:-",firstName);
console.log("Last Name:-",lastName);
console.log("College Name:-",collegeName);

}
personalDetails("Mohan","Masa","Nita" ,"Gawade");
console.log("*****************************");

console.log("Step 03 ");
function swapValue(valueOne,ValueTwo){
    console.log("Befor swap ==>",valueOne,ValueTwo);
var temp = valueOne;
valueOne = ValueTwo;
ValueTwo = temp;

console.log("After swap ==>",valueOne,ValueTwo);


}
swapValue("virat","Anushka");

swapValue(1000,2000);
console.log("*****************************");

console.log("Step 04");

function addThreeValue(arg1,arg2,arg3){
    var result = arg1,arg2,arg3
  var result = arg1+arg2+arg3;
 return result;

}
var message = addThreeValue( "Hello " , "Good " , "Morning");
var addition = addThreeValue(10.23,600,40);

console.log("The Additional of Three Value is");
console.log(message);
console.log(addition);






