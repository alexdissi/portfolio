"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import {Button} from "@/components/ui/button"
import {motion} from "framer-motion"
import {contactSchema, contactUserInput} from "@/validations/contact";
import {toast} from "sonner";
import {useTranslations} from "next-intl";

import {Textarea} from "@/components/ui/textarea";
import {Loader2} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export const Form = () => {
    const router = useRouter()
    const t = useTranslations("index")
    const [loading, setLoading] = useState(false)
    const methods = useForm<contactUserInput>({
        resolver: zodResolver(contactSchema),
    })
    const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
    } = methods
    const onSubmitHandler: SubmitHandler<contactUserInput> = async (data) => {
        try {
            setLoading(true)
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const responseData = await response.json()

            if (!response.ok) {
                throw new Error(responseData.message)
            }

            toast.success(t("messageSuccess"), { position: "top-right" })
            setLoading(false)
            reset()
            setTimeout(() => {
                router.refresh()
            }, 1000)
        } catch (error: string | any) {
            toast.error(t("registerFailed"), { duration: 2000, position: "top-right" })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-4 w-5/6 md:w-3/6 lg:w-2/6" onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <Label htmlFor="name">Name:</Label>
                <Input
                    type='text'
                    {...register("name")}
                    placeholder={t("placeholderName")}
                />
                {errors.email && (
                    <span className='text-red-500 text-xs pt-1 block'>
                        {t(`${errors.email?.message as string}`)}
                    </span>
                )}
            </div>
            <div>
                <Label htmlFor="email">Email:</Label>
                <Input
                    type='email'
                    {...register("email")}
                    placeholder={t("placeholderEmail")}
                />
                {errors.email && (
                    <span className='text-red-500 text-xs pt-1 block'>
                        {t(`${errors.email?.message as string}`)}
                    </span>
                )}
            </div>
            <div>
                <Label htmlFor="message">Message:</Label>
                <Textarea {...register("message")} placeholder={t("placeholderMessage")} />
                {errors.message && (
                    <span className='text-red-500 text-xs pt-1 block'>
                        {t(`${errors.message?.message as string}`)}
                    </span>
                )}
            </div>
            {loading ? (
                <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("buttonLoading")}
                </Button>
            ) : (
                <Button>
                    {t("buttonSend")}
                </Button>
            )}
        </form>
    )
}
