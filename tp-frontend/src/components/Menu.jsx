import { useAuth } from "../context/AuthContext";
import "../css/Menu.css";

export const Menu = () => {
    const { rol } = useAuth();

    return (
        <div className="list-group list-group-flush">
            {rol === 2 && (
                <>
                    <a className='list-group-item list-group-item-action text-start' href="/empleado">Resumen</a>
                    <a className='list-group-item list-group-item-action text-start' href="/empleado/ordenes">Órdenes de Servicio</a>
                    <a className='list-group-item list-group-item-action text-start' href="/empleado/ordenes/alta">Nueva Orden de Servicio</a>
                </>
            )}
            {rol === 1 && (
                <>
                    <a className='list-group-item list-group-item-action text-start' href="/admin">Resumen</a>
                    <a className='list-group-item list-group-item-action text-start' href="/admin/ordenes/alta">Nueva Orden de Servicio</a>
                    <a className='list-group-item list-group-item-action text-start' href="/admin/ordenes">Órdenes de Servicio</a>
                    <a className='list-group-item list-group-item-action text-start' href="/admin/sucursales">Sucursales</a>
                    <a className='list-group-item list-group-item-action text-start' href="/admin/empleados">Empleados</a>
                </>
            )}
        </div>
    );
};