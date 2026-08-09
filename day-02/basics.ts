/*

* Day 02 - JavaScript Fundamentals
* Functions, Objects, Arrays & Async Basics
  */

// ==========================================
// Exercise 1 - Calculate Square
// ==========================================

function calculateSquare(number: number): number {
return number * number;
}

console.log(calculateSquare(5)); // 25

// ==========================================
// Exercise 2 - Check Adult
// ==========================================

function isAdult(age: number): boolean {
return age >= 18;
}

console.log(isAdult(25)); // true
console.log(isAdult(16)); // false

// ==========================================
// Exercise 3 - Employee Object
// ==========================================

const employee = {
name: "Sargam",
age: 29,
role: "QA",
experience: 5
};

console.log(employee.role); // QA

// ==========================================
// Exercise 4 - Find QA Employees
// ==========================================

const employees = [
{ name: "John", role: "QA", experience: 2 },
{ name: "Sarah", role: "Developer", experience: 5 },
{ name: "Mike", role: "QA", experience: 6 },
{ name: "Emma", role: "Designer", experience: 3 }
];

const qaEmployees = employees.filter(
employee => employee.role === "QA"
);

const qaEmployeeNames = qaEmployees.map(
employee => employee.name
);

console.log(qaEmployeeNames); // ["John", "Mike"]

// ==========================================
// Exercise 5 - Experienced QA Employees
// ==========================================

const experiencedQA = employees.filter(
employee =>
employee.role === "QA" &&
employee.experience > 3
);

const experiencedQANames = experiencedQA.map(
employee => employee.name
);

console.log(experiencedQANames); // ["Mike"]

// ==========================================
// Exercise 6 - Function Receiving Object
// ==========================================

function getName(user: { name: string }): string {
return user.name;
}

const employeeData = {
name: "Sargam",
role: "QA"
};

const employeeName = getName(employeeData);

console.log(employeeName); // Sargam

// ==========================================
// Promise / Async Example
// ==========================================

async function getUser() {
const user = await fetchUser();
return user;
}

// Note:
// fetchUser() is assumed to be an asynchronous function
// that returns a Promise.
//
// getUser() is an async function and therefore returns a Promise.
