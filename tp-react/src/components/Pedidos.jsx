import '../css/Pedidos.css';

export const Pedidos = () => {
    return(
        <>
        <div className="row d-flex justify-content-center card carta-pedido">
            <div className="card-body">
                <h5 className="card-title">Codigo</h5>
                <p className="card-text">15467845645646-01</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">AW-12</li>
                <li className="list-group-item">Buenos Aires</li>
                <li className="list-group-item">Capital Federal</li>
                <li className="list-group-item">Av. Villareal 1858</li>
                <li className="list-group-item">pedidos@gmail.com</li>
                <li className="list-group-item">011-4444-1234</li>
                <li className="list-group-item">16:00 a 18:00</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Ver pedido</a>
                <a href="#" className="card-link">Consultas</a>
            </div>
        </div>
        </>
    )
}