import AuthenticationLayer from "../../Authentication/Authentication";
import LoginModel from "../../Domain/Models/LoginModel";
import { MySqlClientRepository } from "../../Infrastructure/Data/client_repository/MySqlClientRepository";

export default class LoginClientUseCase {
    clientRepository: MySqlClientRepository
    authentication: AuthenticationLayer
    constructor() {
        this.clientRepository = new MySqlClientRepository()
        this.authentication = new AuthenticationLayer()
    }

    async execute({ email, password }: LoginModel) {
        const response = await this.clientRepository.findClientByEmail(email)

        if (response) {
            if (email === response.email && password === response.password) {

                const token = this.authentication.generateTokenClient(response)

                return {
                    status_code: 200,
                    message: {
                        token,
                        name: response.name,
                        photo: response.photo,
                        email: response.email,
                        id_chruch: response.id_church,
                    }
                }
            }
            return {
                status_code: 200,
                message: "Verifique Suas Credenciais"
            }
        }


        return {
            status_code: 200,
            message: "Nenhum Usuário Encontrado"
        }
    }

}