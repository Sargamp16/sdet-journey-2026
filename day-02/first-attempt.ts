/*

* DAY 02 - FIRST ATTEMPTS
*
* These are my original attempts.
* Mistakes are intentionally preserved as part of my learning history.
  */

// ==========================================
// Exercise 1 - Calculate Square
// ==========================================

function calculateSquare(a) {
return a * a;
}

console.log(calculateSquare(5));

// ==========================================
// Exercise 2 - Check Adult
// ==========================================

function isAdult(age) {

```
// Original mistake:
// Used => instead of >=

if (age => 18) {
    return true;
} else {
    return false;
}
```

}

console.log(isAdult(25));

// ==========================================
// Exercise 3 - Employee Object
// ==========================================

let employee = {
name: "Sargam",
age: 29,
role: "QA",
experience: 5
};

console.log(employee.role);

// ==========================================
// Exercise 4 - Find QA Employees
// ==========================================

const employees = [
{ name: "John", role: "QA", experience: 2 },
{ name: "Sarah", role: "Developer", experience: 5 },
{ name: "Mike", role: "QA", experience: 6 },
{ name: "Emma", role: "Designer", experience: 3 }
];

let result = employees.filter(
employees => employees.role == "QA"
);

console.log(
result.map(employees => employees.name)
);

// ==========================================
// Exercise 5 - Experienced QA Employees
// ==========================================

/*

* Original approach:
*
* First filter QA employees.
* Then map the objects to their names.
* Then tried to filter by experience.
*
* Problem:
* After map(), the data became:
*
* ["John", "Mike"]
*
* The employee objects and their experience
* properties were no longer available.
  */

let result2 = employees.filter(
employees => employees.role == "QA"
);

let new_result = result2.map(
employees => employees.name
);

let new_result1 = new_result.filter(
new_result => new_result.experience > 3
);

console.log(new_result1);

// ==========================================
// Exercise 6 - Function + Object
// ==========================================

/*

* Original understanding:
*
* I initially thought the result would be null.
*
* I understood that person is a parameter that
* receives the object passed to the function.
*
* Correct result:
*
* "My name is Sargam"
  */

// ==========================================
// Exercise 7 - Promise / Async Understanding
// ==========================================

/*

* My original understanding:
*
* 1. fetchUser is a function to get the user.
* 2. fetchUser returns a Promise.
* 3. await waits for the Promise.
* 4. getUser is an async function.
* 5. getUser returns a Promise.
* 6. const result = getUser() gives a Promise.
     */

// ==========================================
// Scope Exercises
// ==========================================

/*

* Exercise 8:
*
* First console.log → Sarah
* Second console.log → Sargam
*
* Reason:
* The inner variable shadows the outer variable.
*
*
* Exercise 9:
*
* const user = { name: "Sargam", age: 29 };
* user.age = 30;
*
* This works because const prevents reassignment
* of the variable but does not make the object immutable.
*
*
* Exercise 10:
*
* let and const are block scoped.
* var is function scoped.
*
* Therefore x and y cannot be accessed outside
* the if block, while z can be accessed in the
* surrounding scope.
*
*
* Exercise 11:
*
* username and password are parameters.
* "sargam" and "secret" are arguments.
* credentials is an object inside the function.
* login() returns the credentials object.
* credentials itself cannot be directly accessed
* outside the function.
  */

// ==========================================
// Final SDET Challenge - My Attempt
// ==========================================

const testResults = [
{ test: "Login", status: "passed", duration: 1200 },
{ test: "Search", status: "failed", duration: 3000 },
{ test: "Checkout", status: "passed", duration: 5000 },
{ test: "Logout", status: "failed", duration: 1500 },
{ test: "Profile", status: "passed", duration: 7000 }
];

function getSlowPassedTests(testResults) {

```
let option1 = testResults.filter(
    testresult => testresult.status == "passed"
);

let option2 = option1.filter(
    option_new => option_new.duration > 4000
);

let option3 = option2.map(
    option3 => option3.test
);

return option3;
```

}

console.log(getSlowPassedTests(testResults));

// Output:
// ["Checkout", "Profile"]
