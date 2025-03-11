//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");



exports.all = async() => {
    const query = `
            SELECT 
            o.id, o.id_sucursal, s.nombre AS sucursal,
            o.id_categoria, c.codigo AS categoria,
            o.producto, o.condicion, o.serie, o.defecto,
            o.id_estado, e.descripcion AS estado,
            o.accesorios, o.reparacion, o.precio, o.f_creacion,
            o.marca, o.nombre_cliente, o.apellido_cliente,
            o.dni_cliente, o.localidad_cliente, o.direccion_cliente,
            o.telefono_cliente, o.email_cliente, o.provincia_cliente
        FROM orden o
        INNER JOIN categoria c ON o.id_categoria = c.id
        INNER JOIN estado_orden e ON o.id_estado = e.id
        INNER JOIN sucursal s ON o.id_sucursal = s.id
        ORDER BY o.f_creacion DESC
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

exports.search = async(dni) => {
    const query = `
            SELECT 
            o.id, o.id_sucursal, s.nombre AS sucursal,
            o.id_categoria, c.codigo AS categoria,
            o.producto, o.condicion, o.serie, o.defecto,
            o.id_estado, e.descripcion AS estado,
            o.accesorios, o.reparacion, o.precio, o.f_creacion,
            o.marca, o.nombre_cliente, o.apellido_cliente,
            o.dni_cliente, o.localidad_cliente, o.direccion_cliente,
            o.telefono_cliente, o.email_cliente, o.provincia_cliente
        FROM orden o
        INNER JOIN categoria c ON o.id_categoria = c.id
        INNER JOIN estado_orden e ON o.id_estado = e.id
        INNER JOIN sucursal s ON o.id_sucursal = s.id
        WHERE o.dni_cliente = ?
        ORDER BY o.f_creacion DESC
    `;
    try{
        [results] = await connection.query(query, [dni]);
        return results;
    }catch(error){
        throw error;
    }
}

exports.bySucursal = async(sucursal) => {
    const query = `
            SELECT 
            o.id, o.id_sucursal, s.nombre AS sucursal,
            o.id_categoria, c.codigo AS categoria,
            o.producto, o.condicion, o.serie, o.defecto,
            o.id_estado, e.descripcion AS estado,
            o.accesorios, o.reparacion, o.precio, o.f_creacion,
            o.marca, o.nombre_cliente, o.apellido_cliente,
            o.dni_cliente, o.localidad_cliente, o.direccion_cliente,
            o.telefono_cliente, o.email_cliente, o.provincia_cliente
        FROM orden o
        INNER JOIN categoria c ON o.id_categoria = c.id
        INNER JOIN estado_orden e ON o.id_estado = e.id
        INNER JOIN sucursal s ON o.id_sucursal = s.id
        WHERE o.id_sucursal = ?
        ORDER BY o.f_creacion DESC
    `;
    try{
        [results] = await connection.query(query, [sucursal]);
        return results;
    }catch(error){
        throw error;
    }
}



exports.create = async( {id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios,marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} ) => {
    const query = `
        INSERT INTO orden(
        id_sucursal, 
        id_categoria, 
        producto, 
        condicion, 
        serie, 
        defecto, 
        id_estado, 
        accesorios,
        f_creacion, 
        marca, 
        nombre_cliente, 
        apellido_cliente, 
        dni_cliente, 
        localidad_cliente, 
        direccion_cliente, 
        telefono_cliente, 
        email_cliente, 
        provincia_cliente)
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
        SELECT 
            o.id, 
            o.id_sucursal, 
            s.nombre AS sucursal_nombre, 
            o.id_categoria, 
            c.codigo AS categoria_nombre, 
            o.producto, 
            o.condicion, 
            o.serie, 
            o.defecto, 
            o.id_estado, 
            e.descripcion AS estado_nombre, 
            o.accesorios, 
            o.reparacion, 
            o.precio, 
            o.f_creacion, 
            o.marca, 
            o.nombre_cliente, 
            o.apellido_cliente, 
            o.dni_cliente, 
            o.localidad_cliente, 
            o.direccion_cliente, 
            o.telefono_cliente, 
            o.email_cliente, 
            o.provincia_cliente
        FROM orden o
        INNER JOIN sucursal s ON o.id_sucursal = s.id
        INNER JOIN categoria c ON o.id_categoria = c.id
        INNER JOIN estado_orden e ON o.id_estado = e.id
        WHERE o.id = ?;
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

exports.state = async( {ID, id_estado} ) => {
    const query = `
            UPDATE orden
            SET id_estado = ?
            WHERE id = ?
    `;
    try{
        await connection.query(query, [id_estado, ID]);        
    }catch(error){
        throw error;
    }
}