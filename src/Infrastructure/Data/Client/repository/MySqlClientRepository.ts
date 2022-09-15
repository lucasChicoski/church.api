import { Client } from "../../../../Domain/client/Models/ClientModel";
import { IClientReposiotry } from "./IClientRepository";
import { PrismaClient } from "@prisma/client"


export class MySqlClientRepository implements IClientReposiotry {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async findClientById(id: string): Promise<Client> {
        try {
            let client = await this.prisma.user.findUnique({
                where: {
                    id: id
                }
            })
            return client
        } catch (error) {
            return error
        }
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
        try {
            await this.prisma.user.delete({
                where: {
                    id: id
                }
            })
        } catch (error) {
            return error.code
        }
    }
    async updateClient(client: Client): Promise<Client> {
        try {
            const response = await this.prisma.user.update({
                where: {
                    id: client.id
                },
                data: {
                    ...client
                },
            })
            return response
        } catch (error) {
            return error
        }
    }
}