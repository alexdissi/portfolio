export default function Project() {
    const elExperience = [
        {
            id: 1,
            titre: 'Projet 1',
            Description: 'fgnjdfngjfdngjdfngkfdgnfdkgnfdkgnfdkgjndfjgndfgjdfngjdfg fjdg dfjg dfjg fdgkfd gkfd gkfdg',
            techno: ["php", "Javasript"],
            link: "www.github.fr"
        },
        {
            id: 2,
            titre: 'Projet 2',
            Description: 'fgnjdfngjfdngjdfngkfdgnfdkgnfdkgnfdkgjndfjgndfgjdfngjdfg fjdg dfjg dfjg fdgkfd gkfd gkfdg',
            techno: ["React", "SQL"],
            link: "www.github.fr"
        },
        {
            id: 3,
            titre: 'Projet 3',
            Description: 'fgnjdfngjfdngjdfngkfdgnfdkgnfdkgnfdkgjndfjgndfgjdfngjdfg fjdg dfjg dfjg fdgkfd gkfd gkfdg',
            techno: ["php", "Javasript"],
            link: "www.github.fr"
        },
    ];

    return (
        <div className="flex flex-col flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap lg:flex-row gap-10 justify-center mx-auto" data-aos="flip-right" id="project">
            {elExperience.map((experience) => (
                <article
                    key={experience.id}
                    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl w-80 md:w-96"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6 flex flex-col gap-3">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">{experience.titre}</h3>
                        </div>

                        <div>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {experience.Description}
                            </p>
                        </div>

                        <div className="flex flex-row gap-3">
                            {experience.techno.map((tech) => (
                                <span
                                    key={tech}
                                    className="whitespace-nowrap rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div>
                            <a
                                href={experience.link}
                                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                            >
                                Find out more

                                <span
                                    aria-hidden="true"
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
