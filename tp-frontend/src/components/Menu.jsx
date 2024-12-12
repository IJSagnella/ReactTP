import '../css/Menu.css';

export const Menu = () => {

    return(
        <div className="list-group list-group-flush">
            <a className='list-group-item list-group-item-action text-start' href="/empleado">Resumen</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin">Resumen</a>
            <a className='list-group-item list-group-item-action text-start' href="/empleado/ordenes">Ordenes de Servicio</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/ordenes">Ordenes de Servicio</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/tickets">Tickets</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/sucursales">Sucursales</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/empleados">Empleados</a>
        </div>
    )
}