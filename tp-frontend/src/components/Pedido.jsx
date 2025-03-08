import '../css/Pedido.css';

export const Pedido = ({numero_pedido, producto, estado, defecto, reparacion, sucursal}) => {
    return (
        <div className="row d-flex justify-content-center card carta-pedido">
            <div className="card-body">
                <h5 className="card-title">Nro. Pedido: {numero_pedido}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Producto: {producto}</li>
                <li className="list-group-item">Estado: {estado}</li>
                <li className="list-group-item">Defecto: {defecto}</li>
                <li className="list-group-item">Reparación: {reparacion}</li>
                <li className="list-group-item">Sucursal: {sucursal}</li>
            </ul>
        </div>
    );
};