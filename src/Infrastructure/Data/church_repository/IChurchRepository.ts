import { Church } from "../../../Domain/Models/ChurchModel"



export interface IChurchRepository {
    saveChurch(church: Church): Promise<Church>
    updateChurch(church: Church): Promise<Church>
    findByCodeChurch(code: number): Promise<Church>
    findByCNPJChurch(cnpj: String): Promise<Church>
    deleteChurch(code: number): Promise<void>
    findAllChurch(): Promise<Church[]>
}