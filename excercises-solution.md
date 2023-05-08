### Excercise 1

```js
const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Jack", lastName: "Jill" },
  { id: 4, firstName: "James", lastName: "Bond" },
  { id: 5, firstName: "Jane", lastName: "Doe" },
  { id: 6, firstName: "John", lastName: "Smith" },
  { id: 7, firstName: "Jack", lastName: "Jill" },
  { id: 8, firstName: "James", lastName: "Bond" },
  { id: 9, firstName: "Jane", lastName: "Doe" },
  { id: 10, firstName: "John", lastName: "Smith" },
  { id: 11, firstName: "Jack", lastName: "Jill" },
  { id: 12, firstName: "James", lastName: "Bond" },
  { id: 13, firstName: "Jane", lastName: "Doe" },
  { id: 14, firstName: "John", lastName: "Smith" },
  { id: 15, firstName: "Jack", lastName: "Jill" },
  { id: 16, firstName: "James", lastName: "Bond" },
  { id: 17, firstName: "Jane", lastName: "Doe" },
  { id: 18, firstName: "John", lastName: "Smith" },
  { id: 19, firstName: "Jack", lastName: "Jill" },
  { id: 20, firstName: "James", lastName: "Bond" },
  { id: 21, firstName: "Jane", lastName: "Doe" },
  { id: 22, firstName: "John", lastName: "Smith" },
  { id: 23, firstName: "Jack", lastName: "Jill" },
  { id: 24, firstName: "James", lastName: "Bond" },
  { id: 25, firstName: "Jane", lastName: "Doe" },
  { id: 26, firstName: "John", lastName: "Smith" },
  { id: 27, firstName: "Jack", lastName: "Jill" },
  { id: 28, firstName: "James", lastName: "Bond" },
  { id: 29, firstName: "Jane", lastName: "Doe" },
];
```

- Create a function that takes an array of `users` and returns an array of `users` with `id`, `firstName`, `lastNam` and `fullName` without using the map function
- solution:
```js
// simple solution:
function getUsers(users) {
  const newUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const newUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`,
    };
    newUsers.push(newUser);
  }
  return newUsers;
}
// using spread operator:
function getUsers(users) {
  const newUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const newUser = {
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
    };
    newUsers.push(newUser);
  }
  return newUsers;
}
// using map function:
function getUsers(users) {
  return users.map((user) => {
    return {
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
    };
  });
}
```
### Excercise 2

- Create a function called to take an array of users and id and return the user with the given id.
- solution:
```js
function getUserById(users, id) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.id === id) {
      return user;
    }
  }
  return null;
}
```

- create a function to take an array of users and a charachter and return new array of users with the first name starts with the given charachter.
- solution:
```js
function getUsersByChar(users, char) {
  const newUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.firstName[0].toLowerCase() === char.toLowerCase()) {
      newUsers.push(user);
    }
  }
  return newUsers;
}
```
