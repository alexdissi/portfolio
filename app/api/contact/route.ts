import {NextResponse} from "next/server"
import prisma from "@/db/prisma"
import {contactSchema} from "@/validations/contact";
import {sendMail} from "@/utils/mailer";
export async function POST(req: Request) {
    const {name, email, message} = contactSchema.parse(await req.json())
    const cleanEmail: string = email.toLowerCase()
    const cleanMessage: string = message.toLowerCase()

    if (!name || !email || !message) {
        return NextResponse.json("Missing Fields", {status: 400})
    }

    await prisma.contact.create({
        data: {
            name,
            email: cleanEmail,
            content: cleanMessage,
        },
    })

    await sendMail("alexandredissi@gmail.com", "Nouveau message sur ton portfolio", `Tu a un nouveau message de ${name} , sont email est ${cleanEmail} , Message: ${cleanMessage}`)


    return NextResponse.json("Message send", {status: 200})
}