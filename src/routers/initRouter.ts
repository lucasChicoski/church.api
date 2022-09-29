import { routersChurch } from "./end-point/church-routers";
import clientRouters from "./end-point/client-routers"
import loginRouters from "./end-point/loginRouter";

function initRouter() {
    clientRouters();
    loginRouters();
    routersChurch();
}

export default initRouter