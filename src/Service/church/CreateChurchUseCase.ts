import { ICreateChurchRequestDTO } from "../../Domain/DTO/ICreateChurchRequestDTO";
import { Church } from "../../Domain/Models/ChurchModel";
import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";





export class CreateChurchUseCase {
    churchRepository: MySqlChurchRepository

    constructor() {
        this.churchRepository = new MySqlChurchRepository()
    }

    async execute(data: ICreateChurchRequestDTO) {

        const response = await this.churchRepository.findByCNPJChurch(data.cnpj)
        console.log("cadastrou2", response)
        if (response) {
            console.log("Essa igreja ja é Cadastrada")
            return
        }

        const newChurch = new Church({ churchName: data.churchName, cnpj: data.cnpj, religion: data.religion })

        await this.churchRepository.saveChurch(newChurch).then((response) => {
            console.log("cadastrou", response)
            return
        })

    }

}