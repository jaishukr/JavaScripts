// let employeeName = "Jaishuk";
const employeeID = "EMP101";
let department = "Development";
let salary = 40000;
let isPermanent = true;

// console.log(`Employee Details
// Name       : ${employeeName}
// ID         : ${employeeID}
// Department : ${department}
// Salary     : ${salary}
// Permanent  : ${isPermanent}`);


const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);


const company = {
    companyName: "Stackly",
    location: "Salem",
    employees: 150,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
};

console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);


let basicSalary = 30000;
let bonus = 5000;


let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax (10%) :", tax);
console.log("Final Salary :", finalSalary);


let attendance = 100;

let result = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("Attendance :", attendance);
console.log("Status :", result);


let username = "jaishuk";
let password = "12345";

if (username === "jaishuk" && password === "12345") {
    console.log("Login Successful");
} 
else {
    console.log("Invalid Credentials");
}


let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log(`Product  : ${productName}`);
console.log(`Price    : ${productPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ${totalBill}`);



let visitors = 100;

console.log("Initial Visitors:", visitors); // 100

// Pre Increment
console.log("Pre Increment (++visitors):", ++visitors);  // First increments visitors to 101, then prints 101

// Post Increment
console.log("Post Increment (visitors++):", visitors++);  // Prints current value 101, then increments to 102

console.log("Value after Post Increment:", visitors);  // Now visitors is 102

// Pre Decrement
console.log("Pre Decrement (--visitors):", --visitors);  // First decrements visitors to 101, then prints 101

// Post Decrement
console.log("Post Decrement (visitors--):", visitors--);  // Prints current value 101, then decrements to 100

console.log("Final Visitors Value:", visitors);  // Now visitors is 100



console.log(10 == "10");    // true -> == compares only values, type conversion happens

console.log(10 === "10");   // false -> === compares value and data type

console.log(20 != "20");    // false -> != compares values after type conversion

console.log(20 !== "20");   // true -> !== compares value and data type

console.log(5 < 10);        // true -> 5 is less than 10

console.log(15 >= 20);      // false -> 15 is not greater than or equal to 20

console.log(100 <= 100);    // true -> 100 is equal to 100



let employeeName = prompt("Enter Employee Name:");

let employeeAge = prompt("Enter Employee Age:");

let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
    alert(`Welcome ${employeeName}`);
} else {
    alert("Thank You");
}
