import { CreateClientUseCase } from "../../Service/client/CreateClientUseCase";


export class CreateClientController {
    createClientUseCase:CreateClientUseCase
    constructor() { 
        this.createClientUseCase = new CreateClientUseCase()
    }

    async hendle(req, res) {
        const { name, lastName, email, phone, password, id_igreja } = req.body

        try {
            this.createClientUseCase.execute({
                name, lastName, email, phone, password, id_igreja,
            })
            res.send("corpo de requisição capturada")
        } catch (error) {
            console.log("testes", error)
            // await 
        }
    }

}