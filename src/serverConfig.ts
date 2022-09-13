import { Application, Router } from "express";
import bodyParser from "body-parser"

export default class ServerConfig {
   app: Application
   router: Router

   constructor(aplication: Application, router: Router) {
      this.app = aplication
      this.router = router
      this.app.use(bodyParser.json())
      this.app.use(this.router)
   }

   runServer(port: number) {
      this.app.listen(port, () => {
         console.log("Servico de pé")
      })
   }

}

