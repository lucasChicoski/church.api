import { Application, Router } from "express";
import bodyParser from "body-parser"

export default class Routers {
    app: Application
    router: Router

    constructor(aplication: Application, router: Router) {
        this.app = aplication
        this.router = router
    }

    getRouter(nameRouter: string, businessRules: any) {
        this.router.get(`/${nameRouter}`, businessRules)
    }
    postRouter(nameRouter: string, businessRules: any) {
        this.router.post(`/${nameRouter}`, businessRules)
    }
  
    updateRouter(nameRouter: string, businessRules: any) {
        this.router.put(`/${nameRouter}`, businessRules)
    }
    deleteRouter(nameRouter: string, businessRules: any) {
        this.router.delete(`/${nameRouter}`, businessRules)
    }
}