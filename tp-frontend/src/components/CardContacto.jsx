import React from 'react';

export const CardContacto = ({id, nombre, direccion, localidad, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado}) => {

    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(!showResults);

    return (
        <>
        <div key={id} className="w-100 p-3 vh-90 container container-contacto">
            <div className="lista-informacion">
                <ul className="list-group">
                    <li href="#" className="list-group-item flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{ nombre }</h5>
                        <small>Servicio</small>
                        </div>
                        <div className="texto-informativo">
                            <p className="mb-1">{ direccion }, { localidad }.</p>
                            <p className="mb-1">{ email }  |  { telefono }</p>
                            <a className="mt-3 mb-2 btn-detalle" id="list-home-list" data-toggle="list" onClick={onClick}>Mas detalle</a>
                        </div>
                        { showResults ?
                        <div className="tab-pane" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <ul className="list-group">
                                <li className="list-group-item">Domingo Cerrado</li>
                                <li className="list-group-item">Lunes { lunes }</li>
                                <li className="list-group-item">Martes { martes }</li>
                                <li className="list-group-item">Miercoles { miercoles }</li>
                                <li className="list-group-item">Jueves { jueves }</li>
                                <li className="list-group-item">Viernes { viernes }</li>
                                <li className="list-group-item">Sabado { sabado }</li>
                            </ul>
                        </div>
                        : null}
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};