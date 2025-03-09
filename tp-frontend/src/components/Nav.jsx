import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Nav.css";

export const Nav = () => {
    const { logueado, logout } = useAuth();

    return (
        <>
            {!logueado && (
                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                        <a className="navbar-brand" href="/">Teleservice</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-inline-flex mx-auto my-2"></form>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <img className="icono-perfil" src="/icons/gente.png" alt="Perfil" />
                                    <Link className="navbar-text" to="/login">Iniciar Sesión</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id="divisor-navegador">
                        <div className="row" id="row-divisor">
                            <Link className="nav-link col-sm" id="item-divisor" to="/">Inicio</Link>
                            <Link className="nav-link col-sm" id="item-divisor" to="/consulta">Consultar Servicio</Link>
                            <Link className="nav-link col-sm" id="item-divisor" to="/contacto">Contacto</Link>
                        </div>
                    </div>
                </>
            )}
            {logueado && (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <a className="navbar-brand" href="/">Teleservice</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-link text-light" onClick={logout}>Cerrar Sesión</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
};