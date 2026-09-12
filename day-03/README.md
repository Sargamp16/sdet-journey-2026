````md
# Day 3 - TypeScript Fundamentals

## 🎯 Goal

Learn the TypeScript fundamentals needed to start writing reliable SDET and automation code.

Today I learned how to:

- Understand TypeScript vs JavaScript
- Use basic TypeScript types
- Add type annotations
- Understand type inference
- Create typed arrays
- Create typed functions
- Create and use interfaces
- Create typed objects
- Use optional properties
- Work with arrays of typed objects
- Use `filter()` and `map()` with TypeScript
- Model QA test data using TypeScript

---

## 📚 Topics Covered

### 1. Basic Types

```ts
let username: string = "Sargam";
let age: number = 29;
let isQA: boolean = true;
````

Main types learned:

* `string`
* `number`
* `boolean`

---

### 2. Type Inference

TypeScript can automatically understand a variable's type from its value.

```ts
let username = "Sargam";
```

TypeScript understands that `username` is a `string`.

---

### 3. Typed Arrays

```ts
let browsers: string[] = ["Chrome", "Firefox", "Safari"];

let durations: number[] = [1200, 3000, 5000];
```

`string[]` means an array containing strings.

`number[]` means an array containing numbers.

---

### 4. Typed Functions

Functions can define both:

* The type of their parameters
* The type of their return value

```ts
function calculateSquare(number: number): number {
  return number * number;
}
```

Here:

* `number: number` → parameter must be a number
* `: number` → function must return a number

---

### 5. Interfaces

An interface acts as a blueprint for an object.

```ts
interface User {
  name: string;
  age: number;
  role: string;
}
```

An object can then follow that blueprint:

```ts
const user: User = {
  name: "Sargam",
  age: 29,
  role: "QA Engineer"
};
```

---

### 6. Optional Properties

A property can be made optional using `?`.

```ts
interface TestCase {
  name: string;
  status: string;
  priority: number;
  description?: string;
}
```

`description?: string` means the property may or may not exist.

---

### 7. Typed Arrays of Objects

Interfaces become especially useful when working with test data.

```ts
interface TestResult {
  test: string;
  status: string;
  duration: number;
}

const testResults: TestResult[] = [
  {
    test: "Login",
    status: "passed",
    duration: 1200
  },
  {
    test: "Search",
    status: "failed",
    duration: 3000
  }
];
```

`TestResult[]` means:

> An array containing objects that follow the `TestResult` interface.

---

## 🔎 Filter + Map with TypeScript

I practiced finding failed tests from typed test data.

```ts
function getFailedTests(testResults: TestResult[]): string[] {
  const failedTests = testResults.filter(
    testResult => testResult.status === "failed"
  );

  return failedTests.map(testResult => testResult.test);
}
```

Expected result:

```ts
["Search", "Logout"]
```

### Mental Model

```text
TestResult[]
      ↓
   filter()
      ↓
matching test objects
      ↓
    map()
      ↓
test names
```

---

## 🧠 Important Mental Models

### Interface

```text
interface
    ↓
Blueprint
```

### Object

```text
object
    ↓
Actual data following the blueprint
```

### Typed Array

```text
TestResult[]
    ↓
Array of TestResult objects
```

### filter()

```text
Keeps objects that match a condition
```

### map()

```text
Transforms or extracts information
```

---

## ❌ Mistakes I Made

I initially struggled with TypeScript syntax.

### Mistake 1 - Function Parameters

I initially wrote:

```ts
function addNumbers(number, number): number
```

I learned that every parameter needs its own name and type.

Correct:

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}
```

---

### Mistake 2 - Interface Syntax

I initially tried using `=` and `let` inside an interface.

I learned:

```ts
interface User {
  name: string;
  age: number;
  role: string;
}
```

Interfaces describe the structure of objects. They don't create variables.

---

### Mistake 3 - Wrong Array Type

I initially thought my test result data could be:

```ts
number[]
```

I learned that the test results are objects containing strings and numbers.

Therefore:

```ts
TestResult[]
```

is the correct type.

---

## 🎯 SDET Connection

TypeScript will become important when writing automation frameworks.

Instead of having loosely structured test data like:

```ts
{
  test: "Login",
  status: "failed",
  duration: 3000
}
```

I can define exactly what a test result should contain:

```ts
interface TestResult {
  test: string;
  status: string;
  duration: number;
}
```

This makes automation code easier to understand, maintain and debug.

---

## 📁 Files

* `basics.ts` → Clean version of everything learned
* `first-attempt.ts` → My original attempts and mistakes
* `README.md` → Day 3 learning notes

---

## ✅ Day 3 Status

* [x] Basic TypeScript types
* [x] Type annotations
* [x] Type inference
* [x] Typed arrays
* [x] Typed functions
* [x] Interfaces
* [x] Optional properties
* [x] Typed objects
* [x] Arrays of typed objects
* [x] filter() + map()
* [x] QA test-data modeling

**Day 3 completed. 🚀**

```
```
