import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import sucursales from '../../DB/sucursales.json';

export const Sucursales = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombre"},
        {"label": "Codigo", "db": "nombre"},
        {"label": "Provincia", "db": "nombre"},
        {"label": "Localidad", "db": "nombre"},
        {"label": "Direccion", "db": "nombre"},
        {"label": "Correo Electronico", "db": "nombre"},
        {"label": "Teléfono", "db": "nombre"},
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
                            <h1>Sucursales</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tabla columnas={columnas} lista={sucursales.lista} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}