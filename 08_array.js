


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


console.log(`=========== Traversing an array ============`);
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

    let arrayNumber =  [22,11,44,55,77,33];
console.log(`===========  Adding element in last  ============`);
arrayNum.push(88);
console.log(arrayNum);

let arrayNumbers = [22,11,44,55,77,33];
console.log(`===========  removing element in last  ============`);
arrayNumbers.pop();
console.log(arrayNumbers);


console.log(`===========  Adding element in first  ============`);

let arrayNumber1 = [22,11,44,55,77,33];
arrayNumber1.unshift(99);
console.log(arrayNumber1);

console.log(`===========  removing element in first  ============`);
let arrayN = [22,11,44,55,77,33];
arrayN.shift();
console.log(arrayN);


  

  
