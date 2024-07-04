import '../css/Menu.css';

export const Menu = () => {

    return(
        <div className="list-group list-group-flush">
            <a className='list-group-item list-group-item-action text-start' href="/admin">Resumen</a>
            <a className='list-group-item list-group-item-action text-start' href="/empleado">Resumen</a>
            <a className='list-group-item list-group-item-action text-start' href="/empleado/ordenes">Ordenes de Servicio</a>
            <a className='list-group-item list-group-item-action text-start' href="/empleado/pedidos">Pedidos</a>
            <a className='list-group-item list-group-item-action text-start' href="/empleado/envios">Envios</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/sucursales">Sucursales</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/empleados">Empleados</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/productos">Productos</a>
            <a className='list-group-item list-group-item-action text-start' href="/admin/repuestos">Repuestos / Stock</a>
        </div>
    )
}