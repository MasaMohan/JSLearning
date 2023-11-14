






// const id = "120"  2 type of method to convert string to number
// const num = Number(id);

// console.log(typeof num,num);

// const id = "120";
// const idNum = +id;

// console.log(typeof idNum,idNum);

const postInString = `{
    "userId": 1,
    "id": 1,
    "title": "On Trip",
    "body": "Feeling awesome.. after long break"

}`


// console.log(typeof postInString);
// const post = JSON.parse(postInString); // to convert string to object
// console.log(typeof post);
// console.log(post);


// const person  = {
//     name:"Jenny",
//     age:34,
//     city:"Pune"

// }

// const personJson = JSON.stringify(person);  // to convert object to string 

// console.log(typeof personJson);
// console.log(personJson);

// const personElon = {
//     name: "Elon Musk",
//     age: 54,
//     totalCompany: 9,
//     companies:{
//         tesla: "300B USD",
//         twitter:"15B USD",
//         spacex: "200B USD"
//     },
//     kidsName:["Beny","Weny","Rony","Randy","Sony","Mony"]
// }

// const elonJson = JSON.stringify(personElon);
// console.log(elonJson);

const elonDetail = `{
    "name": "Elon Musk",
    "age": 54,
    "totalCompany": 9,
    "companies":{
        "tesla": "300B USD",
        "twitter":"15B USD",
        "spacex": "200B USD"
    },


"kidsName": [
    "Beny",
    "Weny",
    "Rony",
    "Randy",
    "Sony",
    "Mony"
]
}`;

const elon=JSON.parse(elonDetail);

console.log(elon);

elon.kidsName[0];
console.log(elon.kidsName[0]);
