import { PrismaClient } from "@prisma/client";
import { AddressModel } from "../../../Domain/Models/AddressModel";
import { IAddressRepository } from "./IAddressReposiotry";




export class MySqlAddressRepository implements IAddressRepository {
    prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async saveAddress(address: AddressModel): Promise<AddressModel> {

        const response = await this.prisma.addressChruch.create({
            data: address
        })

        return response
    }
    updateAddress(address: AddressModel): Promise<AddressModel> {
        throw new Error("Method not implemented.");
    }
    findByIdAddress(id: string): Promise<AddressModel> {
        throw new Error("Method not implemented.");
    }
}