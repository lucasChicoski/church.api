import { CreateChurchUseCase } from "../../Service/church/CreateChurchUseCase";



export class CreateChurchController {
    createChurchUseCase: CreateChurchUseCase
    constructor() {
        this.createChurchUseCase = new CreateChurchUseCase()
    }


    async handle(req, res) {

        const { churchName, cnpj, religion, contact } = req.body

        console.log("contato", contact)

        try {
            const response = await this.createChurchUseCase.execute({ churchName, cnpj, religion },/**Contato, Endereço */)
            res.send(response)

        } catch (error) {
            return error
        }

    }
}