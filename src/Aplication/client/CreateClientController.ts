import { CreateClientUseCase } from "../../Service/client/CreateClientUseCase";


export class CreateClientController {
    createClientUseCase: CreateClientUseCase
    constructor() {
        this.createClientUseCase = new CreateClientUseCase()
    }

    async hendle(req, res) {
        const { name, lastName, email, phone, password, id_igreja } = req.body

        try {
            var response = await this.createClientUseCase.execute({
                name, lastName, email, phone, password, id_igreja,
            })

            res.send(response)
        } catch (error) {
            throw new Error(error)
        }
    }

}