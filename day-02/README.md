# Day 02 — Functions, Objects & Asynchronous JavaScript

**Date:** August 9, 2026
**Journey:** SDET → International Job
**Day:** 2 / 180

---

## 🎯 Today's Goals

* Understand functions
* Understand parameters and arguments
* Understand return values
* Practice arrow functions
* Understand objects and object properties
* Understand arrays containing objects
* Understand how functions receive objects
* Strengthen `map()` and `filter()` concepts
* Understand the basics of Promises
* Understand `async` and `await`

---

# 🧠 Concepts Learned

## 1. Functions

A function is a reusable block of code that performs a specific task.

Example:

```typescript
function addNumbers(a, b) {
    return a + b;
}
```

The function can then be called:

```typescript
addNumbers(10, 20);
```

---

## 2. Parameters vs Arguments

### Parameters

Parameters are the variables defined in the function.

```typescript
function multiply(a, b) {
    return a * b;
}
```

Here:

```text
a and b → parameters
```

### Arguments

Arguments are the actual values passed when calling the function.

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

# 3. Return Value

`return` sends a value back to the code that called the function.

Example:

```typescript
function calculateSquare(number) {
    return number * number;
}

const result = calculateSquare(5);
```

The returned value is:

```text
25
```

`console.log()` and `return` are different.

`console.log()` displays a value.

`return` sends a value back from the function so it can be stored or used elsewhere.

---

# 4. Arrow Functions

A function can also be written using arrow-function syntax.

Traditional function:

```typescript
function addNumbers(a, b) {
    return a + b;
}
```

Arrow function:

```typescript
const addNumbers = (a, b) => {
    return a + b;
};
```

Short form:

```typescript
const addNumbers = (a, b) => a + b;
```

---

# 5. Objects

An object stores related information using key-value pairs.

Example:

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

Example:

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
 ├── Employee object
 ├── Employee object
 ├── Employee object
 └── Employee object
```

An individual object can be accessed using its array index:

```typescript
employees[0];
```

Its name can then be accessed using:

```typescript
employees[0].name;
```

---

# 7. `filter()` with Objects

`filter()` checks each element and keeps the elements for which the condition is true.

Example:

```typescript
const qaEmployees = employees.filter(
    employee => employee.role === "QA"
);
```

The important thing I learned today is:

> When filtering an array of objects, the complete object is preserved.

The result is:

```typescript
[
    { name: "John", role: "QA", experience: 2 },
    { name: "Mike", role: "QA", experience: 6 }
]
```

It does NOT automatically return only the property used in the condition.

---

# 8. `map()` with Objects

`map()` transforms each element into something else.

Example:

```typescript
const names = employees.map(
    employee => employee.name
);
```

Result:

```typescript
["John", "Sarah", "Mike", "Emma"]
```

This means:

```text
filter()
→ decides which elements to keep

map()
→ decides what each element becomes
```

---

# 9. Combining `filter()` and `map()`

These methods can be combined.

Example:

```typescript
const qaNames = employees
    .filter(employee => employee.role === "QA")
    .map(employee => employee.name);
```

Result:

```typescript
["John", "Mike"]
```

The flow is:

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

Example:

```typescript
const experiencedQA = employees.filter(
    employee =>
        employee.role === "QA" &&
        employee.experience > 3
);
```

Both conditions must be true.

Result:

```typescript
[
    { name: "Mike", role: "QA", experience: 6 }
]
```

---

# 11. Functions Receiving Objects

A function parameter can receive an object.

Example:

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

# 12. Promises

A Promise represents the eventual result of an asynchronous operation.

An asynchronous operation may be:

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

can represent an operation that retrieves user data asynchronously.

Conceptually:

```text
fetchUser()
     ↓
  Promise
     ↓
eventual result
```

---

# 13. `async` and `await`

An `async` function returns a Promise.

Example:

```typescript
async function getUser() {
    const user = await fetchUser();
    return user;
}
```

`fetchUser()` returns a Promise.

`await` waits for that Promise to settle and gives us its resulting value.

Because `getUser()` is an `async` function, calling:

```typescript
const result = getUser();
```

gives us a Promise.

To obtain the eventual result inside another asynchronous function, we can use:

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

Created a function that accepts a number and returns its square.

```typescript
calculateSquare(5);
```

Expected:

```text
25
```

---

## Exercise 2 — Check Adult

Created a function that determines whether an age is 18 or older.

```typescript
isAdult(25);
```

Expected:

```text
true
```

---

## Exercise 3 — Employee Object

Created an employee object containing:

* name
* age
* role
* experience

Accessed the employee's role using:

```typescript
employee.role;
```

---

## Exercise 4 — Find QA Employees

Filtered employees based on their role.

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

I initially mapped the employee objects to names before checking experience. This removed the `experience` property from the data I was working with.

The correct approach is to filter using both properties first, then map to the name if required.

---

# ❌ Mistakes & Lessons

## Mistake 1 — `>=` vs `=>`

I initially wrote:

```typescript
age => 18
```

when I meant:

```typescript
age >= 18
```

`>=` means greater than or equal to.

`=>` is used for arrow functions.

---

## Mistake 2 — Losing object properties after `map()`

I initially did:

```typescript
const result = employees.filter(
    employee => employee.role === "QA"
);

const names = result.map(
    employee => employee.name
);
```

This produces:

```typescript
["John", "Mike"]
```

After this transformation, the objects are no longer available in `names`.

Therefore this would not work:

```typescript
names.filter(
    employee => employee.experience > 3
);
```

because `names` contains strings, not employee objects.

### Correct approach

Filter using all required object properties first:

```typescript
const result = employees.filter(
    employee =>
        employee.role === "QA" &&
        employee.experience > 3
);
```

Then map if only the names are required.

---

# 🧠 Most Important Lesson of Day 2

I learned to distinguish between:

```text
filter()
```

and:

```text
map()
```

### `filter()`

> Which elements should I keep?

It preserves the complete original element.

### `map()`

> What should each element become?

It transforms each element.

---

# 🔗 SDET Connection

These concepts will be heavily used in automation.

For example, automated tests often work with arrays of:

* test results
* API response objects
* test data
* users
* products
* transactions
* configuration objects

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

Understanding this logic is more important than memorizing syntax.

---

# 📝 Day 2 Reflection

### What I understood well

* Functions
* Parameters and arguments
* Return values
* Objects
* Arrays containing objects
* `filter()`
* `map()`
* Combining `filter()` and `map()`
* Passing objects into functions

### What I still need to practice

* Promises
* `async`
* `await`
* JavaScript scope
* TypeScript typing
* Writing functions without relying on examples

### Biggest improvement

I am starting to understand the logic behind JavaScript instead of only trying to remember syntax.

---

# 📈 Progress

**Day 2 / 180 — In Progress**

🟢 Functions
🟢 Parameters & arguments
🟢 Return values
🟢 Objects
🟢 Arrays of objects
🟢 `filter()`
🟢 `map()`
🟢 Functions receiving objects
🟡 Promises
🟡 `async` / `await`
🟡 Scope
