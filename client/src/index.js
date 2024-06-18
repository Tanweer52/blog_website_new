import React from 'react';
import ReactDOM from 'react-dom/client';
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import App from "./App.js";
import About from './pages/about/about';
import { ContextProvider } from '../src/context/Context';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const user = true;
const router = createBrowserRouter([
  {
    path: "/",

    element: <ContextProvider><App /></ContextProvider>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: user ? <Write /> : <Register />,
  },

  {
    path: "/settings",
    element: user ? <Settings /> : <Register />,
  },

  {
    path: "/post/:postId",
    element: <Single />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);



