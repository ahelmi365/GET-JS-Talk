### Excercise 1
- Write a function `filterArray` that takes an `array` of values and a `callback` function as arguments. 
- The `filterArray` function should use the `callback` function to filter the array and `return` a new `array` with only the elements that pass the filter.

- The `callback` function should take a single `argument` (an array element) and `return` `true` or `false` depending on whether the element should be included in the filtered array.

```js
const myArray = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}

const filteredArray = filterArray(myArray, isEven);

console.log(filteredArray); // [2, 4, 6]

```

### Excercise 2
- Write a function `doubleArray` that takes an `array` of numbers as an argument and `returns` a new array where each element is twice the value of the corresponding element in the original array. 

```js
const myArray = [1, 2, 3, 4, 5];

function doubleNum(num) {
  return num * 2;
}

const doubledArray = doubleArray(myArray, doubleNum);

console.log(doubledArray); // [2, 4, 6, 8, 10]

```

### Excercise 3
- Write a function `sumArray` that takes an `array` of numbers as an argument and `returns` the sum of all the elements in the array. 

```js
const myArray = [1, 2, 3, 4, 5];

function sum(acc, num) {
  return acc + num;
}

const sumOfArray = sumArray(myArray, sum);

console.log(sumOfArray); // 15

```
---

### Excercise 4

```js
const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Jack", lastName: "Jill" },
  { id: 4, firstName: "James", lastName: "Bond" },
  { id: 5, firstName: "Jane", lastName: "Doe" },
  { id: 6, firstName: "John", lastName: "Smith" },
  { id: 7, firstName: "Jack", lastName: "Jill" },
  { id: 8, firstName: "James", lastName: "Bond" },
  { id: 9, firstName: "Jane", lastName: "Doe" },
  { id: 10, firstName: "John", lastName: "Smith" },
  { id: 11, firstName: "Jack", lastName: "Jill" },
  { id: 12, firstName: "James", lastName: "Bond" },
  { id: 13, firstName: "Jane", lastName: "Doe" },
  { id: 14, firstName: "John", lastName: "Smith" },
  { id: 15, firstName: "Jack", lastName: "Jill" },
  { id: 16, firstName: "James", lastName: "Bond" },
  { id: 17, firstName: "Jane", lastName: "Doe" },
  { id: 18, firstName: "John", lastName: "Smith" },
  { id: 19, firstName: "Jack", lastName: "Jill" },
  { id: 20, firstName: "James", lastName: "Bond" },
  { id: 21, firstName: "Jane", lastName: "Doe" },
  { id: 22, firstName: "John", lastName: "Smith" },
  { id: 23, firstName: "Jack", lastName: "Jill" },
  { id: 24, firstName: "James", lastName: "Bond" },
  { id: 25, firstName: "Jane", lastName: "Doe" },
  { id: 26, firstName: "John", lastName: "Smith" },
  { id: 27, firstName: "Jack", lastName: "Jill" },
  { id: 28, firstName: "James", lastName: "Bond" },
  { id: 29, firstName: "Jane", lastName: "Doe" },
];
```

- Create a function called `getUsersWithFullName` that takes an array of `users` and returns an array of `users` with `id`, `firstName`, `lastNam` and `fullName` without using the map function

---

### Excercise 5

- Create a function called `getUserWithId` to take an array of `users` and `id` and `return` the user with the given id.
---

### Excercise 6
- create a function called `getUsersFirstNameStartsWith` to take an array of `users` and a `charachter` and `return` new array of users with the first name` starts with` the given charachter.


