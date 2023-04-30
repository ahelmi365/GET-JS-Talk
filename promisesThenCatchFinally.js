// promises then catch and finally
// .then(): callback function to be executed when the promise is resolved
// .catch(): callback function to be executed when the promise is rejected
// .finally(): callback function to be executed when the promise is settled (fulfilled or rejected)

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  let isCconnected = false;
  if (isCconnected) {
    resolve("You are connected connected!");
  } else {
    reject(new Error("No network available!"));
  }
});

// console.log(promise); // pending

// callback function to be executed when the promise is resolved
const onResolve = (value) => {
  console.log(value);
};
// callback function to be executed when the promise is rejected
const onReject = (error) => {
  console.error(error);
};

// callback function to be executed when the promise is settled (fulfilled or rejected)
const onFinally = () => {
  console.log("the promise is settled (fulfilled or rejected)");
};

// Attaches callbacks for the resolution and/or rejection of the Promise.

promise.then(onResolve).catch(onReject).finally(onFinally);

// promise.then(onResolve, onReject).finally(onFinally);
