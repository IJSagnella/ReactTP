const categoriaModel = require("../models/categoriaModel");

exports.index = async(req, res) => {
    try{
        const results = await categoriaModel.all();
        res.json({ success: true, results });
        console.log("Se mando lista de CAtegorias");
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar las categorias' });
    }
}



