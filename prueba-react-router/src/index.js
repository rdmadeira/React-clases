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

/* function getUsernames(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  console.log(users.filter((user) => user.username === username));
  return users.filter((user) => user.username === username);
} */

function setUsername(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let newUser = new Object();
  newUser.username = username;
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser.username;
}

function findOrSetUsername(username) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let user = users.filter((user) => user.username === username);
  console.log(user);
  return user.length >= 1 ? username : setUsername(username);
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
          findOrSetUsername(username);
          params.username = username;
          return redirect(`/users/${params.username}`);
        }}>
        <Route
          path=":username"
          element={<User />}
          loader={({ params }) => {
            return params.username;
          }}
        />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
