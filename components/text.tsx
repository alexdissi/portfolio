"use client";

import {useTranslations} from "next-intl";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Text() {
    const t = useTranslations("index");
    return (
        <motion.section initial={{opacity: 0, x: +100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}} className={"w-4/6 text-xl mx-auto flex flex-col gap-6"}>
            <p>{t("bio")}</p>
            <Link href={"/CV.pdf"} target={"_blank"} className={"underline text-orange-500"}>{t("cv")}</Link>
            <div className="flex flex-row items-center gap-6 ">
                <div className="bg-green-500 w-4 md:h-4 h-3  rounded-full pulse-animation"></div>
                <span className="font-sans font-medium">
            Status : Developpeur FullStack chez <a className='underline' target="_blank"
                                                   href="https://www.cashnowmobile.com">CashNowMobile</a> depuis Novembre 2023
          </span>
            </div>

        </motion.section>
    );
}