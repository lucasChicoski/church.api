import { CreateChurchController } from "../../Aplication/church/CreateChurchController"
import routers from "../../app"



export function routersChurch() {
    routers.postRouter("create-church", (req, res) => new CreateChurchController().handle(req, res))
}