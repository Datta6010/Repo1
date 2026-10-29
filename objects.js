let employee = {
    name: "Datta",
    age: 25,
    role: "Automation Tester",
    salary: 50000
};
console.log(employee.name,employee.salary);
console.log(employee);
console.log("==========================================");
let student = {
    name: "Datta",
    sub: "javascript",
    std: 12
};
let key = "name"
console.log(student["name"]);
console.log(student["std"]);
console.log(student.key);
console.log(student[key]);

console.log("==========================================");

// Add , update , and delete properties

let employeee = {
name: "Datta",
role: "Tester"
};

// Add property 
employeee.age=25

//update property
employeee.role = "Playwright Automation Tester"

// Delete property
delete employeee.name

console.log(employeee);

console.log("==========================================");

let loginData = {
    username: "testuser",
    password: "Test@123",
    expectedMessage: "Login Successful"
};
console.log(loginData);

console.log("==========================================");

let employe = {
    name: "Datta",
    age: 30,
    role: "Playwright Tester",
    experience: 5
};
console.log(employe.name);
console.log(employe.role);
// Add city as pune
employe.city = "pune";
employe.experience = 6;
console.log(employe);

console.log("==========================================");

let students = {
    name: "Rahul",
    age: 22,
    education:{
        degree: "BCA",
        college: "ABC College"
    }
};
console.log(students.name);
console.log(students.education.degree);
console.log(students.education.college);

console.log("==========================================");

let emp = {
    name: "Datta",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

emp.address.city ="Mumbai";
emp.address.pincode = 400001;
console.log(emp.address.city);
console.log(emp.address.pincode);
console.log(emp);
console.log("==========================================");

let student1 = {
    name: "Rahul",
    education: {
        degree: "BCA"
    }
};

console.log(student1.education?.degree);
console.log(student1.education?.college);
console.log(student1.education?.city);

console.log("==========================================");

const person ={
    firstName: "Datta",
    lastName: "Shelke",
    age: 25,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

console.log("==========================================");


const persons = {
    firstName: "Datta",
    lastName: "Shelke",
    id: 30468,
    getId: function(){
        return this.id;
    }
};
let number = persons.getId();
console.log(number);

console.log("==========================================");

const personss = {
    name: "Datta",
    age: 25, 
    city: "Pune"
};

const myArray = Object.values(personss);
console.log(myArray);
let text = myArray.toString();
console.log(text);

console.log("==========================================");


const fruits = { Banana:300, Organes:500, Apples:200};
let text1 = "";
for (let [fruit , value] of Object.entries(fruits)){
text1 += fruit + ": " + value + "\n";
};
console.log(text1);

console.log("==========================================");

const per = {
    name: "Datta",
    age: 30,
    city: "pune"
};
let text2 = JSON.stringify(per);
console.log(text2);