import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";




export class FindAllChurchUseCase {
    churchRepository: MySqlChurchRepository
    constructor() {
        this.churchRepository = new MySqlChurchRepository()
    }

    async handle() {
        const response = await this.churchRepository.findAllChurch()

        if (response) {
            return {
                status_code: 400,
                data: response
            }
        } else {
            return {
                status_code: 400,
                message: "Não Foi Possível Encontrar Nenhuma Igreja",
            }
        }
    }
}