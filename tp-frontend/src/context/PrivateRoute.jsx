import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect } from "react";

const PrivateRoute = ({ rolRequerido }) => {
    const { logueado, rol } = useAuth();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (logueado !== undefined) {
            setCargando(false);
        }
    }, [logueado]);

    if (cargando) {
        return <div>Cargando...</div>; // Muestra un loading en lo que se valida la sesión
    }

    if (!logueado) {
        return <Navigate to="/login" />;
    }

    if (rolRequerido && rol !== rolRequerido) {
        return <Navigate to={rol === 1 ? "/admin" : "/empleado"} />;
    }

    return <Outlet />;
};

export default PrivateRoute;