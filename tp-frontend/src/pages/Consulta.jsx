import '../css/Consulta.css';
import React, { useState } from 'react';
import { Pedidos } from '../components/Pedidos';
import { buscarOrdenesPor } from '../services/OrdenesService';


export const Consulta = () => {
    const [dni, setDni] = useState('');
    const [listaDeOrdenes, setOrdenes] = useState(null);

    const actualizarDni = (event) => {
        setDni(event.target.value);
    };

    const ordenesPor = async (dni) => {
        try {
            const resultado = await buscarOrdenesPor(dni);
            setOrdenes(resultado);
        } catch (error) {
            alert(`Error al obtener las ordenes del ${dni}`);
        }
    };

    return(
        <>
    <div className="container mt-4"> 
        <div className="row d-flex justify-content-center"> 
            <div className="col-md-9"> 
                <div className="card p-4 mt-3"> 
                    <h3 className="heading mt-5 text-center">SEGUI EL ESTADO DE TU PEDIDO</h3> 
                    <p className="text-center">Ingresa el codigo de seguimiento que llego a tu correo</p>
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
                            {listaDeOrdenes && (
                                <div>
                                    <h2>Orden por Dni: {dni}</h2>
                                    <pre>{JSON.stringify(listaDeOrdenes, null, 2)}</pre>
                                </div>
                            )} 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        <Pedidos/>
    </div>
    </>
    );
}