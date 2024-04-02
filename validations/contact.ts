/* eslint-disable camelcase */
import {TypeOf, object, string} from "zod"
export const contactSchema = object({
    name: string({ required_error: "namerequired" })
        .min(1, "namerequired")
        .max(32, "namemaxlength"),
    email: string({ required_error: "emailrequired" })
        .min(1, "emailrequired")
        .email("emailvalid"),
    message: string({ required_error: "messagerequired" })
        .min(1, "messagerequired")
        .max(1000, "messagemaxlength"),
})

export type contactUserInput = TypeOf<typeof contactSchema>

