import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import repuestos from '../../DB/repuestos.json';

export const Repuestos = () => {

    const columnas = [
        {"label": "Codigo", "db": "codigo"},
        {"label": "Descripcion", "db": "descripcion"},
        {"label": "Estado", "db": "estado"},
        {"label": "Precio", "db": "precio"},
        {"label": "Cantidad", "db": "cantidad"}
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
                            <h1>Repuestos / Stock</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tabla columnas={columnas} lista={repuestos.lista} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}