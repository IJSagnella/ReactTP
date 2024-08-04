const usuarioModel = require("../models/empleadoModel");

exports.register = async(req, res) => {
    const {nombre, apellido, password} = req.body;
    const is_admin = false;
    //Aca seria recomendable validar que no este repetido el Mail/DNI
    
    try{
        await usuarioModel.create( {nombre, apellido, password, is_admin} );
        res.json({ success: true, message: 'Empleado registrado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar registrar al empleado' });
    }
}
