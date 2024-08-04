//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");
const bcrypt = require('bcrypt');


exports.create = async( {sucursal, is_admin, nombre, apellido, dni, email, password, telefono} ) => {
    const password_crypt = await bcrypt.hash(password, 10);
    const query = `
        INSERT INTO empleado(id_sucursal, is_admin, nombre, apellido, dni, email, password, telefono, f_creacion)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try{
        await connection.query(query, [sucursal, (is_admin ? 1 : 0), nombre, apellido, dni, email, password_crypt, telefono, formatToday()]);
    }catch(error){
        throw error;
    }
}

exports.login = async( {email, password} ) => {
    //Buscamos el empleado por su correo.
    const query = `
        SELECT id, id_sucursal, is_admin, nombre, apellido, dni, email, password, telefono, f_creacion
        FROM empleado
        WHERE email = ?
    `;
    try{
        [results] = await connection.query(query, [email]);
        //Verificamos si encontró el empleado.
        if(results.length == 1){
            const empleado = results[0];

            //Verificamos que la contraseña ingresada es correcta (pass ingresada, hash de la query).
            const is_password = await bcrypt.compare(password, empleado.password);

            return (is_password) ? empleado : null;

        }else{
            return null;
        }
    }catch(error){
        throw error;
    }
}

