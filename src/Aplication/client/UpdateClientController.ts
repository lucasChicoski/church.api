import { UpdateClientUseCase } from "../../Service/client/UpdateClientUseCase";



export class UpdateClientController {
    updateClientUseCase: UpdateClientUseCase
    constructor() {
        this.updateClientUseCase = new UpdateClientUseCase()
    }


    async handle(req, res) {
        const { id, name, lastName, email, phone, password, id_church, } = req.body


        try {
            let response = await this.updateClientUseCase.execute({ id, name, lastName, email, phone, password, id_church })

            res.send(response)
        } catch (error) {
            return error
        }
    }
}