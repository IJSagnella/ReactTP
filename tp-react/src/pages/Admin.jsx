import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Admin = () => {
    const { logout } = useAuth();

    return (
        <div className="container">
            <h1>Bienvenido, Administrador</h1>
            <p>Esta es la página de administración. Aquí puedes gestionar los recursos y configuraciones del sistema.</p>
            <button className="btn btn-primary" onClick={logout}>Cerrar Sesión</button>
        </div>
    );
}



