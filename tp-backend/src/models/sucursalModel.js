//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");

exports.all = async() => {
    const query = `
        SELECT id, nombre, codigo, provincia, localidad, direccion, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado
        FROM sucursal
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

exports.public = async() => {
    const query = `
        SELECT nombre, provincia, localidad, direccion, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado
        FROM sucursal
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

exports.create = async( {codigo, nombre, provincia, localidad, direccion, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado} ) => {
    const query = `
        INSERT INTO sucursal(codigo, nombre, provincia, localidad, direccion, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado, f_creacion)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try{
        await connection.query(query, [codigo, nombre, provincia, localidad, direccion, email, telefono, lunes, martes, miercoles, jueves, viernes, sabado, formatToday()]);
    }catch(error){
        throw error;
    }
}


exports.find = async(ID) => {
    const query = `
        SELECT id, nombre, cupo
        FROM eventos
        WHERE id = ?
    `;
    try{
        [results] = await connection.query(query, [ID]);
        return (results.length == 1) ? results[0] : null;
    }catch(error){
        throw error;
    }
}


exports.update = async( {ID, nombre, descripcion, cupo} ) => {
    const query = `
        UPDATE eventos
        SET
            nombre = ?,
            descripcion = ?,
            cupo = ?,
            fecha_modificacion = ?
        WHERE id = ?
    `;
    try{
        await connection.query(query, [nombre, descripcion, cupo, formatToday(), ID]);        
    }catch(error){
        throw error;
    }
}