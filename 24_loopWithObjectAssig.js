


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
console.log(`1)Employees working in TCS`);

arrayEmployee.forEach((employee)=>{
if (employee.emp_company == "TCS") {
    console.log("Company:",employee.emp_company, "Name:", employee.emp_name);
    
}
});

console.log(`
2)Employees working in Finance department`);
arrayEmployee.forEach((employee)=>{
if (employee.emp_dept == "Finance") {
    console.log(`Department:${employee.emp_dept},  Name:${employee.emp_name}` );
}

});


console.log(`
3)Employees working those name stars with "R" `);
arrayEmployee.forEach((employee)=>{
  if (employee.emp_name.startsWith("R")) {
    console.log(employee);
    
  }

});


console.log(`
4)Employees those Salary is greater than 75000 `);

arrayEmployee.forEach((employee)=>{
    if (employee.emp_salary >75000) {
        console.log("Employee Name:",employee.emp_name, "Company:",employee.emp_company,"Employee Salary:",employee.emp_salary );
        
    }

});



console.log(`
5)Employees those Salary is greater or equal 50000 `);

arrayEmployee.forEach((employee)=>{
    if (employee.emp_salary >= 50000 && employee.emp_dept =="IT") {
        console.log(employee);
    }
});


console.log(`
6)All Employee of Infy`);

arrayEmployee.forEach((emp)=>{
  if (emp.emp_company == "Infy") {
    console.log(emp);
  }

})


