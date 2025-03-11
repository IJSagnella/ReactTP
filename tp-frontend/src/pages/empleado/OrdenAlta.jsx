import { Menu } from '../../components/Menu';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const OrdenAlta = () => {
    const { token, sucursal } = useAuth();  // Obtener el token desde el contexto de autenticación


    const { data: sucursales } = useFetch("http://localhost:8888/sucursales");

    const { data: categorias} = useFetch("http://localhost:8888/categorias");

    const provincias = [
        "Ciudad Autónoma de Buenos Aires",
        "Gran Buenos Aires",
        "Buenos Aires",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucumán"
      ];
    

    // Estado para cada campo
  const [categoria, setCategoria] = useState('');
  const [producto, setProducto] = useState('');
  const [condicion, setCondicion] = useState('');
  const [serie, setSerie] = useState('');
  const [defecto, setDefecto] = useState('');
  const [accesorios, setAccesorios] = useState('');
  const [marca, setMarca] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [provincia, setProvincia] = useState('');


  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes hacer el envío del formulario, por ejemplo a tu API
    const ordenData = {
        id_sucursal: sucursal,
        id_categoria: categoria,
        producto,
        marca,
        serie,
        condicion,
        accesorios,
        defecto,
        nombre_cliente: nombre,
        apellido_cliente: apellido,
        dni_cliente: dni,
        email_cliente: email,
        telefono_cliente: telefono,   
        direccion_cliente: direccion,
        localidad_cliente: localidad, 
        provincia_cliente: provincia
    };

    try {
        // Enviar la solicitud POST a tu API
        const response = await fetch('http://localhost:8888/ordenes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',  // Indicamos que el cuerpo es JSON
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(ordenData), // Convertimos los datos a JSON
        });
    
        // Verificamos si la respuesta es exitosa
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);  // Mostrar mensaje de éxito
          alert('Orden creada correctamente');
        } else {
          console.error('Error:', data.message);  // Mostrar error
          alert('Error al crear Orden');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error al realizar la solicitud');
      }

    // Limpiar el formulario después de enviarlo
    setCategoria('');
    setProducto('');
    setCondicion('');
    setSerie('');
    setDefecto('');
    setAccesorios('');
    setMarca('');
    setNombre('');
    setApellido('');
    setDni('');
    setEmail('');
    setTelefono('');
    setDireccion('');
    setLocalidad('');
    setProvincia('');
  };

  return (
    <div className='container-fluid min-vh-100'>
        <div className="row">
            <div className="col-2">
                <Menu />
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col mt-5">
                        <h1>Nueva Orden de Servicio</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container mt-5">
                            <form onSubmit={handleSubmit} className="container">
                                <div className="row mb-3 justify-content-start">
                                    <div className="col">
                                        <div className="row">
                                            <h2>Datos de Equipo</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="sucursal" className="form-label">Sucursal</label>
                                                
                                                {
                                                    sucursales?.map( (item, i) =>{
                                                    if (item.id == sucursal){
                                                        return (<input
                                                        key={i}
                                                        type="text"
                                                        className="form-control"
                                                        id="sucursal"
                                                        value={item.nombre}
                                                        disabled
                                                        />)
                                                    }    
                                                })}
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="categoria" className="form-label">Categoria</label>
                                                <select
                                                    className="form-select"
                                                    id="categoria"
                                                    value={categoria}
                                                    onChange={(e) => setCategoria(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Seleccione una Categoria</option>
                                                    { 
                                                    categorias?.map( (item, i) =>{
                                                        return (<option key={i} value={item.id}> {item.codigo} - {item.descripcion} </option>)
                                                    })};
                                                </select>    
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="producto" className="form-label">Producto</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="producto"
                                                value={producto}
                                                onChange={(e) => setProducto(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="marca" className="form-label">Marca</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="marca"
                                                value={marca}
                                                onChange={(e) => setMarca(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="serie" className="form-label">Serie</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="serie"
                                                value={serie}
                                                onChange={(e) => setSerie(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="defecto" className="form-label">Defecto</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="defecto"
                                                value={defecto}
                                                onChange={(e) => setDefecto(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="condicion" className="form-label">Condicion</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="condicion"
                                                value={condicion}
                                                onChange={(e) => setCondicion(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="accesorios" className="form-label">Accesorios</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="accesorios"
                                                value={accesorios}
                                                onChange={(e) => setAccesorios(e.target.value)}
                                                required
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <h2>Datos de Cliente</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nombre"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="apellido"
                                                    value={apellido}
                                                    onChange={(e) => setApellido(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="dni" className="form-label">DNI</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="dni"
                                                    value={dni}
                                                    onChange={(e) => setDni(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-6">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="provincia" className="form-label">Provincia</label>
                                                <select
                                                    className="form-select"
                                                    id="provincia"
                                                    value={provincia}
                                                    onChange={(e) => setProvincia(e.target.value)}
                                                    required
                                                >
                                                    {
                                                        provincias.map( (item, i) =>{
                                                            return (<option key={i} value={item}> {item} </option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-6">
                                            <label htmlFor="localidad" className="form-label">Localidad</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="localidad"
                                                value={localidad}
                                                onChange={(e) => setLocalidad(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                            <label htmlFor="direccion" className="form-label">Direccion</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="direccion"
                                                value={direccion}
                                                onChange={(e) => setDireccion(e.target.value)}
                                                required
                                            />
                                            </div>
                                            <div className="col-6">
                                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="telefono"
                                                value={telefono}
                                                onChange={(e) => setTelefono(e.target.value)}
                                                required
                                            />
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                </div>
                                <div className="row my-4">
                                    <div className="col align-self-center">
                                       <button type="submit" className="btn btn-primary">Crear Orden</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}