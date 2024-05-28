"use client";
import Avatar from "@/components/avatar";
import {motion} from "framer-motion";
import DotPattern from "@/components/ui/dot-pattern";
import {cn} from "@/lib/utils";
interface BioProps {
    title: string;
    subtitle: string;
    poste: string;
}
export default function Bio ({title, subtitle, poste}: BioProps) {
  return (
      <motion.section  initial={{opacity: 0, x: -100}}
                       animate={{opacity: 1, x: 0}}
                       transition={{duration: 0.5}} className={"flex flex-col-reverse lg:flex-row text-center lg:text-left gap-5 md:gap-0 items-center justify-between mx-20"}>
              <div
                  className="relative flex flex-col h-full w-full items-start justify-center overflow-hidden rounded-lg p-10 scroll-m-20 text-4xl mt-6 lg:mt-0 font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
                  <h1 className={"z-40"}>{title} ,</h1>
                  <h2>{subtitle}&nbsp;<span className={"text-orange-500"}>Alexandre Dissi</span></h2>
                  <h2>{poste}</h2>
                  <DotPattern
                      width={30}
                      height={30}
                      cx={2}
                      cy={2}
                      cr={2}
                      className={cn(
                          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                      )}
                  />
              </div>
          <Avatar/>
      </motion.section>
  )
}