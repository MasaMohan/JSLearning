

console.log(`============ Step 01 ================`);
let arrayNumber = [22,11,44,55,77,33];
for (let index = 0; index <=arrayNumber.length-1; index++) {
    if (index%2==0) {
        const element = arrayNumber[index];
        console.log(`The Even position value is:-${element}`);
    }
  
    
}


console.log(`============ Step 02 ================`);
let arrayN = [22,11,44,55,77,33];
let sum = 0;
for (let index = 0; index < arrayN.length; index++) {
    const element = arrayN[index];
    sum = sum + element;

    
}
    
console.log(`Sum of array element is :-${sum}`);