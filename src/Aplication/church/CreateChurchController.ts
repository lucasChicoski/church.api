import { CreateChurchUseCase } from "../../Service/church/CreateChurchUseCase";



export class CreateChurchController {
    createChurchUseCase: CreateChurchUseCase
    constructor() {
        this.createChurchUseCase = new CreateChurchUseCase()
    }


    async handle(req, res) {

        const { churchName, cnpj, religion, contact, address } = req.body

        try {
            const response = await this.createChurchUseCase.execute(
                { churchName, cnpj, religion },
                { phoneNumber: contact.phone, email: contact.email },)
            res.send(response)

        } catch (error) {
            return error
        }

    }
}