import { Client } from "../../../../Domain/client/Models/ClientModel"


export interface IClientReposiotry {
    findClientByEmail(email: string): Promise<Client>
    saveClient(client: Client): Promise<void>
    deleteClient(id: string): Promise<void>
    updateClient(client: Client): Promise<void>
}