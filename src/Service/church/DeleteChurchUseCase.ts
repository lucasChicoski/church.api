import { MySqlChurchRepository } from "../../Infrastructure/Data/church_repository/MySqlChurchRepository";





export class DeleteChurchUseCase {
    churchRepositroy: MySqlChurchRepository
    constructor() {
        this.churchRepositroy = new MySqlChurchRepository()
    }


    async execute(code: number) {

        const responseChurch = await this.churchRepositroy.findByCodeChurch(code)


        if (responseChurch) {
            await this.churchRepositroy.deleteChurch(code)
            return {
                status_code: 400,
                message: "Igreja deletada",
            }
        }
        return {
            status_code: 400,
            message: "Igreja não Cadastrada",
        }


    }
}