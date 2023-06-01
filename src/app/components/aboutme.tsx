export default function AboutMe() {
  return (
    <div className="flex flex-col" data-aos="zoom-in" id="about">
      <div>
        <h2 className="font-mono font-extrabold text-3xl text-solidheadinglight dark:text-solidheadingdark">
          About Me
        </h2>
      </div>
      <div className="bg-danger text-sm  drop-shadow-xl w-32 py-1 px-1 text-white text-center rounded-lg mt-6">
        Unemployed
      </div>
      <div className="mt-7">
        <p className="text-justify text-lg font-sans font-medium text-lightcontent dark:text-darkcontent">
          Hello, my name is Alexandre Dissi, I&apos;m 24 and I&apos;m a web
          developer. I&apos;ve taken two training courses, one as a web
          developer and the other as an application designer and developer,
          which have enabled me to acquire a wide range of skills. This
          portfolio highlights my skills in design and front-end development.
          You can download my CV below. Feel free to explore my portfolio to
          discover my projects and achievements. I&apos;ve worked on various web
          technologies such as JavaScript, React, Java and frameworks like
          React, Next JS and Symfony. I place great importance on user
          experience and the creation of aesthetic, user-friendly interfaces. If
          you have any questions or would like to discuss potential
          collaborations, please don&apos;t hesitate to contact me. I&apos;m
          open to work opportunities and always ready to take on new challenges.
          Thank you for your visit and for your interest in my work.
        </p>
      </div>
      <div className="ml-auto mt-7 text-center">
        <a
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          href="/CV.pdf"
          target="_blank"
        >
          <span className="relative w-28 py-3 transition-all ease-in duration-75 bg-bglight dark:bg-bgdark rounded-md group-hover:bg-opacity-0">
            Download CV
          </span>
        </a>
      </div>
    </div>
  );
}
