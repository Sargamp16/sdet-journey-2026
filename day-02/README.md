# Day 02 — JavaScript Functions, Objects & Scope

**Date:** August 9, 2026
**Journey:** SDET → International Job
**Day:** 2 / 180
**Status:** ✅ Completed

---

## 🎯 Today's Goals

* Understand functions
* Understand parameters and arguments
* Understand return values
* Practice arrow functions
* Understand objects and object properties
* Understand arrays containing objects
* Understand `map()` and `filter()` with objects
* Understand how functions receive objects
* Understand JavaScript scope
* Understand `let`, `const`, and `var`
* Understand basic Promises
* Understand `async` and `await`
* Solve an SDET-style JavaScript problem

---

# 🧠 Concepts Learned

## 1. Functions

A function is a reusable block of code that performs a specific task.

```typescript
function addNumbers(a, b) {
    return a + b;
}
```

The function can be called using:

```typescript
addNumbers(10, 20);
```

---

## 2. Parameters vs Arguments

Parameters are the variables defined in a function:

```typescript
function multiply(a, b) {
    return a * b;
}
```

Here:

```text
a and b → parameters
```

Arguments are the actual values passed when calling the function:

```typescript
multiply(5, 10);
```

Here:

```text
5 and 10 → arguments
```

The function returns:

```text
50
```

### Mental model

```text
Function definition
        ↓
    parameters

Function call
        ↓
     arguments
```

---

# 3. Return Values

`return` sends a value back from a function.

```typescript
function calculateSquare(number) {
    return number * number;
}

const result = calculateSquare(5);
```

The result is:

```text
25
```

`return` and `console.log()` are different.

```text
return
→ sends a value back

console.log()
→ displays a value
```

---

# 4. Arrow Functions

A traditional function:

```typescript
function addNumbers(a, b) {
    return a + b;
}
```

Can also be written as:

```typescript
const addNumbers = (a, b) => {
    return a + b;
};
```

Or in short form:

```typescript
const addNumbers = (a, b) => a + b;
```

---

# 5. Objects

Objects store related information using key-value pairs.

```typescript
const employee = {
    name: "Sargam",
    age: 29,
    role: "QA",
    experience: 5
};
```

Properties can be accessed using dot notation:

```typescript
employee.role;
```

Result:

```text
QA
```

---

# 6. Arrays of Objects

An array can contain multiple objects.

```typescript
const employees = [
    { name: "John", role: "QA", experience: 2 },
    { name: "Sarah", role: "Developer", experience: 5 },
    { name: "Mike", role: "QA", experience: 6 },
    { name: "Emma", role: "Designer", experience: 3 }
];
```

Conceptually:

```text
Array
 ├── Object
 ├── Object
 ├── Object
 └── Object
```

An individual object can be accessed using:

```typescript
employees[0];
```

A property can then be accessed using:

```typescript
employees[0].name;
```

---

# 7. `filter()` with Objects

`filter()` checks each element and keeps the elements for which the condition is true.

```typescript
const qaEmployees = employees.filter(
    employee => employee.role === "QA"
);
```

The important concept learned today:

> `filter()` keeps the complete original element when the condition is true.

The result is:

```typescript
[
    { name: "John", role: "QA", experience: 2 },
    { name: "Mike", role: "QA", experience: 6 }
]
```

The entire objects are preserved.

---

# 8. `map()` with Objects

`map()` transforms each element into something else.

```typescript
const names = employees.map(
    employee => employee.name
);
```

Result:

```typescript
["John", "Sarah", "Mike", "Emma"]
```

### Important difference

```text
filter()
→ Which elements should I keep?

map()
→ What should each element become?
```

---

# 9. Combining `filter()` and `map()`

These methods can be used together.

```typescript
const qaNames = employees
    .filter(employee => employee.role === "QA")
    .map(employee => employee.name);
```

Result:

```text
["John", "Mike"]
```

Flow:

```text
employees
    ↓
filter()
    ↓
QA employee objects
    ↓
map()
    ↓
employee names
```

---

# 10. Multiple Conditions

Multiple conditions can be combined using `&&`.

```typescript
const experiencedQA = employees.filter(
    employee =>
        employee.role === "QA" &&
        employee.experience > 3
);
```

