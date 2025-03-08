const empleadoModel = require("../models/empleadoModel");
const auth = require('../middleware/auth');

exports.register = async(req, res) => {
    const { sucursal, nombre, apellido, dni, email, password, telefono, rol } = req.body;

    console.log(req.body);

    // Verificar que todos los campos necesarios estén presentes
    if (!sucursal || !nombre || !apellido || !dni || !email || !password || !telefono) {
        return res.status(400).json({
            success: false,
            message: 'Todos los campos son obligatorios.'
        });
    }

    try {
        // Verificar si el email o el DNI ya están registrados
        const empleadoExistente = await empleadoModel.findByEmailOrDni(email, dni);
        if (empleadoExistente) {
            return res.status(400).json({
                success: false,
                message: 'El correo o el DNI ya están registrados.'
            });
        }

        // Crear el empleado
        await empleadoModel.create({
            sucursal,
            rol,
            nombre,
            apellido,
            dni,
            email,
            password,
            telefono
        });

        res.json({
            success: true,
            message: 'Empleado registrado correctamente'
        });
    } catch (error) {
        console.error("Error al registrar empleado:", error.message);
        res.status(500).json({
            success: false,
            message: 'Error al intentar registrar al empleado.'
        });
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
            const payload = { ID: empleado.id, nombre: empleado.nombre, rol:empleado.id_rol };
            //Access token.
            const token = auth.generateToken(payload);
            res.json({
                success: true,
                message: 'Inicio de sesión exitoso',
                nombre: empleado.nombre,
                token
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
    }

}

exports.index = async(req, res) => {
    try{
        const results = await empleadoModel.all();
        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los empleados' });
    }
}
