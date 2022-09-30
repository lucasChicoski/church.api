import { ICreateChurchRequestDTO } from "../../Domain/DTO/ICreateChurchRequestDTO";
import { Church } from "../../Domain/Models/ChurchModel";
import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";





export class CreateChurchUseCase {
    churchRepository: MySqlChurchRepository

    constructor() {
        this.churchRepository = new MySqlChurchRepository()
    }

    async execute(data: ICreateChurchRequestDTO) {

        const findResponse = await this.churchRepository.findByCNPJChurch(data.cnpj)

        if (findResponse) {
            return {
                status_code: 400,
                message: "Igreja Já Cadastrada",
            }
        }

        const newChurch = new Church({ churchName: data.churchName, cnpj: data.cnpj, religion: data.religion })

        const createResponse = await this.churchRepository.saveChurch(newChurch)

        return {
            status_code: 400,
            message: "Igreja Cadastrada Com Sucesso!",
            data: createResponse
        }

    }

}