


const arrayNum = [10,20,30,40,50,15];

arrayNum.forEach(function(currentValue,index,array){

    console.log(`CurrentValue:${currentValue}, Index:${index},arrayNum`, array);

});

console.log(`========================================================
`);

arrayNum.forEach((currentValue,index,array)=>{
    console.log(`CurrentValue:${currentValue}, Index:${index},arrayNum`, array);


})


console.log(`==============================================`);


arrayNum.forEach((currentValue,index,array)=>{
     console.log(`CurrentValue:${currentValue}, Index:${index},arrayNum`, array);

});

console.log(`==============================================`);

arrayNum.forEach((currentValue)=>{
  console.log(currentValue);
});

console.log(`=======forEach() loop to traverse set============`);

const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach((value)=>{
    console.log(value);
});

console.log(`=======forEach() loop to traverse map============`);


const map = new Map();
map.set(11,"Jenny");
map.set(22,"Bill");
map.set(33,"Elon");
map.set(44,"Stew");

map.forEach((value,key)=>{
    console.log(`Key:${key} value:${value}`);
});







