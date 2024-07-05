import '../css/Consulta.css';
import { Pedidos } from '../components/Pedidos';

export const Consulta = () => {
    
    return(
        <>
    <div className="container mt-4"> 
        <div className="row d-flex justify-content-center"> 
            <div className="col-md-9"> 
                <div className="card p-4 mt-3"> 
                    <h3 className="heading mt-5 text-center">SEGUI EL ESTADO DE TU PEDIDO</h3> 
                    <p className="text-center">Ingresa el codigo de seguimiento que llego a tu correo</p>
                    <div className="d-flex justify-content-center px-5"> 
                        <div className="search"> 
                            <input type="text" className="search-input" placeholder="1XXXXXXXXXXX-01" name=""/> 
                            <a href="#" className="search-icon">Buscar</a> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        <Pedidos/>
    </div>
    </>
    )
}