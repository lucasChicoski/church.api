import clientRouters from "./end-point/client-routers"
import loginRouters from "./end-point/loginRouter";

function initRouter() {
    clientRouters();
    loginRouters()
}

export default initRouter