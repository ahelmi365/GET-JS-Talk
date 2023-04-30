// A callback is a function that is passed as an argument to another function
// and is executed after some operation has been completed

// What is the problem?
// 1. In case of multiple asynchronous operations, the code becomes nested and difficult to read
// code example of multiple asynchronous operations:



// example without callback function:
// breaking the DRY principle
// challenges solved by callback functions:
// 1. code duplication, example:
// 2. nested code
// 3. callback hell



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

function copyArrayAndMultiplyByTwo(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

function copyArrayAndDivideByTwo(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
  
}
function copyArrayAndAddTwo(array){
  const output = [];
  for(let i = 0; i < array.length; i++){
    output.push(array[i] + 2);
  }
  return output;
}

// =======================================================================
// using the callback functions:
function multiplyByTwo(number) {
  return number * 2;
}

function divideByTwo(number) {
  return number / 2;
}

function addTwo(number) {
  return number + 2;
}

function copyArray(array, instructions) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(instructions(element));
  });
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers); 

const newNumbers = copyArray(numbers, multiplyByTwo);
console.log(newNumbers); 

const newNumbers2 = copyArray(numbers, divideByTwo);
console.log(newNumbers2);

const newNumbers3 = copyArray(numbers, addTwo);
console.log(newNumbers3);

// You can pass annonymous functions as arguments to another function

// - You don't need to create a new function for each operation
// - You can pass a annonymous/arrow function as an argument to another function

// Passing annonymous function as arguments to another function

const newNumbers4 = copyArray(numbers, function (number) {
  return number + 2;
});
console.log(newNumbers4);

// Passing arrow function as arguments to another function

const newNumbers5 = copyArray(numbers, (number) => number + 2);
console.log(newNumbers5)


// higher order function
// higher order function is: a function that takes a function as an argument
// or returns a function as a result
// A “higher-order function” is a function that accepts functions as parameters 
// and/or returns a function.

const newNumbers6 = numbers.map((number) => number * 2);
console.log(newNumbers6);

// example of a function that returns a function as a result:
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addTwo = createAdder(2);
console.log(addTwo(10));  

const addFive = createAdder(5);
console.log(addFive(10));



// =======================================================================

function validateMoney(money) {
  const interest = 100;

  if (money > 0) {
    return money + interest;
  } else {
    return money;
  }
}

function getInterestMoney(money, callback) {
  if (typeof money !== "number") {
    return callback("money is not a number");
  } else {
    return callback(money);
  }
}

const money = getInterestMoney(1200, validateMoney);

console.log(money);
