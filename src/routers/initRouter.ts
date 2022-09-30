import { routersChurch } from "./end-point/church-routers";
import clientRouters from "./end-point/client-routers"
import loginRouters from "./end-point/loginRouter";
import { statusRouter } from "./end-point/status-router";
import { testeRouter } from "./end-point/test-router";

function initRouter() {
    clientRouters();
    loginRouters();
    routersChurch();
    statusRouter();
    //excluir
    testeRouter()
}

export default initRouter