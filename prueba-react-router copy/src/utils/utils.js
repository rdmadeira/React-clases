export function getUser(id) {
  const users = JSON.parse(localStorage.getItem('users') || []);
  let user = users.filter((item) => item.id === Number.parseInt(id));
  return user[0];
}

function setUsername(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let newUser = new Object();
  newUser.username = username;
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
