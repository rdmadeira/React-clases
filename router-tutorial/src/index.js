import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as actionRoot,
} from './routes/Root.jsx';
import ErrorPage from './error-page.jsx';
import Contact, { loader as contactLoader } from './routes/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: actionRoot,
    children: [
      // Para que el component Contact si inserte adentro del root y no en una pagina nueva
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
