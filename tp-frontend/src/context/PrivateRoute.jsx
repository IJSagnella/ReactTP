import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect } from "react";

const PrivateRoute = ({ rolRequerido }) => {
    const { logueado, rol } = useAuth();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        // Este useEffect asegura que estamos esperando a que logueado tenga un valor definitivo
        if (logueado !== undefined) {
            setCargando(false);
        }
    }, [logueado]);

    if (cargando) {
        return <div>Cargando...</div>; // Mostrar loading mientras validas el estado de logueo
    }

    if (!logueado) {
        return <Navigate to="/login" />; // Si no está logueado, redirigir al login
    }

    // Verificar si el rol del usuario coincide con el rol requerido
    if (rolRequerido && rol !== rolRequerido) {
        return <Navigate to={rol === 1 ? "/admin" : "/empleado"} />;
    }

    return <Outlet />; // Si todo está bien, mostrar el componente hijo
};

export default PrivateRoute;