import LoginClientUseCase from "../../Service/login/LoginClientUseCase";

export class LoginController {
    loginClientUseCase: LoginClientUseCase

    constructor() {
        this.loginClientUseCase = new LoginClientUseCase()
    }


    async handle(req, res) {

        const { email, password } = req.body

        const response = await this.loginClientUseCase.execute({ email, password })

        res.send(response)
    }
}