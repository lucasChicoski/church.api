import { AddressModel } from "../../../Domain/Models/AddressModel"

export interface IAddressRepository {
    saveAddress(address: AddressModel): Promise<AddressModel>
    updateAddress(address: AddressModel): Promise<AddressModel>
    findByIdAddress(id: string): Promise<AddressModel>
}