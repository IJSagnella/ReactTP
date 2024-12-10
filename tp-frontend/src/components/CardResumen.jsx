import '../css/Card.css';

export const CardResumen = ({ titulo, valor, icono }) => {

    return(
        <div className='card border-left-naranja shadow h-100 py-2'>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className='col mr-2'>
                        <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        { titulo }
                        </div>
                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        { valor }
                        </div>
                    </div>
                    <div className="col-auto">
                        <img src={ `../icons/${icono}.png` } alt="icono" />
                    </div>
                </div>
            </div>
        </div>
    )
}