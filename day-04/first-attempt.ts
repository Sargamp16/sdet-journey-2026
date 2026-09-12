```ts
// Day 4 - First Attempts
// TypeScript: Types, Interfaces, Union Types and QA Data
//
// This file contains my original attempts and the
// mistakes I made while learning Day 4 concepts.


// ==================================================
// EXERCISE 1 - UNION TYPE
// ==================================================

// My first attempt:
//
// type TestStatus{
//   status: "passed" | "failed" | "skipped"
// }
//
// let status = passed;
//
// Mistakes:
//
// 1. A type alias uses =
// 2. "passed" must be inside quotes because it is a string value
// 3. The variable can explicitly use the TestStatus type

type TestStatus = "passed" | "failed" | "skipped";

const status: TestStatus = "passed";


// ==================================================
// EXERCISE 2 - BROWSER UNION TYPE
// ==================================================

// My first attempt:
//
// type Browser: {
//   browser = "chromium" | "firefox" | "webkit"
// }
//
// let browser = firefox;
//
// Mistakes:
//
// 1. A type alias uses =
// 2. This is a union type, not an object
// 3. String values need quotes
// 4. The variable can be typed as Browser

type Browser = "chromium" | "firefox" | "webkit";

const browser: Browser = "firefox";


// ==================================================
// EXERCISE 3 - TEST CASE INTERFACE
// ==================================================

// My first attempt was similar to:
//
// interface TestCase:{
//   name:"string",
//   status:"TestStatus",
//   priority:"number",
//   description?="string"
// }
//
// const testcase : TestCases = [...]
//
// Mistakes:
//
// 1. Interface does not use : after the name
// 2. Property types are written without quotes
// 3. Optional property uses ? followed by : type
// 4. TestCase and testCases are different things
//
// TestCase = interface/type
// testCases = actual variable


interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
  description?: string;
}


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
  },
  {
    name: "Logout",
    status: "skipped",
    priority: 3
  }
];


// ==================================================
// EXERCISE 4 - GET FAILED TEST NAMES
// ==================================================

// My first attempt:
//
// function getFailedTestNames(testcase:testCases[]):string[]{
//   const final_testcase = testcase.filter(
//     testcase=>testcase.status === "failed";
//   return (final_testcase.map(finaltestcase.name);
// }
//
// Mistakes:
//
// 1. testCases is the variable, TestCase is the interface
// 2. Function parameter needs TestCase[]
// 3. filter() callback needs a closing parenthesis
// 4. map() needs a callback function
// 5. map() should be:
//      .map(testCase => testCase.name)


function getFailedTestNames(testCases: TestCase[]): string[] {
  const finalTestCases = testCases.filter(
    testCase => testCase.status === "failed"
  );

  return finalTestCases.map(
    testCase => testCase.name
  );
}

console.log(getFailedTestNames(testCases));

// Expected output:
// ["Search"]


// ==================================================
// EXERCISE 5 - HIGH PRIORITY FAILURES
// ==================================================

// My first attempt was very close:
//
// const testCases: number[] = [...]
//
// function getHighPriorityFailures(
//   test_testcase: testCases[]
// ): string[] {
//
//   const result = test_testcase.filter(
//     test_testcase =>
//       test_testcase.status === "failed" &&
//       test_testcase.priority <= 2
//   );
//
//   return result.map(
//     test_testcase => test_testcase.name
//   );
// }
//
//
//
// Main mistake:
//
// testCases[] is incorrect here.
//
// testCases is the name of the variable.
// TestCase is the interface.
//
// Therefore the function parameter should be:
//
// testCases: TestCase[]


// ==================================================
// FINAL VERSION OF EXERCISE 5
// ==================================================

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

console.log(getHighPriorityFailures(regressionTestCases));

// Expected output:
// ["Search"]


// ==================================================
// DAY 4 KEY LEARNINGS
// ==================================================
//
// type alias
//     ↓
// type TestStatus = "passed" | "failed" | "skipped"
//
// interface
//     ↓
// blueprint for an object
//
// TestCase
//     ↓
// interface/type
//
// testCases
//     ↓
// actual variable containing test data
//
// TestCase[]
//     ↓
// array of TestCase objects
//
// filter()
//     ↓
// keeps matching objects
//
// map()
//     ↓
// extracts the names
//
// string[]
//     ↓
// function returns multiple strings
```
