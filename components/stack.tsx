"use client"
import { SiGit, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSymfony, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

export default function Stack({titleSection} : {titleSection: string}){
    const icons = [
        SiTypescript, SiNextdotjs, SiReact, SiNodedotjs,
        SiTailwindcss, SiSymfony, SiGit, SiPostgresql, SiMysql, SiVercel
    ];
    const renderIcons = () => {
        return icons.map((Icon, index) => (
            <Icon key={index} />
        ));
    };

    const iconSizeClasses = "text-5xl md:text-7xl lg:text-8xl";
    const ulClasses = "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll";
    const divClasses = "w-9/12 mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]";


    return (
        <motion.section initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}} className={"flex flex-col gap-10"} id={"stack"}>
            <h2 className={"font-bold text-4xl text-center"}>{titleSection}</h2>
            <div className={divClasses}>
                <ul className={ulClasses}>
                    <li className={`flex flex-row gap-20 ${iconSizeClasses}`}>
                        {renderIcons()}
                    </li>
                </ul>
                <ul className={ulClasses}>
                    <li className={`flex flex-row gap-20 ${iconSizeClasses}`}>
                        {renderIcons()}
                    </li>
                </ul>
            </div>
        </motion.section>

    );
}
