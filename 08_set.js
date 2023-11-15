


const  array = [20,10,30,70];

array.splice(1,1)

console.log(array);

const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(44);
setOfRollNum.add(55);
console.log(setOfRollNum);
console.log(`Total element in set is: ${setOfRollNum.size}`);
// console.log(setOfRollNum.clear());
setOfRollNum.delete(22)
console.log(setOfRollNum);

const result = setOfRollNum.has(33);
console.log(result);

console.log(typeof setOfRollNum);

for (const element of setOfRollNum) {
    console.log(element);
}

// Remove duplicate value from array
var arrayNumber = [22,11,44,22,77,11];

const setNum = new Set(arrayNumber);
console.log(setNum);

arrayNumber = [...new Set(arrayNumber)];
console.log(arrayNumber);


let setOffName = new Set();
setOffName.add();
