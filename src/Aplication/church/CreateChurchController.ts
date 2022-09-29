import { CreateChurchUseCase } from "../../Service/church/CreateChurchUseCase";



export class CreateChurchController {
    createChurchUseCase: CreateChurchUseCase
    constructor() {
        this.createChurchUseCase = new CreateChurchUseCase()
    }


    async handle(req, res) {

        const { churchName, cnpj, religion } = req.body
        console.log("requisição",)

        try {
            this.createChurchUseCase.execute({ churchName, cnpj, religion })
        } catch (error) {
            return error
        }

    }
}