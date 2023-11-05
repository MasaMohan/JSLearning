// // singleton
// // Object.create


// const mySyn = Symbol("key1")

// const jsUser = {
//     name:"Mohan",
//    "full name": "Mohan Masa",
//    [mySyn]:"myKey1",
//     age:33,
//     location:"Mumbai",
//     email:"masa@google.com",
//     isLoggedIn:false,
//     // lastL0ginDays:["Monday","Saturday"]

// }

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySyn]);
// jsUser.email = "masa@chatgpt.com"

// console.table(jsUser);
// // Object.freeze(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello js user");
// }

// console.log(jsUser.greeting());

// jsUser.greetingTwo = function(){
//     console.log(`Hello js user,${this.name}`);
// }
// console.log(jsUser.greetingTwo());

// // singleton
// // Object.create

//const tinderUser = new Object() //this is singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Mohan",
            lastName:"Masa"


        }

    }
}

// console.table(regularUser);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// // const obj4 = {5:"c",6:"d"}

// // const obj3 = Object.assign({},obj1,obj2,obj4)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const user = [
//     {
//         id:1,
//         email:"masa@gmai.com"
//     },
// ]
// // user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.table(Object.entries(tinderUser));

// // Available Property in or hasOwnProperty
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// console.log(tinderUser.hasOwnProperty("isLogged"));

// const isName ="name" in tinderUser
// console.log(isName);

// console.log("bank" in tinderUser);

const course ={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"Mohan"

}

// course.courseInstructor/

// object destructure
const {courseInstructor: inst} = course

// console.log(courseInstructor);

console.log(inst);






