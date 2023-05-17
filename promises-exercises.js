// =======================================================
// Guess the output of the following code snippets.
// =======================================================

// =======================================================
// Question - 1
// =======================================================

console.log(1);

const f = () =>
  new Promise((resolve) => {
    console.log(4);
    resolve(5);
  });

console.log(2);

f().then((res) => console.log(res));

console.log(3);

// =======================================================
// Question -2
// =======================================================

console.log(1);

const p = new Promise((resolve) => {
  console.log(2);
  resolve(3);
  console.log(4);
});

p.then((res) => console.log(res));

console.log(5);

// =======================================================
// Question - 3
// =======================================================

const p = new Promise((resolve, reject) => {
  console.log(1);
});

p.then((res) => console.log(2));

// =======================================================
// Question - 4
// =======================================================

Promise.resolve(0, 1).then((res) => console.log(res));

// Question - 5
// =======================================================

Promise.resolve(5)
  .then((res) => res * 2)
  .then((res) => res * 2)
  .then((res) => console.log(res));

  // =======================================================
// Question - 6
// =======================================================

const promiseA = new Promise((resolve, reject) => {
  resolve(0);
  reject(1);
});

promiseA.then((val) => console.log(val)).catch((err) => console.log(err));

// =======================================================
// Question - 7
// =======================================================

const promiseA = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promiseA.then((val) => console.log(val));

console.log(3);

// =======================================================
// Question - 8
// =======================================================

const p = new Promise((reject) => {
  reject(777);
});

p.then((val) => {
  console.log("then:", val);
}).catch((err) => {
  console.log("catch:", err);
});

// =======================================================
// Question - 9
// =======================================================

const p1 = Promise.resolve(1);

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 100);
});

Promise.all([p1, p2]).then((res) => {
  console.log(res[0] + res[1]);
});

// =======================================================
// Question - 10
// =======================================================

const p1 = Promise.resolve(1);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

const p3 = 3;

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });




