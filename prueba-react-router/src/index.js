import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Root from './pages/Root';
import Users from './pages/Users';
import User from './pages/User';
import Contact from './pages/Contact';
import About from './pages/About';
import ErrorBoundary from './pages/Error';

/* function getUsernames(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  console.log(users.filter((user) => user.username === username));
  return users.filter((user) => user.username === username);
} */

function setUsername(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let newUser = new Object();
  newUser.username = username;
  newUser.id = users.length + 1;
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
}

function findOrSetUsername(username) {
  if (username !== '') {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.filter((user) => user.username === username);
    return user.length >= 1 ? user[0] : setUsername(username);
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/users"
        element={<Users />}
        loader={() => {
          const users = JSON.parse(localStorage.getItem('users')) || [];
          return users;
        }}
        action={async ({ request, params }) => {
          let formData = await request.formData();
          let username = formData.get('username');
          if (username === '') {
            return;
          }
          params = findOrSetUsername(username);
          return redirect(`/users/${params.id}`);
        }}
        errorElement={<ErrorBoundary />}>
        <Route path=":id" element={<User />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
