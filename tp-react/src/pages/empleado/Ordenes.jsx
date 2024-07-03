import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardOrden } from '../../components/CardOrden';

export const Ordenes = () => {
    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <h1>Ordenes de Trabajo</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <CardOrden />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}