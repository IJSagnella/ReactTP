import '../css/Card.css';

export const CardOrden = ({ numero, estado, producto, sucursal, cliente, creacion, modificacion }) => {

    return(
        <div className="col mb-4">
    <div className='card border-left-naranja shadow h-100 py-2'>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className='col mr-2'>
                            <div className='h5 mb-3 font-weight-bold text-gray-800'>
                            Nro de Orden
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                            { numero }
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                            { estado }
                            </div>
                        </div>
                        <div className="col">
                            <div className='h5 mb-4 font-weight-bold text-gray-800'>
                                Producto
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                                { producto }
                            </div>
                        </div>
                        <div className="col">
                            <div className='h5 mb-4 font-weight-bold text-gray-800'>
                                Sucursal
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                                { sucursal }
                            </div>
                        </div>
                        <div className="col">
                            <div className='h5 mb-4 font-weight-bold text-gray-800'>
                                Cliente
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                                { cliente }
                            </div>
                        </div>
                        <div className="col">
                            <div className='h5 mb-4 font-weight-bold text-gray-800'>
                                Fecha de Creacion
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                                { creacion }
                            </div>
                        </div>
                        <div className="col">
                            <div className='h5 mb-4 font-weight-bold text-gray-800'>
                                Ultima Modificacion
                            </div>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                                { modificacion }
                            </div>
                        </div>
                        <div className="col">
                            <a className="btn btn-primary mb-3" href="/empleado/ordenes/1" role="button">Ver Orden</a>
                            <button className="btn btn-danger" type="button">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}