Both conditions must be true.

Result:

```text
[
    { name: "Mike", role: "QA", experience: 6 }
]
```

---

# 11. Functions Receiving Objects

A function parameter can receive an object.

```typescript
function getName(user) {
    return user.name;
}

const employee = {
    name: "Sargam",
    role: "QA"
};

const result = getName(employee);
```

Here:

```text
employee → argument
user     → parameter
```

The `user` parameter refers to the object passed into the function.

The result is:

```text
"Sargam"
```

---

# 12. Scope

Scope determines where a variable can be accessed.

Example:

```typescript
function greet() {
    const message = "Hello";
}

console.log(message);
```

This produces an error because `message` exists only inside the function.

---

# 13. `let`, `const`, and `var`

### `let`

Can be reassigned:

```typescript
let age = 29;
age = 30;
```

### `const`

Cannot be reassigned:

```typescript
const name = "Sargam";
```

But objects and arrays declared with `const` can still be modified:

```typescript
const user = {
    name: "Sargam",
    age: 29
};

user.age = 30;
```

This is allowed because the variable itself is not being reassigned.

This is not allowed:

```typescript
user = anotherUser;
```

### `var`

`var` is function scoped, while `let` and `const` are block scoped.

Because of this difference, modern JavaScript generally prefers `let` and `const`.

---

# 14. Block Scope

Example:

```typescript
if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}
```

Outside the block:

```text
x → not accessible
y → not accessible
z → accessible
```

This happens because:

```text
let   → block scoped
const → block scoped
var   → function scoped
```

---

# 15. Variable Shadowing

A variable inside a function can have the same name as a variable outside the function.

```typescript
let name = "Sargam";

function test() {
    let name = "Sarah";
    console.log(name);
}

test();

console.log(name);
```

Output:

```text
Sarah
Sargam
```

The inner `name` shadows the outer `name` within the function.

---

# 16. Promises

A Promise represents the eventual result of an asynchronous operation.

A Promise can be:

```text
Pending
   ↓
Fulfilled
```

or:

```text
Pending
   ↓
Rejected
```

For example:

```typescript
fetchUser();
```

may return a Promise representing an asynchronous user request.

Mental model:

```text
fetchUser()
    ↓
Promise
    ↓
eventual result
```

---

# 17. `async` and `await`

An `async` function returns a Promise.

```typescript
async function getUser() {
    const user = await fetchUser();
    return user;
}
```

`fetchUser()` returns a Promise.

`await` waits for that Promise to settle and gives the resulting value.

Because `getUser()` is an async function:

```typescript
const result = getUser();
```

`result` is a Promise.

To obtain the eventual value inside another async function:

```typescript
const result = await getUser();
```

### Mental model

```text
fetchUser()
    ↓
Promise
    ↓
await
    ↓
actual user
```

And:

```text
async function
      ↓
returns Promise
```

---

# 🧪 Exercises Completed

## Exercise 1 — Calculate Square

```typescript
calculateSquare(5);
```

Result:

```text
25
```

---

## Exercise 2 — Check Adult

```typescript
isAdult(25);
```

Result:

```text
true
```

And:

```typescript
isAdult(16);
```

Result:

```text
false
```

---

## Exercise 3 — Employee Object

Created an employee object containing:

* name
* age
* role
* experience

Accessed:

```typescript
employee.role;
```

---

## Exercise 4 — Find QA Employees

Filtered employees where:

```typescript
employee.role === "QA"
```

Expected names:

```text
["John", "Mike"]
```

---

## Exercise 5 — Experienced QA Employees

Found QA employees with more than three years of experience.

Expected:

```text
["Mike"]
```

Important lesson:

I initially mapped the employee objects to names before checking their experience. This removed the `experience` property from the data.

The correct approach is to filter using the required properties first and map to names afterward.

---

## Exercise 6 — Function Receiving Object

Given:

```typescript
function introduce(person) {
    return `My name is ${person.name}`;
}
```

Passing the `user` object into the function makes `person` refer to that object.

Result:

```text
"My name is Sargam"
```

---

## Exercise 7 — Async Reasoning

Learned that:

```typescript
fetchUser()
```

returns a Promise.

`await` waits for that Promise and gives the resulting value.

An `async` function returns a Promise.

