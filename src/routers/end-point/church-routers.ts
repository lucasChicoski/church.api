import { CreateChurchController } from "../../Aplication/church/CreateChurchController"
import { FindAllChurchController } from "../../Aplication/church/FindAllChurchController"
import { FindChurchByCodeController } from "../../Aplication/church/FindChurchByCodeController"
import routers from "../../app"



export function routersChurch() {
    routers.postRouter("create-church", (req, res) => new CreateChurchController().handle(req, res))
    routers.getRouter("find-church-by-code", (req, res) => new FindChurchByCodeController().handle(req, res))
    routers.getRouter("find-all-church", (req, res) => new FindAllChurchController().handle(req, res))
}