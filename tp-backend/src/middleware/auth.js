const jwt = require('jsonwebtoken');

exports.generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    return token;
}

exports.authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //Validar que no sea nulo
    if (!authHeader) {
        return res.status(401).json({ success: false, message: 'Token de autenticación no proporcionado' });
    }

    //Validar formato Beaber
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ success: false, message: 'Formato de token no válido' });
    }
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        req.user = decodedToken; // Agregar información del usuario a la solicitud
        console.log(decodedToken);
        next();
    }catch(error){
        return res.status(401).json({ success: false, message: 'Token de autenticación inválido' });
    }

}