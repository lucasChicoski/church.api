import { PrismaClient } from "@prisma/client";
import { ContactModel } from "../../../Domain/Models/ContactModel";
import { IContactRepository } from "./IContactRepository";


export class MySqlContactRepository implements IContactRepository {
    prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async findByEmailContact(email: string): Promise<ContactModel> {

        const response = await this.prisma.contactChurch.findFirst({
            where: { email: email }
        })

        return response

    }
    async saveContact(contact: ContactModel): Promise<ContactModel> {
        const response = await this.prisma.contactChurch.create({
            data: contact
        })

        return response
    }
    updateContact(contact: ContactModel): Promise<ContactModel> {
        throw new Error("Method not implemented.");
    }


}