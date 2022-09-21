
import jwt from 'jsonwebtoken'
import { Client } from '../Domain/Models/ClientModel'


export default class AuthenticationLayer {
    constructor() { }


    generateTokenClient(data: Client): string {
        const token = jwt.sign({ id: data.id, name: data.name, email: data.email, id_church: data.id_church, photo: data.photo, phone: data.phone }, process.env.SECRET, {})
        return token
    }

    verifyTokenClient(req, res, next) {
        
        const token = req.headers['x-access-token'];
        
        jwt.verify(token, process.env.SECRET, (err, decode) => {
            if (err) {
                res.send({erro: err.message, message: "Token Inválido ou você não tem permissão para realizar isso"})
                return 
            }
            // req.id = decode.id
            next()
        })

    }
}