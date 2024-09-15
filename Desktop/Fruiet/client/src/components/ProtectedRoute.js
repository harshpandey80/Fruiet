import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        alert("Please login");
        // Redirect to the login page if the user is not authenticated
        return <Navigate to="/login" />;
    }

    // If authenticated, allow access to the protected page
    return children;
};

export default ProtectedRoute;
