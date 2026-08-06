# Day 01 — JavaScript / TypeScript Fundamentals

**Date:** August 6, 2026

## 🎯 Today's Goals

- Understand JavaScript fundamentals
- Understand map() and filter()
- Understand functions
- Understand Promise, async and await
- Understand TypeScript interfaces
- Write basic TypeScript code

---

## 🧠 Concepts Learned

### 1. let, const and var

`let` is used when a variable may need to be reassigned.

`const` is used when the variable itself should not be reassigned.

`var` is an older way of declaring variables and should generally be avoided in modern JavaScript/TypeScript.

---

### 2. map()

`map()` is used to transform every element of an array and returns a new array.

Example:

```typescript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
// [2, 4, 6]
