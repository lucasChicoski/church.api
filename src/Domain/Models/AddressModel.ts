import { ICreateAddress } from "../DTO/ICreateAddressRequestDTO";
import { v4 as uuidv4 } from "uuid"



export class AddressModel {
    
    public readonly id: string
    idChurch: string
    state: string
    city: string
    neighborhood: string
    street: string
    cep: string

    constructor(data: ICreateAddress, idChurch: string, id?: string) {

        this.id = id
        this.state = data.state
        this.city = data.city
        this.neighborhood = data.neighborhood
        this.street = data.street
        this.cep = data.cep
        this.idChurch = idChurch

        if (!id) {
            this.id = uuidv4()
        }
    }
}