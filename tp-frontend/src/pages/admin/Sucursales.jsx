import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import { useFetch } from '../../hooks/useFetch';

export const Sucursales = () => {

    const columnas = [
        {"label": "Nombre", "db": "nombre"},
        {"label": "Codigo", "db": "codigo"},
        {"label": "Provincia", "db": "provincia"},
        {"label": "Localidad", "db": "localidad"},
        {"label": "Direccion", "db": "direccion"},
        {"label": "Correo Electronico", "db": "email"},
        {"label": "Teléfono", "db": "telefono"},
        ];

    const { data, loading } = useFetch("http://localhost:8888/sucursales");    

    console.log(data);
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
                            <Tabla columnas={columnas} lista={data} carga={loading}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}