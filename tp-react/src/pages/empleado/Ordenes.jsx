import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardOrden } from '../../components/CardOrden';
import ordenes from '../../DB/ordenes.json';

export const Ordenes = () => {

    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <h1>Ordenes de Servicio</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            { 
                                ordenes.lista.map( (e, i) =>{
                                    return (
                                        <div className="row" key={i}>
                                            <CardOrden key={i} numero={e.numero} estado={e.estado} producto={e.producto.modelo} sucursal={e.sucursal} cliente={e.cliente.nombre} creacion={e.creacion} modificacion={e.modificacion} />
                                        </div>
                                        )})
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}