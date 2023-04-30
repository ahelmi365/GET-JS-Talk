// callback hell is a situation where you have a lot of nested callbacks
// callback hell example:

setTimeout(() => {
  console.log("start the callback hell"); 
  setTimeout(() => {
    console.log("first callback");
    setTimeout(() => {
      console.log("second callback");
      setTimeout(() => {
        console.log("third callback");
        setTimeout(() => {
          console.log("fourth callback");
          setTimeout(() => {
            console.log("fifth callback");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  console.log("End the callback hell");
}, 1000);






// =======================================================================

// Asynchronous function to retrieve user data from a remote server
function getUserData(userId, callback) {
  setTimeout(() => {
    const userData = { id: userId, name: "John Doe", age: 30 };
    callback(userData);
  }, 1000);
}



// Asynchronous function to retrieve user posts from a remote server
function getUserPosts(userId, callback) {
  setTimeout(() => {
    const userPosts = [
      { id: 1, title: "Post 1", body: "Body of post 1" },
      { id: 2, title: "Post 2", body: "Body of post 2" },
      { id: 3, title: "Post 3", body: "Body of post 3" },
    ];
    callback(userPosts);
  }, 2000);
}

// Asynchronous function to retrieve user comments from a remote server
function getUserComments(userId, callback) {
  setTimeout(() => {
    const userComments = [
      { id: 1, postId: 1, text: "Comment 1 for post 1" },
      { id: 2, postId: 1, text: "Comment 2 for post 1" },
      { id: 3, postId: 2, text: "Comment 1 for post 2" },
      { id: 4, postId: 2, text: "Comment 2 for post 2" },
      { id: 5, postId: 3, text: "Comment 1 for post 3" },
    ];
    callback(userComments);
  }, 3000);
}

// Asunchronous function to retrieve user reactions from a remote server
function getUserReactions(userId, callback) {
  setTimeout(() => {
    const userReactions = [
      { id: 1, postId: 1, text: "Reaction 1 for post 1" },
      { id: 2, postId: 1, text: "Reaction 2 for post 1" },
      { id: 3, postId: 2, text: "Reaction 1 for post 2" },
      { id: 4, postId: 2, text: "Reaction 2 for post 2" },
      { id: 5, postId: 3, text: "Reaction 1 for post 3" },
    ];
    callback(userReactions);
  }, 4000);
}

// Retrieve user data, posts, and comments and log them to the console
const userId = 123;

getUserData(userId, (userData) => {
  console.log("User Data: ", userData);

  getUserPosts(userId, (userPosts) => {
    console.log("User Posts: ", userPosts);

    getUserComments(userId, (userComments) => {
      console.log("User Comments: ", userComments);

      getUserReactions(userId, (userReactions) => {
        console.log("User Reactions: ", userReactions);
      });
    });
  });
});
