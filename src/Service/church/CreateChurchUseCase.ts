import { ICreateChurchRequestDTO } from "../../Domain/DTO/ICreateChurchRequestDTO";
import { ICreateContactRequestDTO } from "../../Domain/DTO/ICreateContactChurchRequestDTO";
import { Church } from "../../Domain/Models/ChurchModel";
import { ContactModel } from "../../Domain/Models/ContactModel";
import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";
import { MySqlContactRepository } from "../../Infrastructure/Data/contact_repository/MySqlContactRepository";





export class CreateChurchUseCase {
    churchRepository: MySqlChurchRepository
    contactRepository: MySqlContactRepository

    constructor() {
        this.churchRepository = new MySqlChurchRepository()
        this.contactRepository = new MySqlContactRepository()
    }

    async execute(data: ICreateChurchRequestDTO, contact: ICreateContactRequestDTO) {

        const findChurchResponse = await this.churchRepository.findByCNPJChurch(data.cnpj)
        const findContactResponse = await this.contactRepository.findByEmailContact(contact.email)

        if (findChurchResponse || findContactResponse) {

            if (findChurchResponse) {
                return {
                    status_code: 400,
                    message: "Igreja Já Cadastrada",
                }
            } else {
                return {
                    status_code: 400,
                    message: "Email Já Cadastrado",
                }
            }

        }

        const newChurch = new Church({ churchName: data.churchName, cnpj: data.cnpj, religion: data.religion })
        const createResponse = await this.churchRepository.saveChurch(newChurch)
        const newContact = new ContactModel({ email: contact.email, phoneNumber: contact.phoneNumber }, createResponse.id)
        const createContactResponse = await this.contactRepository.saveContact(newContact)

        return {
            status_code: 400,
            message: "Igreja Cadastrada Com Sucesso!",
            data: { createResponse, contact: createContactResponse }
        }

    }

}