/*

* DAY 02 - JavaScript / TypeScript Fundamentals
*
* Topics:
* * Functions
* * Parameters & arguments
* * Return values
* * Objects
* * Arrays of objects
* * filter()
* * map()
* * Scope
* * let / const / var
* * Promise / async / await basics
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

console.log(qaEmployeeNames);
// ["John", "Mike"]

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

console.log(experiencedQANames);
// ["Mike"]

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

console.log(employeeName);
// Sargam

// ==========================================
// Exercise 8 - Scope
// ==========================================

let name = "Sargam";

function testScope() {
let name = "Sarah";

```
console.log(name); // Sarah
```

}

testScope();

console.log(name); // Sargam

// ==========================================
// Exercise 9 - Const Object
// ==========================================

const user = {
name: "Sargam",
age: 29
};

user.age = 30;

console.log(user);
// { name: "Sargam", age: 30 }

// ==========================================
// Exercise 10 - Block Scope
// ==========================================

if (true) {
let x = 10;
const y = 20;
var z = 30;

```
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
```

}

// x and y are not accessible here.
// z is accessible because var is function scoped.

console.log(z); // 30

// ==========================================
// Exercise 11 - Function Scope
// ==========================================

function login(username: string, password: string) {
const credentials = {
username,
password
};

```
return credentials;
```

}

const result = login("sargam", "secret");

console.log(result);
// { username: "sargam", password: "secret" }

// ==========================================
// Final SDET Challenge
// ==========================================

const testResults = [
{ test: "Login", status: "passed", duration: 1200 },
{ test: "Search", status: "failed", duration: 3000 },
{ test: "Checkout", status: "passed", duration: 5000 },
{ test: "Logout", status: "failed", duration: 1500 },
{ test: "Profile", status: "passed", duration: 7000 }
];

function getSlowPassedTests(testResults: {
test: string;
status: string;
duration: number;
}[]): string[] {

```
const slowPassedTests = testResults.filter(
    testResult =>
        testResult.status === "passed" &&
        testResult.duration > 4000
);

return slowPassedTests.map(
    testResult => testResult.test
);
```

}

console.log(getSlowPassedTests(testResults));
// ["Checkout", "Profile"]

// ==========================================
// Promise / Async-Await Foundation
// ==========================================

/*

* Conceptual example:
*
* async function getUser() {
* ```
  const user = await fetchUser();
  ```
* ```
  return user;
  ```
* }
*
* fetchUser() is assumed to return a Promise.
*
* await waits for the Promise to settle and gives
* the resulting value.
*
* Because getUser() is async, calling:
*
* const result = getUser();
*
* gives us a Promise.
  */
