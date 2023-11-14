


class Vehicle {

//properties
company
model
year
color
mileage

constructor(company,model,year,color,mileage){
    this.company = company;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;


}
}

//Created 5 Object from Vehicle

const VehicleNano = new Vehicle ("Tata","Nano","2000","Black","30")
console.log(VehicleNano);


const vehicleSafari = new Vehicle("Tata","Safari","2001","white","30")
console.log(vehicleSafari);

const vehicleIndigo = new Vehicle("Tata","Indigo","2002","Red","35");
console.log(vehicleIndigo);

const vehiclePunch = new Vehicle("Tata","Punch","2003","Brown","40");
console.log(vehiclePunch);

const vehicleBolt = new Vehicle("Tata","Bolt",'2003',"Blue",'40');
console.log(vehicleBolt);

console.log(`==========================Traverse================================`);

const arrayOfVehicle = [VehicleNano,vehicleSafari,vehiclePunch,vehicleIndigo,vehicleBolt]

for (const element of arrayOfVehicle) {
    console.log(element);
    
}

console.log(`===============class of College======================`);

class College {
    constructor(name,location,coursesOffered,foundedYear){
      this.name = name;
      this.location = location;
      this.coursesOffered = coursesOffered;
      this.foundedYear = foundedYear;
    }
  // Method of display the complete object details

    display(){
    console.log(`College Name: ${this.name}`);
    console.log(`Location: ${this.location}`);
    console.log(`Course Offered: ${this.coursesOffered}`);
    console.log(`Founded Year: ${this.foundedYear}`);
   
    }
}
 
// create 4 object from college class

const college1 = new College("Tata institute","Mumbai","B.COM",1990);
college1.display();

const college2 = new College("Symbiosis institute","Pune","Engineering",1985);
college2.display();

const college3 = new College("National Institute","Pune","Engineering",2000);
college3.display();

const college4 = new College("College of Engineering","Pune","Music",1978);
college4.display();


console.log(`=======================Function ==============================`);

function traverseObject(obj){
   for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
    
   }
}
// Call traverseObject() for each college object
console.log('Traversing College 1:');
traverseObject(college1);
console.log("=====================================");
console.log('Traversing College 2:');
traverseObject(college2);
console.log("=====================================");
console.log('Traversing College 3:');
traverseObject(college3);
console.log("=====================================");
console.log('Traversing College 4:');
traverseObject(college4);


console.log(college4 instanceof College);


console.log(college4 instanceof Vehicle);
