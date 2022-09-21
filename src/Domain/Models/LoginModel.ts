import { ILoginRequestDTO } from "../DTO/ILoginRequestDTO";



export default class LoginModel {
    email: string;
    password: string;

    constructor(data: ILoginRequestDTO) {
        this.email = data.email;
        this.password = data.password;
    }
}