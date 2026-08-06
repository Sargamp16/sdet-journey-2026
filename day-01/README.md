# Day 01 — JavaScript & TypeScript Fundamentals 🚀

**Date:** August 6, 2026
**Journey:** SDET → International Job
**Day:** 1 / 180

---

## 🎯 Today's Goals

* Understand JavaScript variable declarations
* Learn `map()` and `filter()`
* Understand functions and arrow functions
* Understand Promises
* Understand `async` and `await`
* Learn the basics of TypeScript
* Understand TypeScript interfaces
* Start thinking about programming logic instead of memorizing syntax

---

# 🧠 Concepts Learned

## 1. `let`, `const` and `var`

### `let`

`let` is used when a variable may need to be reassigned.

```typescript
let count = 10;

count = 20;
```

### `const`

`const` is used when the variable itself should not be reassigned.

```typescript
const name = "Sargam";
```

Trying to reassign it is not allowed:

```typescript
name = "John"; // Error
```

However, objects declared with `const` can still have their properties changed:

```typescript
const user = {
    name: "Sargam"
};

user.name = "John"; // Allowed
```

### `var`

`var` is the older way of declaring variables in JavaScript.

For modern JavaScript/TypeScript, prefer:

```text
const
let
```

and generally avoid `var`.

### Key takeaway

> Use `const` by default. Use `let` when reassignment is required.

---

# 2. Array `map()`

`map()` is used to transform every element of an array.

It returns a **new array**.

Example:

```typescript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8, 10]
```

### Mental model

```text
Original array
      ↓
    map()
      ↓
Transform every item
      ↓
   New array
```

Example:

```text
1 → 2
2 → 4
3 → 6
4 → 8
5 → 10
```

### Key takeaway

> `map()` transforms each element and returns a new array.

---

# 3. Array `filter()`

`filter()` is used to select elements from an array based on a condition.

Example:

```typescript
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(number => number > 20);

console.log(result);
```

Output:

```text
[25, 30]
```

### Mental model

```text
Original array
      ↓
   filter()
      ↓
Check condition
      ↓
Keep matching items
```

### Difference between `map()` and `filter()`

```text
map()    → Transform
filter() → Select
```

Example:

```text
[1, 2, 3]

map(x => x * 2)
→ [2, 4, 6]
```

Whereas:

```text
[1, 2, 3]

filter(x => x > 1)
→ [2, 3]
```

---

# 4. Functions

A function is a reusable block of code that performs a particular task.

### Normal function

```typescript
function addNumbers(a, b) {
    return a + b;
}
```

Example:

```typescript
addNumbers(10, 20);
```

returns:

```text
30
```

### Arrow function

The same function can be written as:

```typescript
const addNumbers = (a, b) => {
    return a + b;
};
```

Or more shortly:

```typescript
const addNumbers = (a, b) => a + b;
```

### Key takeaway

> Functions allow us to write reusable pieces of logic.

---

# 5. Promise

A Promise represents a value that may become available later.

It can represent an asynchronous operation that:

```text
Pending
   ↓
Success / Fulfilled

or

Pending
   ↓
Failed / Rejected
```

For example, an API request may take some time to return a response.

Conceptually:

```text
fetchData()
    ↓
 Promise
    ↓
Eventually
    ↓
Actual data
```

A Promise is especially important in automation because browser and API operations are often asynchronous.

---

# 6. `async` and `await`

`async` and `await` are used to work with asynchronous operations and Promises.

Example:

```typescript
async function getUser() {
    const user = await fetchUser();

    return user;
}
```

### `async`

`async` marks a function as asynchronous.

An `async` function returns a Promise.

### `await`

`await` waits for a Promise to settle and gives us its resulting value.

Conceptually:

```text
fetchUser()
     ↓
  Promise
     ↓
   await
     ↓
 User data
```

### Key relationship

```text
async
  ↓
Function works asynchronously
and returns a Promise

await
  ↓
Wait for the result of a Promise
```

### Important note

`async` does not mean "wait for the previous test."

`await` does not itself "provide a Promise."

Instead:

> An asynchronous operation returns a Promise, and `await` allows us to wait for its result inside an `async` function.

---

# 7. TypeScript Types

