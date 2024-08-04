//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");
const bcrypt = require('bcrypt');


exports.create = async( {nombre, apellido, password, is_admin} ) => {
    const password_crypt = await bcrypt.hash(password, 10);
    const query = `
        INSERT INTO empleado(nombre, apellido, password, is_admin)
        VALUES(?, ?, ?, ?)
    `;
    try{
        await connection.query(query, [nombre, apellido, password_crypt, (is_admin ? 1 : 0)]);
    }catch(error){
        throw error;
    }
}
