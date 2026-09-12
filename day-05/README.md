````md
# Day 5 — TypeScript Advanced Types + QA Data Modeling

## What I learned

Day 5 focused on using TypeScript to model realistic QA and automation data.

### 1. Union / Literal Types

I learned how to restrict a variable to specific allowed values.

```ts
type TestStatus = "passed" | "failed" | "skipped" | "blocked";
````

This means a `TestStatus` cannot contain an arbitrary string.

For example:

```ts
const status: TestStatus = "passed";
```

is valid.

---

### 2. Interfaces

Interfaces act as blueprints for objects.

```ts
interface User {
  username: string;
  role: string;
}
```

An object following this interface must contain the required properties with the correct types.

---

### 3. Nested Interfaces

An interface can use another interface as the type of one of its properties.

```ts
interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
  user: User;
}
```

Here, `user: User` means the `user` property must contain an object following the `User` interface.

---

### 4. `readonly`

I learned that `readonly` prevents a property from being changed after the object has been created.

```ts
interface TestCase {
  readonly testId: number;
}
```

The value can be assigned when creating the object, but should not be changed afterward.

---

### 5. Function Types

A function type describes what a function is allowed to look like.

```ts
type AddFunction = (a: number, b: number) => number;
```

An actual function can then use that type:

```ts
const add: AddFunction = (a, b) => {
  return a + b;
};
```

The function must accept two numbers and return a number.

---

### 6. Boolean Expressions

I learned that a comparison already produces a boolean value.

```ts
status === "passed"
```

This expression produces either:

```text
true
```

or:

```text
false
```

Therefore, this is enough:

```ts
return status === "passed";
```

There is no need for:

```ts
if (status === "passed")
  return true;
else
  return false;
```

---

### 7. Arrays of Typed Objects

`TestCase[]` means an array containing objects that follow the `TestCase` interface.

```ts
const testCases: TestCase[] = [
  {
    name: "Login",
    status: "failed",
    priority: 1
  },
  {
    name: "Search",
    status: "passed",
    priority: 3
  }
];
```

---

### 8. Filter + Map

I practiced using `.filter()` to select test cases and `.map()` to extract information from them.

```ts
const failedTests = testCases.filter(
  testCase =>
    testCase.status === "failed" &&
    testCase.priority <= 2
);

const failedTestNames = failedTests.map(
  testCase => testCase.name
);
```

Mental model:

```text
Array
  ↓
filter()
  ↓
keep matching objects
  ↓
map()
  ↓
extract/transform required data
```

---

## Important Mental Models

### Interface vs Variable

`TestCase` is the blueprint.

```ts
interface TestCase {
  name: string;
}
```

`testCase` is the actual variable/object.

```ts
const testCase: TestCase = {
  name: "Login"
};
```

### Array vs Individual Item

```ts
testCases
```

means the whole collection.

```ts
testCase
```

means one individual test case.

The callback parameter name can technically be anything, but using meaningful names makes the code easier to understand.

---

## QA Connection

These concepts are directly useful for automation because test automation constantly works with structured data such as:

* test cases
* test statuses
* priorities
* users
* browsers
* test results
* execution reports

TypeScript helps make sure this data follows the expected structure before the automation code runs.

---

## Day 5 Status

Completed.

Topics covered:

* [x] Union / literal types
* [x] Interfaces
* [x] Nested interfaces
* [x] `readonly`
* [x] Function types
* [x] Boolean expressions
* [x] Typed arrays
* [x] `.filter()`
* [x] `.map()`
* [x] Realistic QA test data
* [x] Combining TypeScript concepts

```
```
