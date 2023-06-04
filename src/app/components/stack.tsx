import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiSymfony,
  SiMysql,
  SiPrisma,
  SiGit,
} from "react-icons/si";
export default function Stack() {
  return (
    <div
      className="flex flex-col justify-center items-center"
      data-aos="fade-up"
      id="stack"
    >
      <div>
        <h2 className="font-mono font-extrabold text-3xl text-solidheadinglight dark:text-solidheadingdark">
          My Tech Stack
        </h2>
      </div>
      <div>
        <h3 className="text-lg md:text-2xl  text-center font-mono font-medium text-lightcontent dark:text-darkcontent mt-3">
          Technologies I&apos;ve been working with recently
        </h3>
      </div>
      <div className="flex flex-row justify-center items-center text-4xl gap-6  md:text-[100px] md:gap-20 mt-10 cursor-pointer">
        <SiJavascript className="hover:text-jscolor duration-300" />
        <SiTypescript className="hover:text-tscolor duration-300" />
        <SiReact className="hover:text-reactcolor duration-300" />
        <SiTailwindcss className="hover:text-tailwindcolor duration-300" />
        <SiGit className="hover:text-gitcolor duration-300" />
      </div>
      <div className="flex flex-row justify-center items-center text-4xl gap-6 md:text-[100px] md:gap-20 mt-10 cursor-pointer">
        <SiPhp className="hover:text-phpcolor duration-300" />
        <SiNextdotjs />
        <SiSymfony />
        <SiMysql className="hover:text-mysqlcolor duration-300" />
        <SiPrisma className="hover:text-prismacolor duration-300" />
      </div>
    </div>
  );
}
