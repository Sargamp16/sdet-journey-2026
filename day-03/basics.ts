```ts
// Day 3 - TypeScript Fundamentals
// Focus: Types, Functions, Interfaces and Typed Test Data


// --------------------------------------------------
// 1. BASIC TYPES
// --------------------------------------------------

let username: string = "Sargam";
let age: number = 29;
let isQA: boolean = true;


// --------------------------------------------------
// 2. TYPE INFERENCE
// --------------------------------------------------

// TypeScript automatically understands the type
// because the value is already provided.

let userName = "Sargam";
let experience = 5;


// --------------------------------------------------
// 3. TYPED ARRAYS
// --------------------------------------------------

let browsers: string[] = ["Chrome", "Firefox", "Safari"];

let testDurations: number[] = [1200, 3000, 5000];


// --------------------------------------------------
// 4. TYPED FUNCTION
// --------------------------------------------------

function calculateSquare(number: number): number {
  return number * number;
}

console.log(calculateSquare(5));


// --------------------------------------------------
// 5. FUNCTION WITH STRING
// --------------------------------------------------

function greetUser(name: stri
```
