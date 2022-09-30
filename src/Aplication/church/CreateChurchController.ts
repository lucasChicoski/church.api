import { CreateChurchUseCase } from "../../Service/church/CreateChurchUseCase";



export class CreateChurchController {
    createChurchUseCase: CreateChurchUseCase
    constructor() {
        this.createChurchUseCase = new CreateChurchUseCase()
    }


    async handle(req, res) {

        const { churchName, cnpj, religion } = req.body

        try {
            const response = await this.createChurchUseCase.execute({ churchName, cnpj, religion })
            res.send(response)

        } catch (error) {
            return error
        }

    }
}