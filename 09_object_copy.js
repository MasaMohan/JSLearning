// let obj={
//     name:"Peter"
// };

// let user = obj;
// user.name="bruce"

// console.log(obj);

// let obj={
//     name:"Peter"
// };

//Shallow clone or copy 2 type
// let user = Object.assign({},obj)
// let user = {...obj}
// user.name="bruce"

// console.log("obj is:-",obj);
// console.log("user is:-",user);


let obj={
    name:"Peter",
    address:{
        city:"Noida",
        state:"UP"
    }
};

let user = JSON.parse(JSON.stringify(obj));

user.address.city="Gurgoan"

console.log("Object is:-",obj);
console.log("user is:-",user);

console.log(obj.address.city);
console.log(user.address.city);