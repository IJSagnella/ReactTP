import '../css/Card.css';

export const CardOrden = () => {

    return(
        <div className='card border-left-naranja shadow h-100 py-2'>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className='col mr-2'>
                        <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Orden de Trabajo
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        Nro de Orden
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        Estado
                        </div>
                    </div>
                    <div className="col">
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Producto
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            TV PHILIPS 32PHL5678
                        </div>
                    </div>
                    <div className="col">
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Sucursal
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Teleservice Lomas
                        </div>
                    </div>
                    <div className="col">
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Cliente
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Ignacio Sagnella
                        </div>
                    </div>
                    <div className="col">
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Fecha de Creacion
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            19/08/2024
                        </div>
                    </div>
                    <div className="col">
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            Ultima Modificacion
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                            20/08/2024
                        </div>
                    </div>
                    <div className="col">
                        Botones
                    </div>
                </div>
            </div>
        </div>
    )
}