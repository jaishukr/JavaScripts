    var employeeName = "Jaishuk";

    let employeeAge = 24;
   
    const companyName = "Stackly";
   
    console.log("Employee Name :", employeeName);
    console.log("Employee Age :", employeeAge);
    console.log("Company Name :", companyName);
   
    alert("Welcome to Employee Portal");
    
    let taskCompleted = confirm("Have you completed today's task?");
    console.log(taskCompleted);
   
    let enteredName = prompt("Enter your name");
    
    console.log("Entered Name :", enteredName);
    
    document.writeln("<h2>Welcome " + enteredName + "</h2>");
    
    console.warn("Task submitted successfully");
    
    console.error("Task submission failed");

    employeeAge = 25;
    console.log("Updated Employee Age :", employeeAge);