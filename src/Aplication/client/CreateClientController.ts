import { CreateClientUseCase } from "../../Service/client/CreateClientUseCase";


export class CreateClientController {
    createClientUseCase: CreateClientUseCase
    constructor() {
        this.createClientUseCase = new CreateClientUseCase()
    }

    async hendle(req, res) {
        const { name, lastName, email, phone, password, id_church } = req.body

        try {
            var response = await this.createClientUseCase.execute({
                name, lastName, email, phone, password, id_church,
            })

            res.send(response)
        } catch (error) {
            throw new Error(error)
        }
    }
}