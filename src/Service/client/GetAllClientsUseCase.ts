import { MySqlClientRepository } from "../../Infrastructure/Data/Client/repository/MySqlClientRepository";


export default class GetAllClientsUseCase {
    clientRepository: MySqlClientRepository

    constructor() {
        this.clientRepository = new MySqlClientRepository()
    }

    async execute(id: string) {

        try {

            const response = await this.clientRepository.getAllClients(id)
            console.log(response)
            if (response.length > 0) {
                return {
                    status_code: 200,
                    message: response
                }
            }

            return {
                status_code: 200,
                message: "Nenhum Usuário Encontrado"
            }
        } catch (error) {

        }

    }
}