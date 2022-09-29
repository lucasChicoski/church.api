
import { IChurchRepository } from "./IChurchRepository";
import { PrismaClient } from "@prisma/client"
import { Church } from "../../../Domain/Models/ChurchModel";




export class MySqlChurchRepository implements IChurchRepository {

    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }
    async saveChurch(church: Church): Promise<Church> {
        console.log("vrau", church)

        const churchCreated = await this.prisma.church.create({
            data: {
                ...church
            }
        })
        console.log("igreja cadastrada", churchCreated)
        return churchCreated
        //  throw new Error("Method not implemented.");
    }
    updateChurch(church: Church): Promise<Church> {
        throw new Error("Method not implemented.");
    }
    findByCodeChurch(code: Number): Promise<Church> {
        throw new Error("Method not implemented.");
    }
    async findByCNPJChurch(cnpj: string): Promise<Church> {

        const churchResearch = await this.prisma.church.findUnique({
            where: {
                cnpj: cnpj
            }
        })
        console.log(cnpj)
        return churchResearch
        // throw new Error("Method not implemented.");
    }
    deleteChurch(code: Number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllChurch(): Promise<Church[]> {
        throw new Error("Method not implemented.");
    }
}