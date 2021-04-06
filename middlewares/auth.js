
const jwt = require('jsonwebtoken');

const verificateAuth = (req, res, next) => {
    let token = req.get('token')
    jwt.verify(token, 'secret', (err, decoded) => {

        if(err) {
            return res.status(401).json({
                message: "error al leer el token",
                err
            });
        }

        req.user = decoded.data;
        next();

    });

}

/* const verificateRol = (req, res, next) => {
    let rol = req.user.role;
    if(rol !== 'ADMIN'){
        return res.status(401).json({
            message: 'unauthorized rol!',
        })
    }
    next();
}

*/

module.exports = {verificateAuth};