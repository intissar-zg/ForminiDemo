const jwt = require ('jsonwebtoken')

exports.authMiddleware = async (req,res,next) => {
const token = req.header('auth-token')
try {
    if(!token) res.status(400).json({message:'you are not authorized'})
    const verifyToken =  await jwt.verify(token,'khaouint')
    if(!verifyToken) res.status(401).json({message:'wrong token'})
    req.userId=verifyToken.id;
    next()
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
}
}