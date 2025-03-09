import '../css/Consulta.css';
import React, { useState } from 'react';
import { Pedido } from '../components/Pedido';
import { buscarOrdenesPor } from '../services/OrdenesService';


export const Consulta = () => {
    const [dni, setDni] = useState('');
    const [listaDeOrdenes, setOrdenes] = useState([]);

    const actualizarDni = (event) => {
        setDni(event.target.value);
    };

    const ordenesPor = async (dni) => {
        try {
            const resultado = await buscarOrdenesPor(dni);
            setOrdenes(resultado.result);
        } catch (error) {
            alert(`Error al obtener las ordenes del ${dni}`);
        }
    };

    return (
    <div className="container-consulta mt-4"> 
        <div className="row d-flex justify-content-center pb-4"> 
            <div className="col-md-9"> 
                <div className="container-consulta-pedido p-4 mt-3"> 
                    <h3 className="heading mt-5 text-center">SEGUI EL ESTADO DE TU PEDIDO</h3> 
                    <p className="text-center">Ingrese su DNI para ver sus pedidos</p>
                    <div className="d-flex justify-content-center px-5"> 
                        <div className="search"> 
                            <input 
                            type="number"
                            value={dni}
                            onChange={actualizarDni} 
                            className="search-input" 
                            placeholder="Ingrese su DNI" 
                            name=""
                            /> 
                            <button className="search-icon" onClick={() => ordenesPor(dni)}>Buscar</button>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
        <div className="container-cartas-pedidos">
            <div className="row justify-content-center">
                {listaDeOrdenes?.map((orden, indice) => (
                    <div 
                        key={indice} 
                        className="col-12 col-sm-6 col-lg-4 mb-4"
                    >
                        <Pedido 
                            numero_pedido={orden.id}
                            producto={orden.producto}
                            estado={orden.estado}
                            defecto={orden.defecto}
                            reparacion={orden.reparacion}
                            sucursal={orden.sucursal}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}