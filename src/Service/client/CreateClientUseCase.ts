import { ICreateClientRequestDTO } from "../../Domain/client/DTO/ICreateClientRequestDTO";
import { Client } from "../../Domain/client/Models/ClientModel";
import { MySqlClientRepository } from "../../Infrastructure/Data/Client/repository/MySqlClientRepository";


export class CreateClientUseCase {
    clientRepository: MySqlClientRepository
    constructor() {
        this.clientRepository = new MySqlClientRepository()
    }

    async execute(data: ICreateClientRequestDTO) {
        const alreadyRegisterClient = await this.clientRepository.findClientByEmail(data.email)

        if (alreadyRegisterClient) {
            return {
                status_code: 400,
                message: "Client Already Register"
            }
        }

        const client = new Client(data)
        let clientRegisterd = await this.clientRepository.saveClient(client)

        return {
            status_code: 200,
            response: clientRegisterd
        }
    }

}