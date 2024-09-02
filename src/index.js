import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from "../src/styles/styles.css";
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Abm from './components/abm';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='body'><Layout></Layout></div>,
    },
    {
      path:"/abm",
      element: <Abm></Abm>
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
