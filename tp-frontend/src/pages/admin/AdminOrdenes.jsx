import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardOrden } from '../../components/CardOrden';
import { useFetch } from '../../hooks/useFetch';
import ordenes from '../../DB/ordenes.json';

export const AdminOrdenes = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombre_cliente"},
        {"label": "Apellido", "db": "apellido_cliente"},
        {"label": "Rol", "db": "id_rol"},
        {"label": "Sucursal", "db": "id_sucursal"},
        {"label": "Fecha de Alta", "db": "f_creacion"},
        {"label": "Correo Electronico", "db": "email"},
        {"label": "Teléfono", "db": "telefono"},
        ];

    const { data, loading } = useFetch("http://localhost:8888/ordenes");   
    console.log(data);

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
                              loading && <div className="row">Cargando...</div> 
                            }
                            { 
                                data?.map( (e, i) =>{
                                    return (
                                        <div className="row" key={i}>
                                            <CardOrden key={i} numero={e.id} estado={e.id_estado} producto={e.producto} sucursal={e.id_sucursal} nombre={e.nombre_cliente} apellido={e.apellido_cliente} creacion={e.f_creacion} />
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