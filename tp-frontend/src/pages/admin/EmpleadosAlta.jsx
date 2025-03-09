import { Menu } from '../../components/Menu';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const EmpleadosAlta = () => {
    const { token } = useAuth();  // Obtener el token desde el contexto de autenticación

    const { data } = useFetch("http://localhost:8888/sucursales"); 

    // Estado para cada campo
  const [sucursal, setSucursal] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes hacer el envío del formulario, por ejemplo a tu API
    const empleadoData = {
      sucursal,
      nombre,
      apellido,
      dni,
      email,
      password,
      telefono,
      rol,
    };

    try {
        // Enviar la solicitud POST a tu API
        const response = await fetch('http://localhost:8888/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',  // Indicamos que el cuerpo es JSON
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(empleadoData), // Convertimos los datos a JSON
        });
    
        // Verificamos si la respuesta es exitosa
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);  // Mostrar mensaje de éxito
          alert('Empleado registrado correctamente');
        } else {
          console.error('Error:', data.message);  // Mostrar error
          alert('Error al registrar empleado');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error al realizar la solicitud');
      }

    // Limpiar el formulario después de enviarlo
    setSucursal('');
    setNombre('');
    setApellido('');
    setDni('');
    setEmail('');
    setPassword('');
    setTelefono('');
    setRol('');
  };

  return (
    <div className='container-fluid min-vh-100'>
        <div className="row">
            <div className="col-2">
                <Menu />
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col">
                        <h1>Alta de Empleado</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container mt-5">
                            <form onSubmit={handleSubmit} className="container">
                                <div className="row mb-3 justify-content-start">
                                    <div className="col-4">
                                        <label htmlFor="sucursal" className="form-label">Sucursal</label>
                                        <select
                                            className="form-select"
                                            id="sucursal"
                                            value={sucursal}
                                            onChange={(e) => setSucursal(e.target.value)}
                                            required
                                        >
                                            <option value="">Seleccione una Sucursal</option>
                                            { 
                                            data?.map( (item, i) =>{
                                                return (<option key={i} value={item.id}> {item.nombre} </option>)
                                            })};
                                        </select>    
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="rol" className="form-label">Rol</label>
                                        <select
                                            className="form-select"
                                            id="rol"
                                            value={rol}
                                            onChange={(e) => setRol(e.target.value)}
                                            required
                                        >
                                            <option value="">Seleccione un Rol</option>
                                            <option value="2">Tecnico</option>
                                            <option value="1">Administrador</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
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
                                    <div className="col-4">
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
                                    <div className="col-4">
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
                                    <div className="col-4">
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
                                    <div className="col-4">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    </div>
                                    <div className="col-4">
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
                                <div className="row mt-3">
                                    <div className="col align-self-center">
                                       <button type="submit" className="btn btn-primary">Registrar Empleado</button>
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