````md
# Day 4 - TypeScript: Types, Interfaces, Union Types and QA Data

## 🎯 Goal

Build on the TypeScript fundamentals from Day 3 and start modeling realistic QA and automation test data.

Today I learned:

- Type aliases
- Union types
- Interfaces
- Optional properties
- Typed arrays of objects
- Typed function parameters
- Typed function return values
- `filter()` + `map()` with TypeScript
- How TypeScript can make SDET code safer and easier to maintain

---

## 📚 Topics Covered

### 1. Union Types

A union type allows a variable to contain one of several specific values.

```ts
type TestStatus = "passed" | "failed" | "skipped";
````

Example:

```ts
const status: TestStatus = "passed";
```

The variable can only contain:

* `"passed"`
* `"failed"`
* `"skipped"`

This is useful in automation because values such as test status or browser type usually have a limited set of valid options.

---

### 2. Browser Union Type

```ts
type Browser = "chromium" | "firefox" | "webkit";

const browser: Browser = "firefox";
```

This models the browsers I may use in Playwright.

---

### 3. Interfaces

An interface defines the structure an object should follow.

```ts
interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
  description?: string;
}
```

A test case can then be created using that structure:

```ts
const testCase: TestCase = {
  name: "Login",
  status: "passed",
  priority: 1
};
```

---

### 4. Optional Properties

The `?` makes a property optional.

```ts
description?: string;
```

This means a test case can have a description, but it doesn't have to.

---

### 5. Arrays of Interfaces

I can create an array containing multiple `TestCase` objects.

```ts
const testCases: TestCase[] = [
  {
    name: "Login",
    status: "passed",
    priority: 1
  },
  {
    name: "Search",
    status: "failed",
    priority: 2
  }
];
```

Mental model:

```text
TestCase
   ↓
Blueprint

TestCase object
   ↓
One test case

TestCase[]
   ↓
Array of test cases
```

---

## 🔎 Filter + Map

I practiced using TypeScript together with the JavaScript methods I learned earlier.

### Find failed tests

```ts
function getFailedTestNames(testCases: TestCase[]): string[] {
  const failedTests = testCases.filter(
    testCase => testCase.status === "failed"
  );

  return failedTests.map(
    testCase => testCase.name
  );
}
```

The process is:

```text
Test cases
    ↓
filter()
    ↓
failed test objects
    ↓
map()
    ↓
test names
```

Expected result:

```ts
["Search"]
```

---

## 🚨 SDET Challenge - High Priority Failures

I created realistic regression test data:

```ts
const regressionTestCases: TestCase[] = [
  {
    name: "Login",
    status: "passed",
    priority: 1
  },
  {
    name: "Search",
    status: "failed",
    priority: 2
  },
  {
    name: "Profile",
    status: "failed",
    priority: 3
  },
  {
    name: "Logout",
    status: "passed",
    priority: 4
  },
  {
    name: "Navigation",
    status: "skipped",
    priority: 5
  }
];
```

I then wrote a function that finds tests where:

```text
status === "failed"
AND
priority <= 2
```

```ts
function getHighPriorityFailures(
  testCases: TestCase[]
): string[] {
  const result = testCases.filter(
    testCase =>
      testCase.status === "failed" &&
      testCase.priority <= 2
  );

  return result.map(
    testCase => testCase.name
  );
}
```

Expected output:

```ts
["Search"]
```

`Profile` is not included because its priority is `3`.

---

## 🧠 Important Mental Models

### `type`

Used to define a type or a set of allowed values.

```ts
type TestStatus = "passed" | "failed" | "skipped";
```

---

### `interface`

Used as a blueprint for objects.

```ts
interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
}
```

---

### `TestCase` vs `testCases`

This was one of my important Day 4 lessons.

```text
TestCase
    ↓
Interface / blueprint

testCases
    ↓
Actual variable containing test cases
```

---

### `TestCase[]`

Means:

> An array containing objects that follow the `TestCase` interface.

---

### `filter()`

Keeps objects that match a condition.

```ts
testCases.filter(
  testCase => testCase.status === "failed"
);
```

---

### `map()`

Transforms or extracts information.

```ts
failedTests.map(
  testCase => testCase.name
);
```

---

## ❌ Mistakes I Made

### Mistake 1 - Union Type Syntax

I initially tried to create a union type using object-like syntax.

I learned that a type alias uses:

```ts
type TestStatus = "passed" | "failed" | "skipped";
```

---

### Mistake 2 - Confusing Types and Values

I initially wrote things like:

```ts
name: "string"
```

I learned that:

```ts
name: string
```

means the property must contain a string.

While:

```ts
name: "Login"
```

is an actual string value.

---

### Mistake 3 - Confusing `TestCase` and `testCases`

I initially used:

```ts
testCases[]
```

as a function parameter type.

The correct type is:

```ts
TestCase[]
```

because `TestCase` is the interface.

---

### Mistake 4 - Map Callback

I initially struggled with:

```ts
map(testCase => testCase.name)
```

I learned that:

```text
testCase
    ↓
one object from the array

testCase.name
    ↓
the name of that object
```

The parameter name can be changed, but it represents one item at a time.

---

## 🎯 SDET Connection

These concepts are directly useful when building automation frameworks.

For example, instead of passing unstructured data around, I can define exactly what a test case should contain:

```ts
interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
  description?: string;
}
```

Later, similar concepts can be used for:

* Test data
* API responses
* Login credentials
* Browser configuration
* Environment configuration
* Test results
* Playwright fixtures

TypeScript helps catch many incorrect assumptions before the automation code runs.

---

## 📁 Files

* `basics.ts` → Clean version of the Day 4 concepts
* `first-attempt.ts` → My original attempts, mistakes and corrected learning
* `README.md` → Day 4 notes and mental models

---

## ✅ Day 4 Status

* [x] Type aliases
* [x] Union types
* [x] Browser types
* [x] Interfaces
* [x] Optional properties
* [x] Typed arrays
* [x] Typed function parameters
* [x] Typed return values
* [x] `filter()` + `map()`
* [x] QA test-case modeling
* [x] High-priority failure logic

## 🚀 Day 4 Completed

```
```
