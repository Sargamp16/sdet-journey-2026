/*

* Day 02 - First Attempts
*
* These are my original attempts before correction.
* Mistakes are intentionally preserved as part of my learning history.
  */

// ==========================================
// Exercise 1 - Calculate Square
// ==========================================

function calculateSquare(a) {
return a * a;
}

console.log(calculateSquare(5);

// ==========================================
// Exercise 2 - Check Adult
// ==========================================

function isAdult(age) {

```
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

const employees2 = [
{ name: "John", role: "QA", experience: 2 },
{ name: "Sarah", role: "Developer", experience: 5 },
{ name: "Mike", role: "QA", experience: 6 },
{ name: "Emma", role: "Designer", experience: 3 }
];

let result2 = employees2.filter(
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
// Exercise 6 - Understanding Functions & Objects
// ==========================================

/*
My answer:

I initially thought the result would be null.

I understood that person is a parameter that receives
the user object passed to the function.
*/

// ==========================================
// Exercise 7 - Promise / Async Understanding
// ==========================================

/*
My understanding:

fetchUser is a function that gets the user.

await waits for the Promise returned by fetchUser.

getUser is an async function and therefore returns a Promise.

const result = getUser();

result will be a Promise.
*/
