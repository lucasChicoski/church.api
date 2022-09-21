import GetAllClientsUseCase from "../../Service/client/GetAllClientsUseCase";






export default class GetAllClientsController {
    getAllClientUseCase: GetAllClientsUseCase

    constructor() {
        this.getAllClientUseCase = new GetAllClientsUseCase()
    }


    async handle(req, res) {
        const { id } = req.body
        const response = await this.getAllClientUseCase.execute(id)
        res.send(response)
    }

}