import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import empleados from '../../DB/empleados.json';

export const Empleados = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombres"},
        {"label": "Apellido", "db": "apellidos"},
        {"label": "Rol", "db": "rol"},
        {"label": "Sucursal", "db": "sucursal"},
        {"label": "Fecha de Nacimiento", "db": "fecha_de_nacimiento"},
        {"label": "Domicilio", "db": "domicilio"},
        {"label": "Correo Electronico", "db": "mail"},
        {"label": "Teléfono", "db": "teléfono"},
        ];

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
                            <Tabla columnas={columnas} lista={empleados.lista} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}