import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardOrden } from '../../components/CardOrden';
import { useFetch } from '../../hooks/useFetch';


export const Ordenes = () => {

    const { data, loading } = useFetch("http://localhost:8888/ordenes");   
    console.log(data);

    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row my-5">
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
                                            <CardOrden key={i} numero={e.id} id_estado={e.id_estado} estado={e.estado} producto={e.producto} sucursal={e.sucursal} nombre={e.nombre_cliente} apellido={e.apellido_cliente} creacion={e.f_creacion} url={"/admin/ordenes/"} />
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