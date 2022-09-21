import { LoginController } from "../../Aplication/login/LoginController"
import routers from "../../app"


export default function loginRouters(){
    routers.postRouter("login-client", (req, res) => new LoginController().handle(req, res) )
}