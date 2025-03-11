import '../../css/OrdenInfo.css';
import { Menu } from '../../components/Menu';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import { BotonAccionesOrden } from "../../components/BotonAccionesOrden";
import { useAuth } from "../../context/AuthContext"; // Para obtener el token

export const OrdenInfo = () => {
    const { id } = useParams();
    const url = id ? `http://localhost:8888/ordenes/${id}` : null;
    const { data, loading } = useFetch(url);

    const { token } = useAuth(); // Obtener el token desde el contexto

    if (id === null) return <p>No se encontró la orden</p>;
    if (loading) return <p>Cargando...</p>;
    if (!data) return <p>Error al cargar la orden</p>;

    console.log("Datos de la API:", data);
    console.log("Componente montado");

    const cambiarEstadoOrden = async (nuevoEstado) => {
        try {
            const response = await fetch(`http://localhost:8888/ordenes/${data.id}/estado`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ id_estado: nuevoEstado }),
            });
    
            if (!response.ok) {
                throw new Error("Error al actualizar el estado");
            }
    
            alert("Estado actualizado correctamente");
            window.location.reload();
        } catch (error) {
            console.error("Error al cambiar el estado:", error);
        }
    };

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
                                <div className="col d-flex flex-column justify-content-center align-items-center">
                                <h2>
                                    <span
                                        className={`badge ${
                                            // Lógica para cambiar el color de la badge dependiendo del id_estado
                                            (data.id_estado === 6 || data.id_estado === 7) ? "text-bg-success" : 
                                            (data.id_estado === 3 || data.id_estado === 4 || data.id_estado === 5) ? "text-bg-warning" : 
                                            data.id_estado === 8 ? "text-bg-danger" :
                                            "text-bg-secondary" 
                                        }`}
                                    >
                                        {data.estado_nombre}
                                    </span>
                                </h2>
                                    <BotonAccionesOrden estadoActual={data.id_estado} onChangeEstado={cambiarEstadoOrden} />
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
                                            <p className="card-text">Precio de reparacion: ${data.precio}</p>
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