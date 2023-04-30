// The Fetch API provides an interface for fetching resources.
// It is a more powerful and flexible replacement for XMLHttpRequest.

// For making a request and fetching a resource, use the fetch() method.
// It is a global method in Window

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
// It returns a Promise that resolves to the Response to that request
// res.json() is a method on the response object that returns a promise to parse the body text as JSON

//"https://dummyjson.com/products/1"
const URL = "https://dummyjson.com/products";

fetch(URL, options)
  .then((response) => response.json())
  .then((result) => console.log(result));

let response = await fetch(URL, options); // resolves with response headers
let result = await response.json(); // read body as json

// Example
fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));

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
