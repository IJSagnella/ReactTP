import '../css/menu.css';

export const Menu = () => {

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <a className="navbar-brand" href="#">Teleservicio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-inline-flex mx-auto my-2">
                  <input className="form-control mr-sm-1" type="search" placeholder="Buscar..." aria-label="Search" />
              </form>
              <ul className="navbar-nav">
                  <li className="nav-item active">
                    <img className="icono-perfil" src="src/assets/entrega.png" alt="Entrega" />
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img className="icono-perfil" src="src/assets/gente.png" alt="Perfil" />
                          <span>Elizabeth Sanchez</span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Perfil</a>
                          <a className="dropdown-item" href="#">Cerrar Sesion</a>
                      </div>
                  </li>
              </ul>
          </div>
      </nav>
    )
}