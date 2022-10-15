
import { IChurchRepository } from "./IChurchRepository";
import { PrismaClient } from "@prisma/client"
import { Church } from "../../../Domain/Models/ChurchModel";




export class MySqlChurchRepository implements IChurchRepository {

    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }
    async findAllChurch(): Promise<Church[]> {
        const responseBd = await this.prisma.church.findMany({
            include: {
                ContactChurch: true,
                AddressChruch: true,
            }
        })
        return responseBd
    }

    async saveChurch(church: Church): Promise<Church> {
        const responseBd = await this.prisma.church.create({
            data: {
                ...church
            }
        })
        return responseBd
    }
    updateChurch(church: Church): Promise<Church> {
        throw new Error("Method not implemented.");
    }
    async findByCodeChurch(code: number): Promise<Church> {
        const responseBd = await this.prisma.church.findUnique({
            where: {
                code: code
            }, include: {
                ContactChurch: true,
                AddressChruch: true,
            }
        })
        return responseBd
    }
    async findByCNPJChurch(cnpj: string): Promise<Church> {

        const responseBd = await this.prisma.church.findUnique({
            where: {
                cnpj: cnpj
            }, include: {
                ContactChurch: true,
                AddressChruch: true
            }
        })
        return responseBd
    }
    async deleteChurch(code: number): Promise<void> {
        //continuar desenvolvendo
        try {
            await this.prisma.church.delete({
                where: {
                    code: code
                },
                include: {
                    ContactChurch:true,
                    AddressChruch: true
                }
            })
        } catch (error) {
            return error.message
        }

    }

}