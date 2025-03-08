import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ rolRequerido }) => {
    const { logueado, rol } = useAuth(); // Obtenemos el estado de autenticación

    if (!logueado) return <Navigate to="/login" />;
    if (rolRequerido && rol !== rolRequerido) return <Navigate to="/empleado" />; 

    return <Outlet />;
};

export default PrivateRoute;