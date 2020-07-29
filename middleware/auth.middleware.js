const jwt = require('jsonwebtoken');
const config = require('config')
module.exports = async(req, res, next)=> {
    if (req.method === 'OPTIONS'){
        return next();
    }
    
    try{
        const token = req.headers.autorization.split(' ')[1];
        if (!token){
            return res.status(401).json({message: 'нет авторизации'})
        }

        const decoded = jwt.verify(token, config.get('jwtKey'));
        req.user = decoded;
        next()

    } catch(e){
        if (e.name === 'TokenExpiredError'){
            return res.status(401).json({message: 'Время действия токена истекло'})
        }
        return res.status(401).json({message: 'Ошибка запроса'})

    }
}