


console.log("1.====Function type:===== function with no argument and no return type===");
function myPersonalDetails(){
   
    console.log("Name: GK");
    console.log("city: Pune");
    console.log("PIN CODE: 123456");
    console.log("Is married: YES");

}
myPersonalDetails();




console.log("2.====Function type:===== function with argument and no return type===");
console.log("========swap=========");

var hubby = "virat"
var wife = "Anushka"
function swap(valueOne, ValueTwo){ // function declaration
console.log("before swap",valueOne,ValueTwo);
var temp = valueOne;
valueOne = ValueTwo;
ValueTwo = temp;
console.log("After swap==",valueOne,ValueTwo);


}
swap(100, 200); // function call or invocation
swap("virat","Anushka")
swap("pune","mumbai")


function asha(a,b){
    console.log(a,b);
    var temp = a;
    a = b;
    b = temp;
    console.log(a,b);
  
}
asha(100,200);


console.log("3.====Function type:===== function with argument and return type===");
function jenny(rs){
    console.log("She went market and bought vegetable");
    var bag = "Vegetable required for a week "
    return bag;

}
var result =jenny(100)

function square(num){
    var result = num * num
    return result;

}
var squareNum =square(5);
console.log("num is 5 and its square is :", squareNum);






 