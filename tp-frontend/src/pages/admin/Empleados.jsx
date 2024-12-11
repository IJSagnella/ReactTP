import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import { useFetch } from '../../hooks/useFetch';

export const Empleados = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombre"},
        {"label": "Apellido", "db": "apellido"},
        {"label": "Rol", "db": "id_rol"},
        {"label": "Sucursal", "db": "id_sucursal"},
        {"label": "Fecha de Alta", "db": "f_creacion"},
        {"label": "Correo Electronico", "db": "email"},
        {"label": "Teléfono", "db": "telefono"},
        ];

    const { data, loading } = useFetch("http://localhost:8888/empleados");    

    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <h1>Empleados</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a href="/admin/empleados/alta" className="btn btn-primary" role="button">Nuevo Empleado</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tabla columnas={columnas} lista={data} carga={ loading }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}