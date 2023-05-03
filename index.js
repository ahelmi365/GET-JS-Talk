console.log(add(1, 2));

function add(a, b) {
  // function body
  return a + b;
}

var subtract = function (a, b) {
  // function body
  return a - b;
};
// console.log(subtract(5,3));

function createUser(name, initiaBalance) {
  let balance = initiaBalance;
  return {
    userName:name,
    getBalance: function () {
      return balance;
    },
    getName: function () {
      return this.userName;
    },
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        throw Error(
          `your balance: ${balance} is not enough to withdraw ${amount}`
        );
      }
    },
  };
}

const ali = createUser("Ali", 0);
console.log(ali)
console.log(ali.getBalance());
ali.userName = "taha";
console.log(ali)
console.log(ali.getName());
ali.deposit(1000);
console.log(ali.getBalance());


// don't try to be clever?
// the crown of complexity is simplicity?
// examples:

// fetch()
// The Fetch API provides an interface for fetching resources.
//  It is a more powerful and flexible replacement for XMLHttpRequest.

// For making a request and fetching a resource, use the fetch() method.
// It is a global method in Window

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
// It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers —
// even if the server response is an HTTP error status.

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// promise
// .then()
// .catch()
// .finally()

// async
// await

// try
// catch
// finally
// callback hell

// OOP
// polymorphism
// inheritance
// encapsulation
// abstraction
// class
// object
// constructor
// method
// property
// this
// new

// functional programming

// higher order function
// closure
// currying
// recursion

// static
// super
// extends
// getter
// setter
// private
// public
// protected
// instanceof
// isPrototypeOf
// hasOwnProperty

// prototype
// **proto**

// naming convention in javascript:
// https://www.w3schools.com/js/js_conventions.asp
// https://www.robinwieruch.de/javascript-naming-conventions

// camelCase
// PascalCase
// snake_case
// kebab-case

// Meeting Monday
// Hour: 2:30 pm
// Invite:
// Ali
// Mina Essam
// Kamel Fahd
// Michael Adly
// Farid
// Paula
// Deras
// Petter
// Ahmed Hemaly
// Sammar

// ====
// After Seesion:
// Farid
// Paula
