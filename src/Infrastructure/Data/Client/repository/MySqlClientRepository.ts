import { Client } from "../../../../Domain/client/Models/ClientModel";
import { IClientReposiotry } from "./IClientRepository";
import { PrismaClient } from "@prisma/client"


export class MySqlClientRepository implements IClientReposiotry {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    async findClientByEmail(email: string): Promise<Client> {

        try {
            let client = await this.prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            return client
        } catch (error) {
            throw new Error(error)
        }
    }
    async saveClient(client: Client): Promise<Client> {
        try {
            return await this.prisma.user.create({
                data: {
                    ...client
                }
            })
        } catch (error) {
            throw new Error(error)
        }

    }
    async deleteClient(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateClient(client: Client): Promise<void> {
        throw new Error("Method not implemented.");
    }
}