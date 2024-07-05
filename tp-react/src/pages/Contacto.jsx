import '../css/Contacto.css';
import React from 'react'

export const Contacto = () => {

    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)

    const [showResults2, setShowResults2] = React.useState(false)
    const onClick2 = () => setShowResults2(!showResults2)

    const [showResults3, setShowResults3] = React.useState(false)
    const onClick3 = () => setShowResults3(!showResults3)
    
    return(
        <>
        <h1 className="pt-5">Centro de Servicios</h1>
    <div className="w-100 p-3 vh-90 container my-5 container-contacto">
        <div>
        <div className="lista-informacion">
            <ul className="list-group">
            <li href="#" className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Teleservice Sucural Quilmes</h5>
                <small>Servicio</small>
                </div>
                <div className="texto-informativo">
                    <p className="mb-1">Local Alberdi 296, Quilmes Centro.</p>
                    <p className="mb-1">teleservicequilmes@gmail.com  |  4253-9255</p>
                    <a className="mt-3 mb-2 btn-detalle" id="list-home-list" data-toggle="list" onClick={onClick}>Mas detalle</a>
                </div>
                { showResults ?
                <div className="tab-pane" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <ul className="list-group">
                        <li className="list-group-item">Domingo: Cerrado</li>
                        <li className="list-group-item">Lunes: Abierto</li>
                        <li className="list-group-item">Martes: Abierto</li>
                        <li className="list-group-item">Miercoles: Abierto</li>
                        <li className="list-group-item">Jueves: Cerrado</li>
                        <li className="list-group-item">Viernes: Abierto</li>
                        <li className="list-group-item">Sabado: Cerrado</li>
                    </ul>
                </div>
                : null}
            </li>
            <li href="#" className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Teleservice Sucursal Lomas de Zamora</h5>
                <small>Servicio</small>
                </div>
                <div className="texto-informativo">
                    <p className="mb-1">Fonrouge 410, Lomas de Zamora</p>
                    <p className="mb-1">teleservicelomas@gmail.com  |  6066-4712</p>
                    <a className="mt-3 mb-2 btn-detalle" id="list-profile-list" data-toggle="list" onClick={onClick2}>Mas detalle</a>
                </div>
                { showResults2 ?
                <div className="tab-pane" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <ul className="list-group">
                        <li className="list-group-item">Domingo: Cerrado</li>
                        <li className="list-group-item">Lunes: Abierto</li>
                        <li className="list-group-item">Martes: Abierto</li>
                        <li className="list-group-item">Miercoles: Cerrado</li>
                        <li className="list-group-item">Jueves: Cerrado</li>
                        <li className="list-group-item">Viernes: Abierto</li>
                        <li className="list-group-item">Sabado: Cerrado</li>
                    </ul>
                </div>
                : null}
            </li>
            <li href="#" className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Teleservice Sucursal Villa del Parque</h5>
                <small>Servicio</small>
                </div>
                <div className="texto-informativo">
                    <p className="mb-1">Av. Nazca 2701, Cdad. Autónoma de Buenos Aires</p>
                    <p className="mb-1">teleserviceparque@gmail.com  |  6666-4757</p>
                    <a className="mt-3 mb-2 btn-detalle" id="list-messages-list" data-toggle="list" onClick={onClick3}>Mas detalle</a>
                </div>
                { showResults3 ?
                <div className="tab-pane" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <ul className="list-group">
                        <li className="list-group-item">Domingo: Cerrado</li>
                        <li className="list-group-item">Lunes: Abierto</li>
                        <li className="list-group-item">Martes: Cerrado</li>
                        <li className="list-group-item">Miercoles: Cerrado</li>
                        <li className="list-group-item">Jueves: Abierto</li>
                        <li className="list-group-item">Viernes: Abierto</li>
                        <li className="list-group-item">Sabado: Abierto</li>
                    </ul>
                </div>
                : null}
            </li>
            </ul>
        </div>
        </div>
    </div>
    </>

    )
}