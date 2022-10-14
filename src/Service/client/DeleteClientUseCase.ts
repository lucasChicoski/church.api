import { MySqlClientRepository } from "../../Infrastructure/Data/client_repository/MySqlClientRepository";




export default class DeleteClientUseCase {
    clientRepository: MySqlClientRepository
    constructor() {
        this.clientRepository = new MySqlClientRepository()
    }

    async execute(id: string) {
        try {

            let response = await this.clientRepository.findClientById(id)


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
            return error
        }
    }


}