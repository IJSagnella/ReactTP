import { Link } from 'react-router-dom';
import '../css/Nav.css';

export const Nav = () => {
    return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <a className="navbar-brand" href="/">Teleservice</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-inline-flex mx-auto my-2">
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <img className="icono-perfil" src="src/assets/gente.png" alt="Perfil" />
                    <a className="navbar-text" href="http://localhost:5173/login">Iniciar Sesion</a>
                </li>

                  <li className="nav-item dropdown">
                    <img className="icono-perfil" src="src/assets/gente.png" alt="Perfil" />
                    <a className="navbar-text" href="http://localhost:5173/login">Iniciar Sesion</a>
                </li>

              </ul>
            </div>
       </nav>
       <div id="divisor-navegador">
                <div className="row" id="row-divisor"> 
                    <Link className='nav-link col-sm' id="item-divisor" to="/" > Inicio</Link>                 
                    <Link className='nav-link col-sm' id="item-divisor" to="/consulta" >Consultar Servicio</Link>
                    <Link className='nav-link col-sm' id="item-divisor" to="/contacto" >Contacto</Link>
                </div>  
        </div>
    </>
    )
   
}