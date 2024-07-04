import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardOrden } from '../../components/CardOrden';
import ordenes from '../../DB/ordenes.json';

const orden = ordenes.lista[0];

export const OrdenInfo = () => {

    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row justify-content-around mt-3 mb-3">
                        <div className="col">
                            <h1>Orden de Servicio 001</h1>
                        </div>
                        <div className="col">
                            <h1>Entregado al Cliente</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Orden de Servicio
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Producto
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Cliente
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Reparacion
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Eventos
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    Tickets
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nro. de Orden: 001</p>
                                    <p className="card-text">Estado: Entregado al Cliente</p>
                                    <p className="card-text">Sucursal: Teleservice Lomas</p>
                                    <p className="card-text">Fecha de Creacion: 19/09/2024 a las 12:34hs</p>
                                    <p className="card-text">Ultima Modificacion: 20/09/2024 a las 17:37hs</p>
                                    <a href="#" className="btn btn-primary">Acciones</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}