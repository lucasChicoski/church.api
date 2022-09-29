import { Church } from "../../../Domain/Models/ChurchModel"



export interface IChurchRepository {
    saveChurch(church: Church): Promise<Church>
    updateChurch(church: Church): Promise<Church>
    findByCodeChurch(code: Number): Promise<Church>
    findByCNPJChurch(cnpj: String): Promise<Church>
    deleteChurch(code: Number): Promise<void>
    getAllChurch(): Promise<Church[]>
}