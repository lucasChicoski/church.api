import DeleteClientUseCase from "../../Service/client/DeleteClientUseCase";




export default class DeleteClientController {
    deleteClientUseCases: DeleteClientUseCase
    constructor() {
        this.deleteClientUseCases = new DeleteClientUseCase()
    }


    async handle(req, res) {
        const { id } = req.body

        let response = await this.deleteClientUseCases.execute(id)
        res.send(response)
    }
}