import '../css/Menu.css';

export const Menu = () => {

    return(
        <div className="list-group list-group-flush">
            <a className='list-group-item list-group-item-action text-start' href="#">Resumen</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Ordenes de Servicio</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Pedidos</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Envios</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Sucursales</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Empleados</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Productos</a>
            <a className='list-group-item list-group-item-action text-start' href="#">Repuestos / Stock</a>
        </div>
    )
}