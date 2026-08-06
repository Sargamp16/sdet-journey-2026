🧪 Exercises
Exercise 1 — map()

Given:

const numbers = [10, 20, 30, 40, 50];

Use map() to produce:

[20, 40, 60, 80, 100]
Solution
const numbers = [10, 20, 30, 40, 50];

const result = numbers.map(number => number * 2);

console.log(result);
Exercise 2 — filter()

Given:

const users = [
    { name: "John", age: 17 },
    { name: "Sarah", age: 25 },
    { name: "Mike", age: 30 },
    { name: "Emma", age: 16 }
];

Find users who are 18 or older.

Solution
const adults = users.filter(user => user.age >= 18);

console.log(adults);

Expected users:

Sarah
Mike
Lesson learned

Initially I used:

user.age > 18

But "18 or older" means:

user.age >= 18
Exercise 3 — Interface

Create a User interface with:

name → string
age  → number
role → string

Then create two users using that interface.

Example
interface User {
    name: string;
    age: number;
    role: string;
}

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
Exercise 4 — SDET-style Array Processing

Given:

const testCases = [
    { name: "Login", status: "passed" },
    { name: "Search", status: "failed" },
    { name: "Checkout", status: "passed" },
    { name: "Logout", status: "failed" }
];

Find the failed tests and then return only their names.

Solution

First, filter the failed tests:

const failedTests = testCases.filter(
    testCase => testCase.status === "failed"
);

Then get their names:

const failedTestNames = failedTests.map(
    testCase => testCase.name
);

Result:

["Search", "Logout"]
