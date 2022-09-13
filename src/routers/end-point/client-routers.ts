import { CreateClientController } from "../../Aplication/client/CreateClientController";
import routers from "../../app"

export default function clientRouters() {
    routers.postRouter("create-client", (req, res) => { new CreateClientController().hendle(req, res) })
}