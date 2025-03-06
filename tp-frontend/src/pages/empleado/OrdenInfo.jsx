import '../../css/OrdenInfo.css';
import { Menu } from '../../components/Menu';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from "react-router-dom";

export const OrdenInfo = () => {
    const { id } = useParams();
    const url = id ? `http://localhost:8888/ordenes/${id}` : null;
    const { data, loading } = useFetch(url);

    if (!id) return <p>No se encontró la orden</p>;
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
                    {data.map((orden) => (
                        <div key={orden.id}>
                            <div className="row justify-content-around mt-3 mb-3">
                                <div className="col">
                                    <h1>Orden de Servicio {orden.id}</h1>
                                </div>
                                <div className="col">
                                    <h2><span className="badge text-bg-success">{orden.id_estado}</span></h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>Orden de Servicio</h5>
                                            <img className="icono" src={`/icons/editar.png`} alt="Editar" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Nro. de Orden: {orden.id}</p>
                                            <p className="card-text">Estado: {orden.id_estado}</p>
                                            <p className="card-text">Sucursal: {orden.id_sucursal}</p>
                                            <p className="card-text">Fecha de Creación: {orden.f_creacion}</p>
                                            <a href="#" className="btn btn-primary">Acciones</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>Producto</h5>
                                            <img className="icono" src={`/icons/editar.png`} alt="Editar" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Producto: {orden.producto}</p>
                                            <p className="card-text">Marca: {orden.marca}</p>
                                            <p className="card-text">Nro. de Serie: {orden.serie}</p>
                                            <p className="card-text">Condición: {orden.condicion}</p>
                                            <p className="card-text">Accesorios: {orden.accesorios}</p>
                                            <p className="card-text">Defecto: {orden.defecto}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>Cliente</h5>
                                            <img className="icono" src={`/icons/editar.png`} alt="Editar" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Nombre: {orden.nombre_cliente}</p>
                                            <p className="card-text">Apellido: {orden.apellido_cliente}</p>
                                            <p className="card-text">DNI: {orden.dni_cliente}</p>
                                            <p className="card-text">Localidad: {orden.localidad_cliente}</p>
                                            <p className="card-text">Dirección: {orden.direccion_cliente}</p>
                                            <p className="card-text">Teléfono: {orden.telefono_cliente}</p>
                                            <p className="card-text">Correo Electrónico: {orden.email_cliente}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};