// ==========================================
// Day 01 - JavaScript & TypeScript Basics
// ==========================================


// Exercise 1
// Question:
// Given [10, 20, 30, 40, 50], use map()
// to produce [20, 40, 60, 80, 100].

const numbers = [10, 20, 30, 40, 50];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);


// ==========================================


// Exercise 2
// Question:
// Find users who are 18 or older.

const users = [
    { name: "John", age: 17 },
    { name: "Sarah", age: 25 },
    { name: "Mike", age: 30 },
    { name: "Emma", age: 16 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);


// ==========================================


// Exercise 3
// Question:
// Create a User interface with:
// name: string
// age: number
// role: string

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

console.log(user1);
console.log(user2);


// ==========================================


// Exercise 4
// Question:
// Find failed test cases and return only their names.

const testCases = [
    { name: "Login", status: "passed" },
    { name: "Search", status: "failed" },
    { name: "Checkout", status: "passed" },
    { name: "Logout", status: "failed" }
];

const failedTests = testCases.filter(
    testCase => testCase.status === "failed"
);

const failedTestNames = failedTests.map(
    testCase => testCase.name
);

console.log(failedTestNames);
