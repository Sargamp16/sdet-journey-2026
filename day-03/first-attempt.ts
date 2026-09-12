```ts
// Day 3 - First Attempts
// TypeScript Fundamentals
//
// This file intentionally contains my original attempts
// and the mistakes I made while learning.


/*
==================================================
EXERCISE 1 - IDENTIFYING TYPES
==================================================

My understanding:

username -> string
age -> number
isQA -> boolean
browsers -> string[]
durations -> number[]
*/


let username: string = "Sargam";
let age: number = 29;
let isQA: boolean = true;

let browsers: string[] = ["Chrome", "Firefox", "Safari"];
let durations: number[] = [1200, 3000, 5000];


/*
==================================================
EXERCISE 2 - TYPED FUNCTION
==================================================

My first attempt:

function addNumbers(number,number):number {}

Mistake:
I used the same parameter name twice.

Each parameter needs:
parameterName: type

Correct pattern:

function addNumbers(a: number, b: number): number {
  return a + b;
}
*/

function addNumbers(a: number, b: number): number {
  return a + b;
}


/*
==================================================
EXERCISE 3 - INTERFACE
==================================================

My first attempt was similar to:

interface User = {
  let name: string,
  let age: number,
  let role: string
}

Mistakes:

1. Interface does NOT use =
2. Properties inside an interface do NOT use let
3. Interface properties use semicolons

Correct structure:
*/

interface User {
  name: string;
  age: number;
  role: string;
}

const user: User = {
  name: "Sargam",
  age: 29,
  role: "QA Engineer"
};


/*
==================================================
EXERCISE 4 - TEST CASE INTERFACE
==================================================

I initially made the same interface syntax mistakes.

Important learning:

interface = blueprint

The interface describes what a TestCase must contain.

The actual test case object contains the values.
*/

interface TestCase {
  name: string;
  status: string;
  priority: number;
  description?: string;
}

const testCases: TestCase[] = [
  {
    name: "Login",
    status: "passed",
    priority: 1,
    description: "Login test passed"
  },
  {
    name: "Search",
    status: "failed",
    priority: 2,
    description: "Search test failed"
  },
  {
    name: "Logout",
    status: "skipped",
    priority: 3
  }
];


/*
==================================================
EXERCISE 5 - TYPED TEST RESULTS
==================================================

My first attempt was roughly:

interface TestResult = {
  let test: string,
  ...
}

let testResults: number[] = [
  ["login", "passed", 1200],
  ...
]

Mistakes:

1. Interface syntax was incorrect.
2. Test results are NOT number[].
3. Each test result is an OBJECT.
4. Therefore the array should be TestResult[].
*/

interface TestResult {
  test: string;
  status: string;
  duration: number;
}

const results: TestResult[] = [
  {
    test: "Login",
    status: "passed",
    duration: 1200
  },
  {
    test: "Search",
    status: "failed",
    duration: 3000
  },
  {
    test: "Checkout",
    status: "passed",
    duration: 5000
  },
  {
    test: "Logout",
    status: "failed",
    duration: 1500
  }
];


/*
==================================================
FILTER + MAP
==================================================

Important learning:

filter()
    ↓
keeps the complete objects that match the condition

map()
    ↓
extracts/transforms the information we want
*/

function getFailedTests(testResults: TestResult[]): string[] {
  const failedTests = testResults.filter(
    testResult => testResult.status === "failed"
  );

  return failedTests.map(testResult => testResult.test);
}

console.log(getFailedTests(results));


// Expected output:
// ["Search", "Logout"]


/*
==================================================
DAY 3 FINAL MENTAL MODEL
==================================================

interface
    ↓
blueprint

object
    ↓
actual data following the blueprint

TestResult[]
    ↓
array containing TestResult objects

filter()
    ↓
find/keep matching objects

map()
    ↓
extract or transform values

TypeScript
    ↓
helps catch incorrect types before runtime
*/
```
