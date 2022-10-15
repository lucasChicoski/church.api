import { FindChurchByCodeUseCase } from "../../Service/church/FindChurchByCodeUseCase"





export class FindChurchByCodeController {
    findChurchByCodeUseCase: FindChurchByCodeUseCase
    constructor() {
        this.findChurchByCodeUseCase = new FindChurchByCodeUseCase()
    }


    async handle(req, res) {

        const { code } = req.body

        try {
            const response = await this.findChurchByCodeUseCase.execute(code)
            res.send(response)

        } catch (error) {
            return error
        }

    }
}