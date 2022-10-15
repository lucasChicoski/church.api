import { ContactModel } from "../../../Domain/Models/ContactModel"


export interface IContactRepository {
    saveContact(contact: ContactModel): Promise<ContactModel>
    updateContact(contact: ContactModel): Promise<ContactModel>
    findByEmailContact(email: string): Promise<ContactModel>
}