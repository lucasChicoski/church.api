import { Client } from "../../../Domain/Models/ClientModel"


export interface IClientReposiotry {
    findClientByEmail(email: string): Promise<Client>
    findClientById(id: string): Promise<Client>
    saveClient(client: Client): Promise<Client>
    deleteClient(id: string): Promise<void>
    updateClient(client: Client): Promise<Client>
    getAllClients(id_church: string): Promise<Client[]>
}