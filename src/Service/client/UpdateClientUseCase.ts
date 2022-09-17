import { ICreateClientRequestDTO } from "../../Domain/DTO/ICreateClientRequestDTO";
import { Client } from "../../Domain/Models/ClientModel";
import { MySqlClientRepository } from "../../Infrastructure/Data/client_repository/MySqlClientRepository";



export class UpdateClientUseCase {
    clientRepository: MySqlClientRepository
    constructor() {
        this.clientRepository = new MySqlClientRepository()
    }


    async execute(data: ICreateClientRequestDTO) {

        try {
            let response = await this.clientRepository.findClientById(data.id)

            if (response) {

                let clientUpdated = await this.clientRepository.updateClient(new Client(data, data.id))
                return {
                    status_code: 200,
                    message: "Usuário Alterado",
                    client: clientUpdated
                }
            }

            return {
                status_code: 400,
                message: "Usário Não Encontrado",
            }
        } catch (error) {
            return error
        }

    }
}