TypeScript allows us to specify the expected type of a variable.

Example:

```typescript
let username: string = "Sargam";
```

Here:

```text
username → variable
string   → expected type
```

Other common types include:

```typescript
let age: number = 25;

let isActive: boolean = true;
```

---

# 8. TypeScript Interfaces

An interface defines the expected structure of an object.

Example:

```typescript
interface User {
    name: string;
    age: number;
    role: string;
}
```

Now we can create objects that follow this structure:

```typescript
const user1: User = {
    name: "Sargam",
    age: 20,
    role: "QA"
};

const user2: User = {
    name: "John",
    age: 25,
    role: "Developer"
};
```

The interface helps TypeScript understand what properties a `User` should have and what types those properties should contain.

### Why this matters for SDET

API responses often have predictable structures.

For example:

```json
{
    "id": 101,
    "name": "John",
    "email": "john@test.com",
    "role": "admin"
}
```

We could represent this structure using:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}
```

This will become useful when building API automation frameworks.

---


# ❌ Mistakes & Lessons From Day 1

## Mistake 1 — Trying to memorize syntax

I noticed that I was sometimes trying to remember syntax without understanding the logic behind it.

For example:

```typescript
filter(...)
map(...)
```

Instead of memorizing the syntax, I should first ask:

```text
What data do I have?
What result do I want?
Do I need to transform or select?
Which operation does that?
```

For example:

```text
Array
 ↓
Need only failed tests
 ↓
filter()
 ↓
Need only test names
 ↓
map()
```

---

## Mistake 2 — Interface vs Object

An object:

```typescript
const user = {
    name: "Sargam",
    age: 20,
    role: "QA"
};
```

is an actual data object.

An interface:

```typescript
interface User {
    name: string;
    age: number;
    role: string;
}
```

defines the expected structure/type of an object.

---

## Mistake 3 — `>` vs `>=`

For:

> 18 or older

use:

```typescript
>= 18
```

not:

```typescript
> 18
```

---

## Mistake 4 — Promise / async / await

My initial understanding was incomplete.

The correct mental model is:

```text
Asynchronous operation
        ↓
     Promise
        ↓
      await
        ↓
   Result available
```

And:

```text
async function
        ↓
returns a Promise
```

This concept needs further practice.

---

# 🧠 Day 1 Key Takeaways

### JavaScript

```text
const → default choice
let   → reassignment required
var   → generally avoid
```

### Arrays

```text
map()    → transform
filter() → select
```

### Functions

```text
function
arrow function
```

### Async programming

```text
Promise → represents future result
async   → defines asynchronous function
await   → waits for Promise result
```

### TypeScript

```text
type       → describes a value's type
interface  → describes an object's structure
```

---

# 💻 Day 1 SDET Connection

Today I learned concepts that will later appear directly in automation code.

For example:

```typescript
const failedTests = testCases.filter(
    testCase => testCase.status === "failed"
);
```

This same type of logic can be used when processing:

* automated test results
* API responses
* test data
* browser data
* reports
* CI/CD results

Understanding JavaScript/TypeScript fundamentals will therefore be important for becoming a strong SDET rather than simply learning Playwright commands.

---

# 📝 Day 1 Reflection

### What I already knew

* Basic JavaScript
* Playwright
* Git
* GitHub
* Postman
* async/await usage
* Promises at a basic practical level

### What I need to improve

* JavaScript fundamentals
* Array methods
* TypeScript
* Interfaces
* Promise mental model
* Async programming
* Programming logic
* Writing code without relying on memorization

### Most important lesson

> **Understand the logic first. Learn the syntax second.**

---

# 🎯 Next Day

Day 2 will focus on:

* JavaScript functions
* Function parameters
* Return values
* Scope
* Arrays
* Objects
* `map()`
* `filter()`
* `reduce()`
* More practical coding exercises
* Deeper understanding of Promises and asynchronous programming

---

## 📈 Progress

**Day 1 / 180 — Completed**

🟢 Started SDET Journey
🟢 Created GitHub repository
🟢 Practiced JavaScript array methods
🟢 Started TypeScript fundamentals
🟡 Need more practice with async/await and Promises
🟡 Need more practice with TypeScript interfaces
