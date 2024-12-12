import '../css/Tabla.css';


export const Tabla = ({ columnas, lista, carga }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                { 
                                columnas.map( (columna, i) =>{
                                    return (<th key={i}>{columna.label}</th>)
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                                {
                                carga && <tr><td>Cargando...</td></tr>
                                } 
                                { 
                                    lista?.map( (item, i) =>{
                                        return (<tr key={i}>
                                            {
                                            columnas.map( (columna, i) =>{
                                            return (<td key={i}>{item[columna.db]}</td>)
                                            })}
                                        </tr>)
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}




