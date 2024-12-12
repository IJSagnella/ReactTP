const sucursalModel = require('../models/sucursalModel');


exports.public = async(req, res) => {
    try{
        const results = await sucursalModel.public();

        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar las sucursales' });
    }
}

exports.index = async(req, res) => {
    try{
        const results = await sucursalModel.all();
        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar las sucursales' });
    }
}


exports.store = async(req, res) => {
    const {nombre, descripcion, cupo} = req.body;
    try{
        await sucursalModel.create( {nombre, descripcion, cupo} );
        res.json({ success: true, message: 'La sucursal se ha creado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar agregar la sucursal' });
    }
}


exports.show = async(req, res) => {
    const {ID} = req.params;
    try{
        const result = await sucursalModel.find(ID);
        if(result == null){
            //El evento con ese ID no existe.
            res.status(404).json({ success: false, message: 'La sucursal no existe o ha dejado de existir' });
        }else{            
            res.json({ success: true, result });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar la sucursal' });
    }
}


exports.update = async(req, res) => {
    const { ID } = req.params;
    const { nombre, descripcion, cupo } = req.body;
    try{
        sucursalModel.update( {nombre, descripcion, cupo, ID} );
        res.json({ success: true, message: 'La sucursal se ha modificado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar la sucursal' });
    }
}

