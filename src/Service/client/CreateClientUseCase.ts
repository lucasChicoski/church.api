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
            throw new Error("User already registered")
        }

        const client = new Client(data)
        this.clientRepository.saveClient(client)
    }

}