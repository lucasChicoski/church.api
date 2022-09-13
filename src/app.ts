import express, { Router } from "express"
import dotenv from "dotenv"
import Routers from "./routers/config/routers"
import initRouter from "./routers/initRouter"
import ServerConfig from "./serverConfig"

dotenv.config()

const app = express();
const router = Router();

let routers = new Routers(app, router);
export default routers;

initRouter();

new ServerConfig(app, router).runServer(Number(process.env.PORT))

