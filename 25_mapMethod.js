

// How to transformed the Array in map
const array = [4,5,3,2,7];

// [16,25,9,4,49];

const arrayTransform = array.map((currentValue)=>{
 return currentValue*currentValue;
});
console.log(arrayTransform);


const transformedArray = [];
array.forEach((element) => {
    transformedArray.push(element*element)
});
console.log(transformedArray);

const arrayNum = [4,5,3,2,7];
               //[4,6,5,5,11]
const newArray = arrayNum.map((currentValue,index)=>{
    return currentValue+index;
});

console.log(newArray);
console.log(`=============================================================`);


class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
       this.emp_id = emp_id;
       this.emp_name = emp_name;
       this.emp_dept = emp_dept;
       this.emp_salary = emp_salary;
       this.emp_company = emp_company;
    }
}

const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");


const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

const arrayEmployeeName = arrayEmployee.map((employee)=>{
   return employee.emp_name
});

console.log(arrayEmployeeName);
            

