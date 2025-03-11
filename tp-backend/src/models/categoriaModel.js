//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");

exports.all = async() => {
    const query = `
            SELECT 
            id, 
            codigo,
            descripcion
            FROM categoria
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}