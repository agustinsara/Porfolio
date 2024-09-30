import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/Login" />;
  };
  
  export default ProtectedRoute;