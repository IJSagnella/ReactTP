import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component }) => {
    const { logueado } = useAuth();

    return logueado ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;