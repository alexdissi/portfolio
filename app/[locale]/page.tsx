import {getTranslations} from "next-intl/server";
import Bio from "@/components/bio";
import Navigation from "@/components/navigation";
import Text from "@/components/text";
import Stack from "@/components/stack";
import {ThreeDCardDemo} from "@/components/project";
import {Form} from "@/components/form";
import Footer from "@/components/footer";


export default async function Home() {
  const t = await getTranslations("index");
    const projects = [
        {
            title: "InstaMint",
            description: t("instamintDescription"),
            image: "/instamint.png",
            items: ["NextJS","TailwindCSS","PostgreSQL"],
            link: "https://instamint.tech"
        },
        {
            title: "NextJS Boilerplate",
            description: t("boilerplateDescription"),
            image: "/next.jpg",
            items: ["NextJS","TailwindCSS","PostgreSQL, VercelBlob"],
            link: "https://github.com/alexdissi/boilerplate_next"
        },
        {
            title: "Gret@ Distance\n",
            description: t("gretaDescription"),
            image: "/greta.jpg",
            items: ["Symfony","TailwindCSS","MySQL","OpenAi"],
            link: "https://github.com/alexdissi/GretaDistance"
        }
    ];


    return (
   <main className={"flex flex-col gap-20 mx-6 md:mx-10 lg:mx-20 xl:mx-40 mt-10"}>
       <Navigation />
       <Bio />
       <Text />
       <Stack titleSection={t("stack")}/>
       <section className={"flex flex-col gap-10"} id={"projects"}>
           <h2 className={"font-bold text-4xl text-center"}>{t("titleProject")}</h2>
           <div className={"flex flex-col lg:flex-row lg:flex-wrap lg: items-center md:gap-5 lg:gap-10 justify-center"}>
               {projects.map((project, index) => (
                   <ThreeDCardDemo
                       key={index}
                       title={project.title}
                       description={project.description}
                       image={project.image}
                       items={project.items}
                       link={project.link}
                   />
               ))}
           </div>
        </section>
       <section className={"flex flex-col gap-10 items-center justify-evenly"} id={"contact"}>
           <h2 className={"font-bold text-4xl text-center"}>{t("contactme")}</h2>
           <Form />
       </section>
       <footer>
           <Footer />
       </footer>



   </main>
  );
}
