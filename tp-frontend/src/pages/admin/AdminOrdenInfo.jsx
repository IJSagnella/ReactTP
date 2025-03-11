import '../../css/OrdenInfo.css';
import { Menu } from '../../components/Menu';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from "react-router-dom";

export const AdminOrdenInfo = () => {
    const { id } = useParams();
    const url = id ? `http://localhost:8888/ordenes/${id}` : null;
    const { data, loading } = useFetch(url);

    if (id === null) return <p>No se encontró la orden</p>;
    if (loading) return <p>Cargando...</p>;
    if (!data) return <p>Error al cargar la orden</p>;

    console.log("Datos de la API:", data);
    console.log("Componente montado");

    return (
        
        <div className="container-fluid min-vh-100">
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    {data && data.id && (
                        <div key={data.id}>
                            <div className="row justify-content-around mt-3 mb-3">
                                <div className="col text-start">
                                    <div className="row">
                                        <div className="col">
                                            <h1>Orden de Servicio {data.id}</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h4>Sucursal: {data.sucursal_nombre}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h4>Creacion: {data.f_creacion}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <h2><span className="badge text-bg-success">{data.estado_nombre}</span></h2>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>Producto</h5>
                                            <img className="icono" src={`/icons/editar.png`} alt="Editar" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Producto: {data.producto}</p>
                                            <p className="card-text">Marca: {data.marca}</p>
                                            <p className="card-text">Nro. de Serie: {data.serie}</p>
                                            <p className="card-text">Condición: {data.condicion}</p>
                                            <p className="card-text">Accesorios: {data.accesorios}</p>
                                            <p className="card-text">Defecto: {data.defecto}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>Cliente</h5>
                                            <img className="icono" src={`/icons/editar.png`} alt="Editar" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Nombre: {data.nombre_cliente}</p>
                                            <p className="card-text">Apellido: {data.apellido_cliente}</p>
                                            <p className="card-text">DNI: {data.dni_cliente}</p>
                                            <p className="card-text">Localidad: {data.localidad_cliente}</p>
                                            <p className="card-text">Dirección: {data.direccion_cliente}</p>
                                            <p className="card-text">Teléfono: {data.telefono_cliente}</p>
                                            <p className="card-text">Correo Electrónico: {data.email_cliente}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};