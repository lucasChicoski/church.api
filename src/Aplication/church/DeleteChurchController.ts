import { DeleteChurchUseCase } from "../../Service/church/DeleteChurchUseCase"

export class DeleteChurchController {
    deleteChurchUseCase: DeleteChurchUseCase

    constructor() {
        this.deleteChurchUseCase = new DeleteChurchUseCase()
    }


    async handle(req, res) {

        const { code } = req.body
        try {
            const response = await this.deleteChurchUseCase.execute(code)
            res.send(response)

        } catch (error) {
            return error
        }

    }
}