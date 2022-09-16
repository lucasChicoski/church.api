import { v4 as uuidv4 } from 'uuid';
import { ICreateClientRequestDTO } from '../DTO/ICreateClientRequestDTO';



export class Client {
    public readonly id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    id_church: string;


    constructor(data: ICreateClientRequestDTO, id?: string) {
        this.id = id
        this.name = data.name
        this.lastName = data.lastName
        this.email = data.email
        this.phone = data.phone
        this.password = data.password
        this.id_church = data.id_church

        if (!id) {
            this.id = uuidv4()
        }
    }
}