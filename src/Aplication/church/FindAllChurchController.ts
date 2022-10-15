import { FindAllChurchUseCase } from "../../Service/church/FindAllChurchUseCase"





export class FindAllChurchController {
    findAllChurcUseCase: FindAllChurchUseCase
    constructor() {
        this.findAllChurcUseCase = new FindAllChurchUseCase()
    }


    async handle(req, res) {

        try {
            const response = await this.findAllChurcUseCase.handle()
            res.send(response)

        } catch (error) {
            return error
        }

    }
}