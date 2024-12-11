//Conexión a la base de datos.
const connection = require('../../db');

//Fechas
const {formatToday} = require("../helpers/dateHelper");
const bcrypt = require('bcrypt');


exports.create = async( {sucursal, is_admin, nombre, apellido, dni, email, password, telefono} ) => {
    if (!password) {
        throw new Error("La contraseña es obligatoria.");
    }

    const password_crypt = await bcrypt.hash(password, 10);
    const query = `
        INSERT INTO empleado(id_sucursal, is_admin, nombre, apellido, dni, email, password, telefono, f_creacion)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        await connection.query(query, [
            sucursal,
            is_admin ? 1 : 0, // Convierte `is_admin` a 1 o 0.
            nombre,
            apellido,
            dni,
            email,
            password_crypt,
            telefono,
            formatToday() // Fecha de creación.
        ]);
    } catch (error) {
        console.error("Error al insertar el empleado:", error.message);
        throw error; // Re-lanza el error para que sea manejado por el controlador.
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

exports.findByEmailOrDni = async (email, dni) => {
    const query = `
        SELECT * FROM empleado
        WHERE email = ? OR dni = ?
        LIMIT 1
    `;

    try {
        const [rows] = await connection.query(query, [email, dni]);
        return rows.length > 0 ? rows[0] : null;  // Devuelve el primer registro encontrado, o null si no existe
    } catch (error) {
        console.error("Error al buscar empleado por email o DNI:", error.message);
        throw error;  // Lanza el error para que sea capturado en el controlador
    }
}

exports.all = async() => {
    const query = `
        SELECT id_sucursal, nombre, apellido, is_admin, dni, email, telefono, f_creacion
        FROM empleado
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

