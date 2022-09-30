import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";





export class FindChurchByCodeUseCase {
    churchRepository: MySqlChurchRepository
    constructor() {
        this.churchRepository = new MySqlChurchRepository()
    }


    async execute(code: number) {

        const responseDb = await this.churchRepository.findByCodeChurch(code)

        if (responseDb) {
            return {
                status_code: 400,
                message: "Igreja encontrada!",
                data: responseDb
            }
        } else {
            return {
                status_code: 400,
                message: "Não Foi Possível Encontrar a Igreja",
            }
        }


    }
}