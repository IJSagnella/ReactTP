import { Menu } from '../../components/Menu';
import { Tabla } from '../../components/Tabla';
import productos from '../../DB/productos.json';

export const Productos = () => {

    const columnas = [
        {"label": "Codigo", "db": "codigo"},
        {"label": "Descripsion", "db": "descripcion"},
        {"label": "Valor de Trabajo", "db": "valor"},
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
                            <h1>Productos / Categorias</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tabla columnas={columnas} lista={productos.lista} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}