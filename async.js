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

getEmployeesData().then(
  (reolveValue) => console.log(reolveValue),
  (rejectValue) => console.error(rejectValue)
);

// =======================================================================

function getEmployeesData() {
  const employees = ["John", "Jane", "Jack"];

  if (employees.length > 0) {
    return Promise.resolve("Employees exist");
  } else {
    return Promise.reject("Employees does not exist");
  }
}

getEmployeesData().then(
  (reolveValue) => console.log(reolveValue),
  (rejectValue) => console.error(rejectValue)
);

// =======================================================================

// Async is a keyword that is used to declare an async function.
// Async functions always return a promise.

async function getEmployeesData() {
  const employees = ["John", "Jane", "Jack"];

  if (employees.length > 0) {
    return "Employees exist";
  } else {
    throw Error("Employees does not exist");
  }
}

// console.log(getEmployeesData());

getEmployeesData().then(
  (reolveValue) => console.log(reolveValue),
  (rejectValue) => console.error(rejectValue)
);

