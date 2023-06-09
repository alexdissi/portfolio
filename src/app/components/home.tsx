import Typewriter from "typewriter-effect";

export default function HomePresentation() {
  return (
    <div
      className="flex flex-col-reverse gap-0 md:flex-col-reverse lg:flex-row text-center md:text-left md:justify-between items-center xl:h-[550px]"
      id="home"
    >
      <div data-aos="fade-right">
        <div className="text-5xl text-center md:text-left md:text-6xl xl:text-8xl font-sans font-extrabold mt-4 xl:leading-tight text-solidheadinglight dark:text-solidheadingdark">
          <Typewriter
            options={{
              delay: 40,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi ,")
                .pauseFor(200)
                .typeString("<br>")
                .pauseFor(200)
                .typeString("My name is")
                .pauseFor(200)
                .typeString("<br>")
                .pauseFor(200)
                .typeString(
                  '<span class="bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500">Alexandre Dissi,</span>'
                )
                .pauseFor(200)
                .typeString("<br>")
                .pauseFor(200)
                .typeString("I’m Web Developer")
                .start();
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left">
        <div className="p-2 bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full">
          <img
            src="/photoprofil.png"
            alt="Photo de profil de Alexandre Dissi"
            className="rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 xl:w-80 xl:h-80"
          />
        </div>
      </div>
    </div>
  );
}
