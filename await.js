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

// // =======================================================================
// Await is a keyword that is used inside an async function.
// Await waits for the promise to resolve and returns the result.

// we use the await keyword to wait for the response to come back
// before moving on to the next line of code.
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


