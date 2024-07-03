import '../css/Tabla.css';
import { HeaderTabla } from '../components/HeaderTabla';
import { BodyTabla } from '../components/BodyTabla';

export const Tabla = ({ columnas, lista }) => {

    const formatearColumnas = () => {
        
        let ths = "";

        columnas.forEach((element) => {
            ths = ths + element.label;
        });

        return ths;

    };

    const completoTabla = () => {

        let trs = "";

        lista.forEach((element) => {

            let tds = "";

            columnas.forEach((col) => {
                tds = tds + "<td>"+element[col.db]+"</td>";
            });
            
            trs = "<tr>" + tds + "</tr>";
        });

        return trs;

    };

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                { 
                                columnas.forEach((element) => {
                                    <HeaderTabla valor={element.label} />
                                }) 
                                }
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}




