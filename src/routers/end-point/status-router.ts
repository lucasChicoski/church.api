import routers from "../../app"

export function statusRouter(){
    routers.getRouter("status", (req, res) => {res.send("Api De pé")})
}