


let professor = {
    Name: "Gajanan Sir",
    Age: 35,
    City: "Pune",
    Subject: "Full Stack",
    ClassName: "Codemind",
    TeachingAbility: "Excellent",
    Degree:{Engineering:"CSC",
            PHD:"Adv Computing",
            MTech:"CSC",
    },
 
}
professor.certification=["Hacker Rank Participation","IFE course","Adv Programming"]
  


console.log(`1) Added 5 properties`);
console.log(professor);

console.log(`2) Degree`);
console.log(professor.Degree);

console.log(`3) Certification`);
console.log(professor.certification);

professor.totalExperience="14 years";
console.log(`4) Adding new property totalExperience: "14 years`);
console.log(professor.totalExperience);

console.log(`5) Modifying age property `);
professor.age=30;
console.log(professor.age);

console.log(`6) Added new certificate`);
professor.certification.push("Oracle Certified");
console.log(professor.certification);

console.log(`Log the last element of certificate`);
let index = professor.certification.length;
console.log(professor.certification[index-1]);


console.log(`8) Complete object`);
console.log(professor);


console.log(`9) Traverse array`);
for (const element of professor.certification) {
        console.log(element);
}



