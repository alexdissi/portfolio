"use client";
import Link from "next/link";
import {motion} from "framer-motion";

interface TextProps {
    bio: string;
    cv: string;
    status1: string;
    status2: string;
}

export default function Text({bio, cv, status1, status2}: TextProps) {
    return (
        <motion.section initial={{opacity: 0, x: +100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}} className={"w-4/6 text-xl mx-auto flex flex-col gap-6"}>
            <p>{bio}</p>
            <Link href={"/CV.pdf"} target={"_blank"} className={"underline text-orange-500"}>{cv}</Link>
            <div className="flex flex-row items-center gap-6 ">
                <div className="bg-green-500 w-16 md:w-4 md:h-4 h-4 rounded-full pulse-animation"></div>
                <span className="font-sans font-medium">
            Status : {status1} <a className='underline' target="_blank"
                                                   href="https://www.cashnowmobile.com">CashNowMobile</a> {status2}
          </span>
            </div>
        </motion.section>
    );
}