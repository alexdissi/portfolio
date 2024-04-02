"use client";
import Avatar from "@/components/avatar";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

export default function Bio () {
    const t = useTranslations("index");
  return (
      <motion.section  initial={{opacity: 0, x: -100}}
                       animate={{opacity: 1, x: 0}}
                       transition={{duration: 0.5}} className={"flex flex-col-reverse lg:flex-row text-center lg:text-left gap-5 md:gap-0 items-center justify-between mx-20"}>
          <div className={"scroll-m-20 text-4xl mt-6 lg:mt-0 font-extrabold tracking-tight lg:text-5xl xl:text-6xl"}>
              <h1>{t("title")},</h1>
              <h2>{t("subtitle")} <span className={"text-orange-500"}>Alexandre Dissi</span></h2>
              <h2>{t("function")}</h2>
          </div>
          <Avatar />
      </motion.section>

  )
}