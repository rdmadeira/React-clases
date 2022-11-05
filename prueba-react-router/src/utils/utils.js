export function getUser(id) {
  const users = JSON.parse(localStorage.getItem('users') || []);
  let user = users.filter((item) => item.id === Number.parseInt(id));
  return user[0];
}

export function setUsername({ name, lastname, username, password }) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let newUser = new Object();
  newUser.name = name;
  newUser.lastname = lastname;
  newUser.username = username;
  newUser.password = password;
  newUser.id = users.length + 1;
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
}

export function findOrSetUsername(username) {
  if (username !== '') {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.filter((user) => user.username === username);
    return user.length >= 1 ? user[0] : setUsername(username);
  }
}
