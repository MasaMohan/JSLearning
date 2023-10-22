


let array = [10,20,30,40,50,60];
console.log(typeof array);
console.log(array);

console.log(`Total elements in array is : ${array.length}`);
console.log(`${array.length-1}`);

console.log(`=============== Accessing or updating array element ==================`);
let element0thIndex = array[0]
console.log(element0thIndex);

console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last Element is :-${array[array.length-1]}`);


console.log(`=========== Updating an element ============`);
array[1]=70;
console.log(array);

console.log(`=========== indexOf()============`);

console.log(array.indexOf(30));


console.log(`=========== Traversing an array for loop ============`);
let arrayNum = [22,11,44,55,77,33]
for (let index = 0; index <=arrayNum.length-1; index++) {
    const element = arrayNum[index];
    console.log(element);
}


console.log(`=========== Traversing an array in reverse order ============`);
let arrayNum1 = [22,11,44,55,77,33]
for (let index = arrayNum1.length-1; index >=0; index--) {
    const element = arrayNum1[index];
    console.log(element);
}


console.log(`=========== Even Number ============`);
let arrayNum3 = [22,11,44,55,77,33]
for (let index = 0; index <=arrayNum3.length-1; index++) {
    if (index%2==0) {
        const element = arrayNum3[index];
        console.log(element);
    }
        
    }

    
console.log(`=========== Odd Number ============`);
let arrayNum4 = [22,11,44,55,77,33];
for (let index = 0; index <=arrayNum4.length; index++) {
    if (index%2!==0) {
        const element = arrayNum4[index];
        console.log(element);
    }
        
    }

    
console.log(`===========  Adding element in first  ============`);

let arrayNumber1 = [22,11,44,55,77,33];
arrayNumber1.unshift(99);
console.log(arrayNumber1);


    let arrayNumber =  [22,11,44,55,77,33];
console.log(`===========  Adding element in last  ============`);
arrayNum.push(88);
console.log(arrayNum);

let arrayNumbers = [22,11,44,55,77,33];
console.log(`===========  removing element in last  ============`);
arrayNumbers.pop();
console.log(arrayNumbers);



console.log(`===========  removing element in first  ============`);
let arrayN = [22,11,44,55,77,33];
arrayN.shift();
console.log(arrayN);

let arrayNumber2 =[22,11,44,55,77,33];
console.log(`===========  Slice ============`);
const arraySlice = arrayNumber2.slice(3);
console.log(arraySlice);

const arrayElement = arrayNumber2.slice(1,4);
console.log(arrayElement);



console.log(`===========  splice ============`);

let arrayNumber3 =[22,11,44,55,77,33];
const spliceElement = arrayNumber3.splice(3);
console.log(spliceElement);


console.log(`===========  splice() to remove element with index and delete count ============`);
let arrayNumber4 =[22,11,44,55,77,33];
const arrayElements = arrayNumber4.splice(1,2);
console.log(arrayElements);
console.log(arrayNumber4);


console.log(`===========  splice() to insert element ============`);
let arrayNum5 = [22,11,44,55,77,33];
// insert element 99 at index 2==> [22,11,99,44,55,77,33];
arrayNum4.splice(2,0,99);
console.log(arrayNum4);

console.log(`===========  splice() to insert element ============`);
let arrayNum6 = [22,11,44,55,77,33];
// insert element 100,200,400 at index 3==> [22,11,99,44,55,77,33];

arrayNum6.splice(3,0,100,200,400);
console.log(arrayNum6);
  

console.log(`Insert an element 500 at index 2 by replacing an element `);
let arrayNum7 = [22,11,44,55,77,33];
arrayNum7.splice(2,1,500);
console.log(arrayNum7);

console.log(`Insert an element 700 at index 3 by replacing 2 an element `);
let arrayNum8 = [22,11,44,55,77,33];
arrayNum8.splice(3,2,700)
console.log(arrayNum8);

  
arrayNum8.sort();
console.log(arrayNum8);

let arrayNumber12 =[22,11,44,55,77,33];
console.log(`===========  Slice ============`);
const arraySlice1 = arrayNumber12.slice(3);
console.log(arraySlice1);

const arrayElement11 = arrayNumber2.slice(1,4);
console.log(arrayElement11);



console.log(`===========  splice ============`);

let arrayNumber13 =[22,11,44,55,77,33];
const spliceElement1 = arrayNumber3.splice(3);
console.log(spliceElement);


console.log(`Insert an element 500 at index 2 by replacing an element`);

let arrayNumber23 =[22,11,44,55,77,33];
arrayNumber23.splice(2,1,500);
console.log(arrayNumber23);

console.log(`Insert an element 700 at index 3 by replacing 2 elements` );

let arrayNumber24 =[22,11,44,55,77,33];
arrayNumber24.splice(3,2,700);
console.log(arrayNumber24);


console.log(`=========== for in loop Traversing an array ============`);

var arrayN22 =[22,11,44,55,77,33];
console.log(`for in loop`);
for (const key in arrayN22) {
    const element = arrayN22[key];
    console.log(`Index:${key},value${element}`);
   
}


console.log(`===========  Traversing an array while loop============`);

var arrayN22 =[22,11,44,55,77,33];
let index = 0;
while (index<arrayN22.length) {
    console.log(arrayN22[index]);
    index++;
}

// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS

// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS

var arrayNumber33 = [22, 11, 44, 55, 77, 33];

console.log(`for of loop`);

for (const element of arrayNumber33) {

    console.log(element);

}


var arrayN22 =[22,11,44,55,77,33];
for (const iterator of arrayN22) {
    console.log(iterator);
    
}


console.log(`join method`);
const joinElement = arrayN22.join("_");
console.log(joinElement
    );

console.log(`Resizing an array`);
var arrayN22 =[22,11,44,55,77,33];
arrayN22.length = 3;
console.log(arrayN22);

console.log(`concat()method`);
let array1 = [1,2,3];
let array2 = [4,5];
let array3 = array1.concat(array2);
console.log(array3);










