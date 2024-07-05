import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Empleado = () => {
    const { logout } = useAuth();

    return (
        <div className="container">
            <h1>Bienvenido, Empleado</h1>
            <p>Esta es la página del empleado. Aquí puedes acceder a tus tareas y recursos asignados.</p>
            <button className="btn btn-primary" onClick={logout}>Cerrar Sesión</button>
        </div>
    );
}
