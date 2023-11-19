import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Project from './components/Project.jsx'
// import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      // {
      //   path: '/About',
      //   element: <About />,
      // },
      {
        path: '/Project',
        element: <Project />,
      },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
