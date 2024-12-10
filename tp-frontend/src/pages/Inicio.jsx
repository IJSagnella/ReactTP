import '../css/Inicio.css';
export const Inicio = () => {

    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="src/assets/carrusel-img-1.jpg" alt="Primera Imagen"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="src/assets/televisores-img-1.jpg" alt="Segunda Imagen"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="src/assets/servicio-tecnico-2.jpg" alt="Tercero Imagen"/>
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
                        <div>ATENCIÓN 24/7 </div>
                        <div>Soporte Técnico</div>
                    </div>
                    <div className="col-sm">
                        <div>AGENTES OFICIALES DE PHILIPS</div>
                        <div>Repuestos y Accesorios</div>
                    </div>
                    <div className="col-sm">
                        <div>GARANTÍA DE 24 MESES</div>
                        <div>Confiabilidad en sus productos</div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="w-100 shadow" src="src/assets/servicio-tecnico-img-3.jpg" />
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5 mt-4">
                            <h1 className="display-4">Bienvenido a Teleservice</h1>
                            <p className="lead">Somo un servicio técnico electronico, brindamos una mayor comodidad y puntualidad a nuestros clientes, solucionando cualquier desperfecto técnico, ya sea dentro o fuera de la garantiá.
                                Contamos con una alta gama de marcas y reparamos desde electrodomesticos, televisores hasta accesorios!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="d-flex justify-content-center p-5">Nuestros Servicios - Reparaciones!</h1>
            <div className="d-flex bd-highlight">
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/batidoras-img-3.png" className="rounded-circle" id="img-redonda" alt="1" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Reparamos batidoras, procesadores, aspiradpras. </p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/licuadoras-img-2.png" className="rounded-circle" id="img-redonda" alt="2" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Reparamos licuadoras, mixes, microondas, cafeteras y pavas </p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/T_teleservice_logo.png" className="rounded-circle" id="img-redonda" alt="3" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Vendemos Acesorios y repuestos originales directo de fabtica </p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/celulares-img-4.jpg" className="rounded-circle" id="img-redonda" alt="4" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Reparamos distintas marcas de celulares y camaras</p>
                </div>
                <div className="d-flex flex-column align-items-center p-2 flex-fill bd-highlight">
                    <img src="src/assets/parlantes-img-5.jpg" className="rounded-circle" id="img-redonda" alt="5" />
                    <p className="text-center badge text-wrap mt-3" id="texto-imagen">Reparamos equipos de musica, televisores, controles de todas las marcas</p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                <div className="col-lg-6">
                        <div className="p-5 mt-4">
                            <h1 className="display-4">A tu servicio!</h1>
                            <p className="lead">Nos aseguramos de brindarle máximas garantías y confianza ante sus productos. Trabajamos con las mejores marcas y nos aseguramos que el cliente quede conforme con nuestro servicio.
                            Con garantía o fuera de garatía y de cualquier marca. Una vez que el técnico revise el aparato le comunicamos el desperfecto y se dirige a fábrica para la reparación o de ser fuera de garantía le pasamos el presupuesto </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-100 shadow" src="src/assets/envios-img-2.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}