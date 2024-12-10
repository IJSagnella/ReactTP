import '../../css/Admin.css';
import { Menu } from '../../components/Menu';
import { CardResumen } from '../../components/CardResumen';

export const Resumen = () => {
    return(
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <h1>Resumen</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <CardResumen titulo="Ordenes Activas" valor="11" icono="orden-activa" />
                        </div>
                        
                        <div className="col-md-6 mb-4">
                            <CardResumen titulo="Ordenes Completas" valor="20" icono="orden-completa" />
                        </div>
                        
                        <div className="col-md-6 mb-4">
                            <CardResumen titulo="Tiempo Promedio" valor="4" icono="tiempo" />
                        </div>

                        <div className="col-md-6 mb-4">
                            <CardResumen titulo="Tickets" valor="3" icono="ticket" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}