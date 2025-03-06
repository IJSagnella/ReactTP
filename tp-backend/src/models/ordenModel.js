//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");



exports.all = async() => {
    const query = `
        SELECT id, id_sucursal, id_categoria, producto, condicion, serie, defecto, id_estado, accesorios, reparacion, precio, f_creacion, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente
        FROM orden
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

exports.create = async( {id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios,marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} ) => {
    const query = `
        INSERT INTO orden(id_sucursal, id_categoria, producto, condicion, serie, defecto, id_estado, accesorios,f_creacion, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente)
        VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try{
        await connection.query(query, [id_sucursal, id_categoria,producto, condicion, serie, defecto, 1, accesorios, formatToday(), marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente]);
    }catch(error){
        throw error;
    }
}

exports.find = async(ID) => {
    const query = `
        SELECT id, id_sucursal, id_categoria, producto, condicion, serie, defecto, id_estado, accesorios, reparacion, precio, f_creacion, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente
        FROM orden
        WHERE id = ?
    `;
    try{
        [results] = await connection.query(query, [ID]);
        return (results.length == 1) ? results[0] : null;
    }catch(error){
        throw error;
    }
}

exports.update = async( {ID, id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios, reparacion, precio, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} ) => {
    const query = `
        UPDATE orden
        SET
            id_sucursal = ?, 
            id_categoria = ?, 
            producto = ?, 
            condicion = ?, 
            serie = ?, 
            defecto = ?,  
            accesorios = ?, 
            reparacion = ?, 
            precio = ?, 
            marca = ?, 
            nombre_cliente = ?, 
            apellido_cliente = ?, 
            dni_cliente = ?, 
            localidad_cliente = ?, 
            direccion_cliente = ?, 
            telefono_cliente = ?, 
            email_cliente = ?, 
            provincia_cliente = ?
        WHERE id = ?
    `;
    try{
        await connection.query(query, [id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios, reparacion, precio, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente, ID]);        
    }catch(error){
        throw error;
    }
}