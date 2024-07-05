import '../../css/OrdenInfo.css';
import { Menu } from '../../components/Menu';
//import ordenes from '../../DB/ordenes.json';

//const orden = ordenes.lista[0];

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
                            <h2><span className="badge text-bg-success">Entregado al Cliente</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Orden de Servicio</h5>
                                    <img className="icono" src={ `../../public/icons/editar.png` } alt="" />
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
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Producto</h5>
                                    <img className="icono" src={ `../../public/icons/editar.png` } alt="" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Tipo: Cafeteria</p>
                                    <p className="card-text">Marca: OSTER</p>
                                    <p className="card-text">Modelo: OS1234</p>
                                    <p className="card-text">Nro de Serie: 764858</p>
                                    <p className="card-text">Condicion del Producto: signos de uso</p>
                                    <p className="card-text">Accesorios Incluidos: ninguno</p>
                                    <p className="card-text">Defecto Declarado: no enciende</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Cliente</h5>
                                    <img className="icono" src={ `../../public/icons/editar.png` } alt="" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Nombre: Juan</p>
                                    <p className="card-text">Apellido: Perez</p>
                                    <p className="card-text">DNI: 2143657</p>
                                    <p className="card-text">Localidad: Lanus</p>
                                    <p className="card-text">Direccion: San Martin 345</p>
                                    <p className="card-text">Telefono: 011-2345-5678</p>
                                    <p className="card-text">Correo Electronico: juan.perez@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Reparacion</h5>
                                    <img className="icono" src={ `../../public/icons/editar.png` } alt="" />
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <p className="card-text">Precio Final: $15.000</p>
                                            <p className="card-text">Trabajo Realizado: Cambio de Placa principal</p>
                                        </div>
                                            <div className="row mt-4 mb-2">
                                                <div className="col-8"><h5>Pedidos</h5></div>
                                                <div className="col"><a href="#" className="btn btn-primary">Nuevo</a></div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Codigo</th>
                                                                <th scope="col">Descripcion</th>
                                                                <th scope="col">Cantidad</th>
                                                                <th scope="col">Estado</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>REP789</td>
                                                                <td>placa principal cafetera</td>
                                                                <td>1</td>
                                                                <td>Despachado<a href="#" className="btn btn-primary">Recibir</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>REP733</td>
                                                                <td>cable cafetera</td>
                                                                <td>1</td>
                                                                <td>Recibido</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Tickets</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Descripcion</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>19/09/2024 a las 12:45</td>
                                                <td>Consulta tecnica sobre placa</td>
                                                <td><a href="#" className="btn btn-primary">Ver Respuesta</a></td>
                                            </tr>
                                            <tr>
                                                <td>20/09/2024 a las 17:25</td>
                                                <td>Problema con nro de serie</td>
                                                <td>Pendiente</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Eventos</h5>
                                    <a href="#" className="btn btn-primary">Agregar Nuevo</a>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Accion</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Observaciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Orden Creada</td>
                                                <td>19/09/2024 a las 12:45</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Equipo Revisado</td>
                                                <td>20/09/2024 a las 12:45</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Pedido de Repuesto</td>
                                                <td>20/09/2024 a las 14:56</td>
                                                <td>Pedido de repuesto REP789</td>
                                            </tr>
                                            <tr>
                                                <td>Entregado a Cliente</td>
                                                <td>22/09/2024 a las 10:46</td>
                                                <td>Precio abonado $15000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}