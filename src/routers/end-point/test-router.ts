import { PrismaClient } from "@prisma/client"
import routers from "../../app";


export function testeRouter() {
    const prisma = new PrismaClient()
    routers.postRouter("contact-church", async (req, res) => {
        console.log("bateu")
        const { email, id, phoneNumber, idChurch } = req.body
        const x = await prisma.contactChurch.create({
            data: {
                email: email,
                id: id,
                phoneNumber: phoneNumber,
                idChurch: idChurch,
            }
        })

        console.log("terminou", x)
    })
}