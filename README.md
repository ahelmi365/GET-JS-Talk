# JS-Talks

## JavaScript talk by GET FrontEnd Team

## Table of contents

- [Types of functions in JS](#Types-of-functions-in-JS)
- [Functions are First Class Objects](#Functions-are-First-Class-Objects)
- [Callback Functions](#Callback-Functions)
- [Higher Order Functions](#Higher-Order-Functions)
- [Promises in js](#Promises-in-js)
- [Promises (then() Catch() finally())](#Promises-(then()-Catch()-finally()))
- [Fetch()](#Fetch())
- [Async](#Async)
- [Await](#Await)
- [Callback Hell and how to avoid it](#Callback-Hell-and-how-to-avoid-it)

## Types of functions in JS

Some examples of different types of functions in JavaScript based on their behavior and side-effects:

1. Pure function:

   A pure function is a function that doesn't modify any data outside of its own scope and always returns the same result for the same input. Here is an example:

   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

2. Impure function:

   An impure function is a function that modifies data outside of its own scope or has side effects. Here is an example:

   ```javascript
   let count = 0;

   function incrementCount() {
     count++;
   }
   ```

3. Higher-order function:

   A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Here is an example:

   ```javascript
   function multiplyBy(num) {
     return function (x) {
       return x * num;
     };
   }

   const double = multiplyBy(2);
   console.log(double(5)); // Output: 10
   ```

4. Recursive function:

   A recursive function is a function that calls itself until a certain condition is met. Here is an example:

   ```javascript
   function factorial(num) {
     if (num === 0 || num === 1) {
       return 1;
     }
     return num * factorial(num - 1);
   }

   console.log(factorial(5)); // Output: 120
   ```

5. Arrow function:

   An arrow function is a more concise syntax for writing a function in JavaScript. Here is an example:

   ```javascript
   const add = (a, b) => {
     return a + b;
   };

   console.log(add(2, 3)); // Output: 5
   ```

6. Generator function:

   A generator function is a function that can pause its execution and return multiple values one at a time. Here is an example:

   ```javascript
   function* processNumbers(numbers) {
     for (const num of numbers) {
       // Perform some operation on num
       const result = num * 2;

       // Pause the iteration and yield the result
       yield result;
     }
   }

   function doSomething() {
     console.log("Doing something...");
   }

   const numbers = [1, 2, 3, 4, 5];
   const gen = processNumbers(numbers);

   // Iterate over the generator and pause after each result
   console.log(gen.next().value); // 2
   doSomething();
   console.log(gen.next().value); // 4
   doSomething();
   console.log(gen.next().value); // 6
   doSomething();
   console.log(gen.next().value); // 8
   doSomething();
   console.log(gen.next().value); // 10
   ```

## Functions are First Class Objects

- In javaScript functions are considered first-class objects, which means they can be treated like any other value or object. This means that:

  - Functions can be assigned to variables

    ```js
    const add = function (a, b) {
      return a + b;
    };
    console.log(add(2, 3)); // 5
    ```

  - Functions can be returned as values from functions:

    ```js
    function makeMultiplier(factor) {
      return function (number) {
        return number * factor;
      };
    }

    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);

    console.log(double(5)); // 10
    console.log(triple(5)); // 15
    ```

  - Functions can be stored in data structures like arrays or objects:

    ```js
    const operations = {
      add: function (a, b) {
        return a + b;
      },
      subtract: function (a, b) {
        return a - b;
      },
      multiply: function (a, b) {
        return a * b;
      },
      divide: function (a, b) {
        return a / b;
      },
    };

    console.log(operations.add(2, 3)); // 5
    console.log(operations.divide(10, 2)); // 5
    ```

  - Functions can be passed as arguments to other functions:

    ```js
    function greeting(name) {
      console.log(`Hello, ${name}!`);
    }

    function greetingWrapper(fn, name) {
      console.log("Preparing to greet...");
      fn(name);
      console.log("Greeting complete.");
    }

    greetingWrapper(greeting, "Alice");

    // Output:
    // Preparing to greet...
    // Hello, Alice!
    // Greeting complete.
    ```

## Callback Functions

- A callback is a function that is passed as an argument to another function
- And is executed after some operation has been completed

### Challenges solved by callback function in js:

### 1. Code duplication

- Example to show the problem without callback function:

  ```js
  // breaking the DRY principle

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
  function copyArrayAndAddTwo(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(array[i] + 2);
    }
    return output;
  }
  ```

- The solution using callback function

  ```js
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
  ```

  - You don't need to create a new function for each operation
  - You can pass a annonymous/arrow function as an argument to another function

  ```js
  // Passing annonymous function as arguments to another function

  const newNumbers4 = copyArray(numbers, function (number) {
    return number + 2;
  });
  console.log(newNumbers4);

  // Passing arrow function as arguments to another function

  const newNumbers5 = copyArray(numbers, (number) => number + 2);
  console.log(newNumbers5);
  ```

### 2. Asynchronous programming

- In asynchronous programming, a function may take some time to complete its operation. This can cause the program to pause or become unresponsive.
- Callbacks provide a way to avoid this by allowing the program to continue executing while the asynchronous function is running in the background.

  ```js
  function getData(callback) {
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      callback(data);
    }, 1000);
  }

  function processData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
  }

  getData(processData);
  // Output after 1 second: Name: John Doe, Age: 30
  ```

## Higher Order Functions

- Higher order function is a function that takes a function as an argument

  ```js
  function copyArray(array, instructions) {
    const newArray = [];
    array.forEach((element) => {
      newArray.push(instructions(element));
    });
    return newArray;
  }

  function multiplyByTwo(number) {
    return number * 2;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Using the higher-order function to pass a function as an argument

  const newNumbers = copyArray(numbers, multiplyByTwo);
  console.log(newNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  ```

- Or a function that returns a function as a result

  ```js
  // example of a function that returns a function as a result:
  function createAdder(num) {
    return function (x) {
      return x + num;
    };
  }
  const addTwo = createAdder(2);
  console.log(addTwo(10)); // 12

  const addFive = createAdder(5);
  console.log(addFive(10)); // 15
  ```

## JS built-in HOF

Examples of built-in higher-order functions in JavaScript:

1.  `Array.map()`: Returns a new array with the same number of elements as the original array, where each element is transformed according to a function that is passed as an argument.

    ```js
    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map(function (num) {
      return num * 2;
    });

    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    ```

2.  `Array.filter()`: Returns a new array with only the elements that pass a test implemented by a function that is passed as an argument.

    ```js
    const numbers = [1, 2, 3, 4, 5];

    const evenNumbers = numbers.filter(function (num) {
      return num % 2 === 0;
    });

    console.log(evenNumbers); // Output: [2, 4]
    ```

3.  `Array.reduce()`: - The goal of the `reduce` method is to reduce the array to a single value by applying a function to each element in that array (from left to right). - The function that is passed to `reduce()` takes two arguments: an `accumulator` and the `current value` in the array. - The function returns the updated `accumulator`, which is used as the `accumulator` for the next iteration. - The function is called once for each element in the array.
    <br/><br/>

    ````js
    const numbers = [1, 2, 3, 4, 5];

          const sumOfNumbers = numbers.reduce(function(acc, num) {
            return acc + num;
          }, 0);

          console.log(sumOfNumbers); // Output: 15
          ```
    ````

These built-in higher-order functions make it easy to write concise and expressive code that manipulates arrays.

## Promises in js

- Promises are used to handle asynchronous operations in JavaScript.
- A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
- Promises returns an object to which you attach callbacks, instead of passing callbacks into a function.
- A Promise is in one of these states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.

```js
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
});
```

- The function passed to `new Promise` is called the `executor`. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.

- Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself.

- When the executor obtains the result, it should call one of these callbacks:

  - `resolve(value)` — if the job finished successfully, with result `value`.
  - `reject(error)` — if an error occurred, `error` is the error object.

- So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls `resolve` if it was successful or `reject` if there was an error.
- The promise object returned by the `new Promise` constructor has these internal properties:

  - `state` — initially `"pending"`, then changes to either `"fulfilled"` when `resolve` is called or `"rejected"` when `reject` is called.
  - `result` — initially `undefined`, then changes to `value` when `resolve(value)` called or to `error` when `reject(error)` is called.
  - So the executor eventually moves promise to one of these states:

    ![alt text](./screenshots/promise.PNG)

- Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

  ```js
  let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });
  ```

- We can see two things by running the code above:

  1. The executor is called automatically and immediately (by new Promise).

  2. The executor receives two arguments: `resolve` and `reject`. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

  After one second of “processing”, the executor calls resolve("done") to produce the result. This changes the state of the promise object:

  ![alt text](./screenshots/promise2.PNG)
  That was an example of a successful job completion, a “fulfilled promise”.

- And now an example of the executor rejecting the promise with an error:

  ```js
  let promise = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  ```

  - The call to `reject(...)` moves the promise object to "rejected" state:

  ![alt text](./screenshots/promise3.PNG)

## Promises (then() Catch() finally())

- A `Promise` object serves as a link between the `executor` (the “producing code”) and the `consuming functions`, which will receive the result or error.
- Consuming functions can be registered (subscribed) using methods `.then`, `.catch` and `.finally`.

### then()

- The most important, fundamental one is .then.
- The syntax is:
  ```js
  promise.then(
    function (result) {
      /* handle a successful result */
    },
    function (error) {
      /* handle an error */
    }
  );
  ```
- The first argument of `.then` is a function that runs when the promise is `fulfilled`, and receives the result.
- The second argument of `.then` is a function that runs when the promise is `rejected`, and receives the error.
- For instance, here’s a reaction to a successfully resolved promise:

  ```js
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });

  // resolve runs the first function in .then
  promise.then(
    (result) => alert(result), // shows "done!" after 1 second
    (error) => alert(error) // doesn't run
  );
  ```

- And in the case of a rejection, the second one:

  ```js
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  // reject runs the second function in .then
  promise.then(
    (result) => alert(result), // doesn't run
    (error) => alert(error) // shows "Error: Whoops!" after 1 second
  );
  ```

- If we’re interested only in successful completions, then we can provide only one function argument to `.then`:

  ```js
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  promise.then(alert); // shows "done!" after 1 second
  ```

### catch

- If we’re interested only in errors, then we can use null as the first argument: `.then(null, errorHandlingFunction)`, which is exactly the same:

  ```js
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  // .catch(f) is the same as promise.then(null, f)
  promise.catch(alert); // shows "Error: Whoops!" after 1 second
  ```

- The call `.catch(f)` is a complete analog of `.then(null, f)`, it’s just a shorthand.

### finally

- The call `.finally(f)` is similar to `.then(f, f)` in the sense that `f` always runs when the promise is settled: be it resolve or reject.
- The idea of `finally` is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
- A finally handler “passes through” the `result` or `error` to the next suitable handler.

- For instance, here the result is passed through finally to then:

  ```js
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
  })
    .finally(() => alert("Promise ready")) // triggers first
    .then((result) => alert(result)); // <-- .then shows "value"
  ```

- As you can see, the `value` returned by the first promise is passed through `finally` to the next `then`.
- And here’s an example of an error, for us to see how it’s passed through finally to catch:

  ```js
  new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Promise ready")) // <-- .finally handles the error
    .catch((err) => alert(err)); // <-- .catch handles the error object
  ```

## Fetch()

- In frontend programming, promises are often used for network requests.
- The Fetch API provides an interface for fetching resources.
- It is a more powerful and flexible replacement for `XMLHttpRequest`.
- For making a request and fetching a resource, use the fetch() method.
- It is a global method in Window object.
- The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
- It returns a Promise that resolves to the Response to that request
- res.json() is a method on the response object that returns a promise to parse the body text as JSON

  ```js
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //  reads the remote data and parses it as JSON
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

- Another example:

  ```js
  const URL = "https://dummyjson.com/products";

  fetch(URL) // returns a promise
    .then((res) => res.json()) // returns a promise
    .then((json) => json) // returns a promise
    .then((data) => {
      console.log(data.products);
      return data.products; // for the next then()
    })
    .then((products) => {
      console.log(products[0]);
      return products[0]; // for the next then()
    })
    .then((firstProduct) => {
      console.log(firstProduct.title);
    });
  ```

## Async
- There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
- The word `“async”` before a function means one simple thing: a function always returns a `promise`. Other values are wrapped in a resolved promise automatically.
- let's check this function:
  ```js
  function getEmployeesData() {
    const employees = ["John", "Jane", "Jack"];

    return new Promise((resolve, reject) => {
      if (employees.length > 0) {
        resolve("Employees exist");
      } else {
        reject("Employees does not exist");
      }
    });
  }
  // call the function
  getEmployeesData().then(
    (reolveValue) => console.log(reolveValue),
    (rejectValue) => console.error(rejectValue)
  );
  ```
- We can rewrite the previous function as:

    ```js
    function getEmployeesData() {
      const employees = ["John", "Jane", "Jack"];

      if (employees.length > 0) {
        return Promise.resolve("Employees exist");
      } else {
        return Promise.reject("Employees does not exist");
      }
  }
  // call the function
  getEmployeesData().then(
    (reolveValue) => console.log(reolveValue),
    (rejectValue) => console.error(rejectValue)
  );
  ```
- We can rewrite the previous function using `async` as:
  
  ```js
  async function getEmployeesData() {
    const employees = ["John", "Jane", "Jack"];

    if (employees.length > 0) {
      return "Employees exist";
    } else {
      throw "Employees does not exist";
    }
  }
  // call the function
  getEmployeesData().then(
    (reolveValue) => console.log(reolveValue),
    (rejectValue) => console.error(rejectValue)
  );
  ```
## Await
- `await` is a keyword that is used inside an `async` function.
- `await` waits for the promise to `resolve` and returns the result.
- We use the `await` keyword to wait for the response to come back before moving on to the next line of code
- `await` only works inside `async` functions within regular JavaScript code, however it can be used on its own with JavaScript modules.
- Example
  ```js
  function getEmployeesData() {
    console.log("Start of getEmployeesData()");

    const URL = "https://dummyjson.com/products";

    const response = fetch(URL);
    response
      .then((res) => res.json())
      .then((json) => json.products)
      .then((products) => products[0])
      .then((firstProduct) => firstProduct.title)
      .then((title) => console.log(title));

    console.log("End of getEmployeesData()");
  }

  getEmployeesData();
  ```
- The above function can be rewritten using `async` and `await` as:

  ```js
  async function getEmployeesData() {
    console.log("Start of getEmployeesData()");

    const URL = "https://dummyjson.com/products";

    const response = await fetch(URL);
    const json = await response.json();

    const products = json.products;
    const firstProduct = products[0];
    const title = firstProduct.title;

    console.log(title);

    console.log("End of getEmployeesData()");
  }

  getEmployeesData();
  ```
- The keyword `await` makes JavaScript wait until that `promise` settles and returns its result.
-  `await` literally suspends the function execution until the `promise` settles, and then resumes it with the `promise` result. 
- That doesn’t cost any CPU resources, because the `JavaScript` engine can do other jobs in the meantime: execute other scripts, handle events, etc.
- It’s just a more elegant syntax of getting the `promise` result than `promise.then`. And, it’s easier to read and write.
- In modern browsers, `await` on top level works just fine, when we’re inside a `module`. But if the code is not inside a module, then `await` will produce an `error`.
- Example:
  ```js
  // we assume this code runs at top level, inside a module
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  console.log(user);
  ```

## Callback Hell and how to avoid it
- callback hell is a situation where you have a lot of nested callbacks
```js
loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

});
```
- This code uses callbacks to load three scripts in sequence. Each time a script is loaded, the next script is loaded in the callback function.
- This creates a "pyramid of doom" structure where the code becomes nested and hard to read. It also makes error handling difficult
- To solve this, we can use Promises and async/await. Here's an example of how to refactor the code using Promises and async/await:
```js
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.head.appendChild(script);
  });
}

async function start() {
  try {
    const script1 = await loadScript('/my/script.js');
    console.log(`${script1.src} loaded`);

    const script2 = await loadScript('/my/script2.js');
    console.log(`${script2.src} loaded`);

    const script3 = await loadScript('/my/script3.js');
    console.log(`${script3.src} loaded`);

    // continue after all scripts are loaded
  } catch (err) {
    console.error(err);
  }
}

start();

```
- This refactored code uses `Promises` to load the scripts, and `async/await` to wait for each Promise to `resolve` before continuing with the next statement. 
- This approach makes the code much more readable and maintainable, and avoids the "`pyramid of doom`" structure of callback hell.

## Questions

