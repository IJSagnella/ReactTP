import '../css/Contacto.css';
import { buscarSucursales } from '../services/SucursalesService';
import { CardContacto } from '../components/CardContacto';
import React, { useState, useEffect } from 'react';

export const Contacto = () => {

    const [listaDeSucursales, setSucursales] = useState([]);

    useEffect(() => {
        buscarSucursales()
          .then(resultado => {
            setSucursales(resultado.results);
          })
          .catch(error => {
            console.error('Error al obtener las sucursales:', error);
          });
      }, []);
    
    return (
    <>
    <h1 className="pt-5">Centro de Servicios</h1>
    {listaDeSucursales?.map((sucursal, indice) => (
        <CardContacto
            key={ sucursal.id }
            nombre={ sucursal.nombre }
            direccion={ sucursal.direccion }
            localidad={ sucursal.localidad }
            email={ sucursal.email }
            telefono={ sucursal.telefono }
            lunes={ sucursal.lunes }
            martes={ sucursal.martes }
            miercoles={ sucursal.miercoles }
            jueves={ sucursal.jueves }
            viernes={ sucursal.viernes }
            sabado={ sucursal.sabado }
        />
    ))}
    </>
    )
}