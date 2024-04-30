import jwt from "jsonwebtoken"

export const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization')
    let token = ''

    //si hay authorization verifico que sea correcta y obtengo el token
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }

    //verifico el token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    //Si no hay token o si no hay id en el token retorno un error
    if(!token || !decodedToken.id){
        return res.status(403).json({message: "Invalid token"})
    }

    //seteo datos del token en la request
    req.userId = decodedToken.id
    req.id_company = decodedToken.id_company

    next()
}