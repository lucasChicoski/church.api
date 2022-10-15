import { v4 as uuidv4 } from 'uuid';
import { ICreateContactRequestDTO } from "../DTO/ICreateContactChurchRequestDTO";




export class ContactModel {

    public readonly id: string
    email: string;
    phoneNumber: string;
    idChurch: string

    constructor(contact: ICreateContactRequestDTO, id_church: string, id?: string) {
        this.email = contact.email;
        this.phoneNumber = contact.phoneNumber;
        this.idChurch = id_church

        if (!id) {
            this.id = uuidv4()
        } else {
            this.id = id
        }
    }
}