import '../css/inicio.css';

export const Inicio = () => {
    return(
        <div>
            <div id="divisor-navegador">
                <div className="row" id="row-divisor">
                    <a className="col-sm">Productos</a>
                    <a className="col-sm">Servicios y Soporte</a>
                    <a className="col-sm">Recetas</a>
                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="src/assets/carrusel-img-1.jpg" alt="Primera Imagen"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="src/assets/carrusel-img-2.jpg" alt="Segunda Imagen"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="src/assets/carrusel-img-3.jpg" alt="Tercero Imagen"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
            <div id="divisor-promocion">
                <div className="row" id="row-divisor">
                    <div className="col-sm">
                        <div>COMPRA DIRECTA Y SEGURA</div>
                        <div>Texto de ejemplo</div>
                    </div>
                    <div className="col-sm">
                        <div>PROMOCIONES TELESERVICIO</div>
                        <div>Texto de ejemplo</div>
                    </div>
                    <div className="col-sm">
                        <div>GARANTÍA DE 24 MESES</div>
                        <div>Texto de ejemplo</div>
                    </div>
                </div>
            </div>
            <h1 className="d-flex justify-content-center p-5">Nuestros Servicios!</h1>
            <div className="d-flex bd-highlight">
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/envios-img-1.jpg" className="rounded-circle" id="img-redonda" alt="1" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/envios-img-2.jpg" className="rounded-circle" id="img-redonda" alt="2" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/envios-img-3.jpg" className="rounded-circle" id="img-redonda" alt="3" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/envios-img-4.jpg" className="rounded-circle" id="img-redonda" alt="4" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/envios-img-5.jpg" className="rounded-circle" id="img-redonda" alt="5" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}