import { Application, Router } from "express";
import bodyParser from "body-parser"
import AuthenticationLayer from "../../Authentication/Authentication";

export default class Routers {
    app: Application
    router: Router
    verifyTokenClient: AuthenticationLayer
    constructor(aplication: Application, router: Router) {
        this.app = aplication
        this.router = router
        this.verifyTokenClient = new AuthenticationLayer()
    }

    getRouter(nameRouter: string, businessRules: any) {
        this.router.get(`/${nameRouter}`, businessRules)
    }
    postRouter(nameRouter: string, businessRules: any) {
        this.router.post(`/${nameRouter}`, businessRules)
    }
  
    updateRouter(nameRouter: string, businessRules: any) {
        this.router.put(`/${nameRouter}`, this.verifyTokenClient.verifyTokenClient ,businessRules)
    }
    deleteRouter(nameRouter: string, businessRules: any) {
        this.router.delete(`/${nameRouter}`,this.verifyTokenClient.verifyTokenClient ,businessRules)
    }
}