import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './utils/ProtectedRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Abm from './components/abm';
import Login from './login/Login';

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='body'><Layout /></div>,
    },
    {
      path: "/abm",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Abm />
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: <Login setIsAuthenticated={setIsAuthenticated} />, 
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

reportWebVitals();
