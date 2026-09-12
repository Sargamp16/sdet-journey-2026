```ts
// Day 5 - First Attempts
// These are preserved learning attempts and mistakes.

// Exercise 1
type TestStatus = "passed" | "failed" | "skipped" | "blocked";
const status = "passed";


// Exercise 2 - Initial interface attempt
interface User:{
  username:string;
  role:string;
}

// Mistake: colon after interface name.
// Correct syntax:
// interface User {
//   username: string;
//   role: string;
// }


// Exercise 2 - Initial TestCase attempt
interface TestCase:{
  name:string;
  status:TestStatus;
  priority:number;
  user:User;
}

const TestCase: TestCase[] = [
  {
    name:"Login",
    status:"passed",
    priority:1,
    user:{
      username:"Sargam",
      role:"QA",
    }
  }
];

// Mistakes:
// - interface names do not use ":"
// - TestCase is the interface name, not the variable name
// - actual variable should be something like testCases


// Exercise 3 - readonly
interface ReadonlyTestCase {
  readonly testId:number;
  name:string;
  status:TestStatus;
}

const readonlyTestCase: ReadonlyTestCase = {
  testId:101,
  name:"Login",
  status:"passed",
};


// Exercise 4 - Initial function type attempt
type AddFunction = function add(
  a:number,
  b:number
):number;

// Mistake:
// A function type is written using:
// type AddFunction = (a: number, b: number) => number;


// Exercise 4 - Corrected function
type AddFunctionCorrect = (a:number, b:number) => number;

const add: AddFunctionCorrect = (a, b) => {
  return (a + b);
};


// Exercise 5 - Initial attempt
function teststatus(status:boolean) {
  if (status === "passed")
    return true;
  else
    return false;
}

// Mistake:
// status should be TestStatus, not boolean.


// Exercise 5 - Another attempt
function status_check(status:string): boolean {
  if (status === "passed")
    return true;
  else
    return false;
}

// Improvement:
// The logic was correct, but TestStatus is more specific than string.


// Exercise 6 - Initial ternary attempt
const checkTestAttempt = (status: TestStatus) => {
  // Initial idea:
  // return (if (status === "passed") : true ? false)
};

// Learning:
// status === "passed" already produces true or false.


// Exercise 6 - Final version
type CheckTest = (status: TestStatus) => boolean;

const checkTest: CheckTest = (status) => {
  return status === "passed";
};


// Exercise 7 - Creating a TestCase
const testCase: TestCase = {
  name: "Login",
  status: "failed",
  priority: 1
};


// Exercise 8 - Array of test cases
const testcase: TestCase[] = [
  {
    testId: 1,
    name: "Login",
    status: "failed",
    priority: 1,
  },
  {
    testId: 2,
    name: "Search",
    status: "passed",
    priority: 3,
  }
];


// Exercise 9 - Filter
const failedTests = testcase.filter(
  testCases =>
    testCases.status === "failed" &&
    testCases.priority <= 2
);


// Exercise 10 - Initial map attempt
// Mistake:
// const failedTestNames = failedTests.map(
//   failedtest.map => failedtest.name
// );


// Corrected map
const failedTestNames = failedTests.map(
  failedtest => failedtest.name
);


// Exercise 11 - Final combined QA model
interface LoginTestCase {
  readonly testId:number;
  name:string;
  status:TestStatus;
  priority:number;
  user:User;
}

const loginTest: LoginTestCase = {
  testId:101,
  name:"Login",
  status:"failed",
  priority:1,
  user:{
    username:"Sargam",
    role:"QA",
  }
};
```
