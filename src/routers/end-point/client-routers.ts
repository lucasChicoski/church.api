import { CreateClientController } from "../../Aplication/client/CreateClientController";
import { UpdateClientController } from "../../Aplication/client/UpdateClientController";
import DeleteClientController from "../../Aplication/client/DeleteClientController";
import routers from "../../app"
import GetAllClientsController from "../../Aplication/client/GetAllClientsController";

export default function clientRouters() {
    routers.postRouter("create-client", (req, res) => { new CreateClientController().hendle(req, res) })
    routers.deleteRouter("delete-client", (req, res) => { new DeleteClientController().handle(req, res) })
    routers.updateRouter("update-client", (req, res) => { new UpdateClientController().handle(req, res) })
    routers.getRouter("getAll-client", (req, res) => { new GetAllClientsController().handle(req, res) })
}