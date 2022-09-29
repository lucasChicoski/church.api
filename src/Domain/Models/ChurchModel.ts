import { ICreateChurchRequestDTO } from "../DTO/ICreateChurchRequestDTO";
import { v4 as uuidv4 } from 'uuid';


export class Church {

    public readonly id: string;
    churchName: string;
    religion: string;
    cnpj: string

    constructor(data: ICreateChurchRequestDTO, id?: string) {
        this.churchName = data.churchName
        this.cnpj = data.cnpj
        this.religion = data.religion

        if (!id) {
            this.id = uuidv4()
        }
    }


}