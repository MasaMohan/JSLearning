


const map = new Map();
map.set(11,"Jenny");
map.set(22,"Bill");
map.set(33,"Elon");
map.set(44,"Stew");
console.log(map);

const keyValue33 = map.get(33);
console.log(keyValue33);

map.set(22,"ABC"); // if you add duplicated key it will ver write

console.log(map);

map.set(55,"Jenny"); // if you add duplicated value it will create new set
console.log(map);

console.log(`Total element in map is: ${map.size}`);

map.delete(33)
console.log(map);
map.has(22);
console.log(map.has(22));

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log(`Traversing map`);

for (const key of keys) {
    console.log(key,map.get(key));
}



