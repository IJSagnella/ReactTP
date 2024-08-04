const empleadoModel = require("../models/empleadoModel");

exports.register = async(req, res) => {
    const {sucursal, nombre, apellido, dni, email, password, telefono} = req.body;
    const is_admin = false;
    //Aca seria recomendable validar que no este repetido el Mail/DNI

    try{
        await empleadoModel.create( {sucursal, is_admin, nombre, apellido, dni, email, password, telefono} );
        res.json({ success: true, message: 'Empleado registrado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar registrar al empleado' });
    }
}

exports.login = async(req, res) => {
    const {email, password} = req.body;
    try{
        const empleado = await empleadoModel.login( {email, password} );
        if(empleado == null){
            res.json({ success: false, message: 'Credenciales incorrectas' });
        }else{
            //Información que se va a hashear.
            //const playload = { ID: usuario.id, nombre: usuario.nombre, is_admin: (usuario.is_admin == '1') };
            //Access token.
            //const accessToken = jwt.sign(playload, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            res.json({
                success: true,
                message: 'Inicio de sesión exitoso',
                nombre: empleado.nombre
                //accessToken
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
    }
}