Therefore:

```typescript
const result = getUser();
```

produces a Promise when `getUser()` is async.

---

## Exercise 8 — Scope

Learned that variables with the same name can exist in different scopes.

The inner variable shadows the outer variable within its scope.

---

## Exercise 9 — `const` Object

Learned that `const` prevents reassignment of the variable but does not make an object immutable.

---

## Exercise 10 — Block Scope

Learned the difference between:

```text
let   → block scoped
const → block scoped
var   → function scoped
```

---

## Exercise 11 — Function Scope

Learned that variables declared inside a function cannot be accessed directly outside the function.

However, a value can be returned from the function and stored outside.

---

# 🧪 Final SDET Challenge

Created:

```typescript
function getSlowPassedTests(testResults)
```

The function:

1. Finds passed tests
2. Finds tests taking more than 4 seconds
3. Returns their names

Solution:

```typescript
function getSlowPassedTests(testResults) {
    const slowPassedTests = testResults.filter(
        testResult =>
            testResult.status === "passed" &&
            testResult.duration > 4000
    );

    return slowPassedTests.map(
        testResult => testResult.test
    );
}
```

Expected result:

```text
["Checkout", "Profile"]
```

---

# ❌ Mistakes & Lessons

### Mistake 1 — `>=` vs `=>`

Incorrect:

```typescript
age => 18
```

Correct:

```typescript
age >= 18
```

`>=` means greater than or equal to.

`=>` is used for arrow functions.

---

### Mistake 2 — Mapping too early

Incorrect approach:

```typescript
const names = result.map(
    employee => employee.name
);

names.filter(
    employee => employee.experience > 3
);
```

After `map()`, `names` contains strings rather than employee objects.

Correct approach:

```typescript
const experiencedQA = employees.filter(
    employee =>
        employee.role === "QA" &&
        employee.experience > 3
);
```

Then map the names if required.

---

### Mistake 3 — Confusing `const` with immutability

`const` prevents reassignment:

```typescript
user = anotherUser; // ❌
```

It does not prevent modifying object properties:

```typescript
user.age = 30; // ✅
```

---

# 🧠 Biggest Lessons From Day 2

The most important concepts I learned today are:

### `filter()`

> Which elements should I keep?

### `map()`

> What should each element become?

### Function parameter

> A parameter receives the argument passed to a function.

### Scope

> A variable can only be accessed within its available scope.

### `const`

> `const` prevents reassignment, not necessarily mutation.

### `async/await`

> `fetchUser()` can return a Promise, `await` waits for its result, and an `async` function itself returns a Promise.

---

# 🔗 SDET Connection

These concepts will be heavily used in automation.

Automation code frequently works with:

* API responses
* Test data
* Users
* Products
* Test results
* Configuration objects
* Arrays of test cases

A common pattern will be:

```text
API/Test data
      ↓
filter relevant records
      ↓
map required values
      ↓
assert expected result
```

Understanding the logic is more important than memorizing syntax.

---

# 📈 Day 2 Progress

| Topic                     | Status        |
| ------------------------- | ------------- |
| Functions                 | ✅             |
| Parameters & arguments    | ✅             |
| Return values             | ✅             |
| Arrow functions           | ✅             |
| Objects                   | ✅             |
| Arrays of objects         | ✅             |
| `filter()`                | ✅             |
| `map()`                   | ✅             |
| `filter()` + `map()`      | ✅             |
| Scope                     | ✅             |
| `let` / `const` / `var`   | ✅             |
| Promises                  | 🟡 Foundation |
| `async` / `await`         | 🟡 Foundation |
| SDET-style coding problem | ✅             |

---

# 📝 Reflection

### What I understood well

* Functions
* Parameters and arguments
* Return values
* Objects
* Arrays of objects
* `filter()`
* `map()`
* Scope
* Passing objects into functions

### What I need more practice with

* Promises
* `async` / `await`
* TypeScript
* Writing JavaScript without examples
* More complex automation-style problems

### Biggest improvement

I am starting to understand the logic behind JavaScript instead of only trying to remember syntax.

---

## 🏁 Day 2 Complete

**Day 2 / 180 — Completed**

Next: **Day 3 — TypeScript fundamentals + stronger JavaScript practice**
