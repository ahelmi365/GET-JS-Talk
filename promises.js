// Promise is a JavaScript object for asynchronous operation.
// Promises returns an object to which you attach callbacks, instead of passing callbacks into a function.
// Promises are easier to read, easier to write, easier to debug.
// Promises avoid callback hell.

// Promises status:
// -- pending: operation is pending
// -- fulfilled : operation is completed
// -- rejected: operation is failed

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  let connect = true;
  if (connect) {
    resolve("You are connected!");
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

// then(): Attaches callbacks for the resolution and/or rejection of the Promise.
promise.then(onResolve, onReject);

// =======================================================================
// Avoid the callback hell problem using promises:
// =======================================================================
function getUserData(useId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, name: "John Doe", age: 30 };
      resolve(userData);
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = [
        { id: 1, title: "Post 1", body: "Body of post 1" },
        { id: 2, title: "Post 2", body: "Body of post 2" },
        { id: 3, title: "Post 3", body: "Body of post 3" },
      ];

      resolve(userPosts);
    }, 2000);
  });
}

function getUserComments(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userComments = [
        { id: 1, postId: 1, text: "Comment 1 for post 1" },
        { id: 2, postId: 1, text: "Comment 2 for post 1" },
        { id: 3, postId: 2, text: "Comment 1 for post 2" },
        { id: 4, postId: 2, text: "Comment 2 for post 2" },
        { id: 5, postId: 3, text: "Comment 1 for post 3" },
      ];
      resolve(userComments);
    }, 3000);
  });
}

function getUserReactions(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userReactions = [
        { id: 1, postId: 1, text: "Reaction 1 for post 1" },
        { id: 2, postId: 1, text: "Reaction 2 for post 1" },
        { id: 3, postId: 2, text: "Reaction 1 for post 2" },
        { id: 4, postId: 2, text: "Reaction 2 for post 2" },
        { id: 5, postId: 3, text: "Reaction 1 for post 3" },
      ];

      resolve(userReactions);
    }, 4000);
  });
}

const userId = 123;

getUserData(userId)
  .then((userData) => {
    console.log("user Data: ", userData);
    return getUserPosts(userId);
  })
  .then((userPosts) => {
    console.log("user posts: ", userPosts);
    return getUserComments(userId);
  })
  .then((userComments) => {
    console.log("user comments: ", userComments);
    return getUserReactions(userId);
  })
  .then((userReactions) => {
    console.log("user Reactions: ", userReactions);
  });





  