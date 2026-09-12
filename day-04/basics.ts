```ts
// Day 4 - TypeScript: Types, Interfaces and Real QA Data

// --------------------------------------------------
// 1. UNION TYPES
// --------------------------------------------------

// A union type allows a variable to have one of
// several specific values.

type TestStatus = "passed" | "failed" | "skipped";

const status: TestStatus = "passed";


// --------------------------------------------------
// 2. BROWSER UNION TYPE
// --------------------------------------------------

type Browser = "chromium" | "firefox" | "webkit";

const browser: Browser = "firefox";


// --------------------------------------------------
// 3. TEST CASE INTERFACE
// --------------------------------------------------

interface TestCase {
  name: string;
  status: TestStatus;
  priority: number;
  description?: string;
}


// --------------------------------------------------
// 4. TEST CASE DATA
// --------------------------------------------------

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
    description: "Search functionality failed"
  },
  {
    name: "Logout",
    status: "skipped",
    priority: 3
  }
];


// --------------------------------------------------
// 5. GET FAILED TEST NAMES
// --------------------------------------------------

function getFailedTestNames(testCases: TestCase[]): string[] {
  const failedTests = testCases.filter(
    testCase => testCase.status === "failed"
  );

  return failedTests.map(testCase => testCase.name);
}

console.log(getFailedTestNames(testCases));

// Expected output:
// ["Search"]


// --------------------------------------------------
// 6. REAL QA TEST DATA
// --------------------------------------------------

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


// --------------------------------------------------
// 7. HIGH-PRIORITY FAILURES
// --------------------------------------------------

// High-priority failure means:
// status = failed
// AND
// priority <= 2

function getHighPriorityFailures(
  testCases: TestCase[]
): string[] {
  const result = testCases.filter(
    testCase =>
      testCase.status === "failed" &&
      testCase.priority <= 2
  );

  return result.map(testCase => testCase.name);
}

console.log(getHighPriorityFailures(regressionTestCases));

// Expected output:
// ["Search"]


// --------------------------------------------------
// DAY 4 MENTAL MODEL
// --------------------------------------------------

// type
//     ↓
// defines allowed values/types
//
// union type
//     ↓
// allows only specific values
//
// interface
//     ↓
// blueprint for an object
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
// extracts/transforms values
//
// TypeScript
//     ↓
// catches many mistakes before the test runs
```
