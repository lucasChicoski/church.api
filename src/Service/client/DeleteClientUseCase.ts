import { MySqlClientRepository } from "../../Infrastructure/Data/Client/repository/MySqlClientRepository";




export default class DeleteClientUseCase {
    clientRepository: MySqlClientRepository
    constructor() {
        this.clientRepository = new MySqlClientRepository()
    }

    async execute(id: string) {
        try {

            let response = await this.clientRepository.findClientById(id)
            console.log("terere", response)

            if (response) {
                await this.clientRepository.deleteClient(id)
                return {
                    status_code: 200,
                    message: "Client Deleted"
                }
            }

            return {
                status_code: 400,
                message: "Client Not Found"
            }

        } catch (error) {
            console.log(error)
        }
    }


}