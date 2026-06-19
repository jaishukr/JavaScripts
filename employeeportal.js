const employee = {
    name: "Jaishuk",
    id: "EMP101",
    department: "Development",
    experience: 1,
    salary: 40000,
    attendance: 100
};


const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];


const company = {
    companyName: "Stackly IT",
    location: "Salem"
};

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

let loginStatus =
    (username === "jaishuk" && password === "12345")
        ? "Success"
        : "Failed";


let examStatus =
    employee.attendance >= 75
        ? "Eligible"
        : "Not Eligible";


let experienceStatus =
    employee.experience >= 2
        ? "Experienced Employee"
        : "Fresher";


let bonus = employee.salary * 0.10;
let finalSalary = employee.salary + bonus;


let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
    alert(`Welcome ${employee.name}`);
} else {
    alert("Thank You");
}


console.log("==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================\n");

console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID   : ${employee.id}`);
console.log(`Department    : ${employee.department}`);
console.log(`Experience    : ${employee.experience} Years`);
console.log(`Salary        : ₹${employee.salary}`);
console.log(`Bonus         : ₹${bonus}`);
console.log(`Final Salary  : ₹${finalSalary}`);
console.log(`Skills        : ${skills.join(", ")}`);
console.log(`Attendance    : ${employee.attendance}%`);
console.log(`Exam Status   : ${examStatus}`);
console.log(`Login Status  : ${loginStatus}`);
console.log(`Company       : ${company.companyName}`);
console.log(`Location      : ${company.location}`);
console.log(`Experience    : ${experienceStatus}`);