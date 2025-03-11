const ordenModel = require("../models/ordenModel");

exports.index = async(req, res) => {
    try{
        const results = await ordenModel.all();
        res.json({ success: true, results });
        console.log("Se mando lista de Ordenes");
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar las ordenes' });
    }
}

exports.store = async(req, res) => {
    const {id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios,marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} = req.body;
    try{
        await ordenModel.create( {id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios,marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} );
        res.json({ success: true, message: 'La orden se ha creado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar crear la orden' });
    }
}

exports.show = async(req, res) => {
    const {ID} = req.params;
    try{
        const results = await ordenModel.find(ID);
        if(results == null){
            res.status(404).json({ success: false, message: 'La orden no existe o ha dejado de existir' });
        }else{            
            res.json({ success: true, results });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar la orden' });
    }
}

exports.search = async(req, res) => {
    const {dni} = req.params;
    try{
        const result = await ordenModel.search(dni);
        if(result == null){
            res.status(404).json({ success: false, message: 'La orden no se encuentran ordenes para esos filtros' });
        }else{            
            res.json({ success: true, result });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar lista de ordenes' });
    }
}


exports.update = async(req, res) => {
    const { ID } = req.params;
    const { id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios, reparacion, precio, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente } = req.body;
    try{
        ordenModel.update( {ID, id_sucursal, id_categoria, producto, condicion, serie, defecto, accesorios, reparacion, precio, marca, nombre_cliente, apellido_cliente, dni_cliente, localidad_cliente, direccion_cliente, telefono_cliente, email_cliente, provincia_cliente} );
        res.json({ success: true, message: 'La orden se ha modificado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar actualizar la orden' });
    }
}

exports.state = async(req, res) => {
    const { ID } = req.params;
    const { id_estado } = req.body;
    try{
        ordenModel.state( {ID, id_estado} );
        res.json({ success: true, message: 'El estado de orden se actualizo correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar actualizar la orden' });
    }
}
