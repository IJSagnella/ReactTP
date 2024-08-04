import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import sucursales from '../../DB/sucursales.json';

export const Envios = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombre"},
        {"label": "Codigo", "db": "codigo"},
        {"label": "Provincia", "db": "provincia"},
        {"label": "Localidad", "db": "localidad"},
        {"label": "Direccion", "db": "direccion"},
        {"label": "Correo Electronico", "db": "email"},
        {"label": "Teléfono", "db": "telefono"},
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
                            <h1>Envios</h1>
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