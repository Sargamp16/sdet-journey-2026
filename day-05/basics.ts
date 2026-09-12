```ts
// Day 5 - TypeScript Advanced Types + QA Data Modeling

// 1. Union / Literal Type
type TestStatus = "passed" | "failed" | "skipped" | "blocked";


// 2. Nested Interface
interface User {
  username: string;
  role: string;
}


// 3. Test Case Interface
interface TestCase {
  readonly testId: number;
  name: string;
  status: TestStatus;
  priority: number;
  user?: User;
}


// 4. Creating a TestCase object
const testCase: TestCase = {
  testId: 101,
  name: "Login",
  status: "failed",
  priority: 1
};


// 5. Function Type
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};


// 6. Function Type with a QA Status
type CheckTest = (status: TestStatus) => boolean;

const checkTest: CheckTest = (status) => {
  return status === "passed";
};


// 7. Array of TestCase objects
const testCases: TestCase[] = [
  {
    testId: 1,
    name: "Login",
    status: "failed",
    priority: 1
  },
  {
    testId: 2,
    name: "Search",
    status: "passed",
    priority: 3
  }
];


// 8. Filter failed high-priority tests
const failedTests = testCases.filter(
  testCase =>
    testCase.status === "failed" &&
    testCase.priority <= 2
);


// 9. Extract test names
const failedTestNames = failedTests.map(
  failedTest => failedTest.name
);


// 10. Combining multiple TypeScript concepts
interface LoginTestCase {
  readonly testId: number;
  name: string;
  status: TestStatus;
  priority: number;
  user: User;
}

const loginTest: LoginTestCase = {
  testId: 101,
  name: "Login",
  status: "failed",
  priority: 1,
  user: {
    username: "Sargam",
    role: "QA"
  }
};
```
