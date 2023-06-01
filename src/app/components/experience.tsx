export default function Experience() {
  return (
    <div>
      <h2
        className="font-mono font-extrabold text-3xl text-solidheadinglight dark:text-solidheadingdark"
        data-aos="zoom-in"
      >
        Work Experience
      </h2>
      <div
        className="flex flex-col gap-9 mt-7 font-sans font-normal text-md"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-3 md:gap-0 text-center md:text-left md:flex-row justify-between w-full items-center ">
          <div className="flex flex-col gap-5">
            <h3>Front Web Developper</h3>
            <h4>CAFOC</h4>
          </div>
          <div className="flex flex-col gap-5 w-72 text-center">
            <div className="bg-good text-sm  drop-shadow-xl w-32 py-1 px-1 text-txtgood text-center rounded-lg mx-auto">
              Internship
            </div>
            <h5>Avr 2023 - Jui 2023</h5>
          </div>
        </div>
        <div
          className="flex flex-col gap-3 md:gap-0 text-center md:text-left md:flex-row justify-between w-full items-center "
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-5">
            <h3>Full Stack Developper</h3>
            <h4>ENS ( Ecole Normal Superieur ) </h4>
          </div>
          <div className="flex flex-col gap-5 w-72 text-center">
            <div className="bg-good text-sm  drop-shadow-xl w-32 py-1 px-1 text-txtgood text-center rounded-lg mx-auto">
              Internship
            </div>
            <h5>Mar 2022 - Jui 22</h5>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-10" />
      <h2
        className="font-mono font-extrabold text-3xl mt-7 text-solidheadinglight dark:text-solidheadingdark"
        data-aos="zoom-in"
      >
        Education
      </h2>
      <div
        className="flex flex-col gap-9 mt-7 font-mono font-normal text-md"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-3 md:gap-0 text-center md:text-left md:flex-row justify-between w-full items-center ">
          <div className="flex flex-col gap-5">
            <h3>Titre CDA ( Concepteur développeur d’application ) </h3>
            <h4>Greta 93</h4>
          </div>
          <div className="flex flex-col gap-5 w-72 text-center">
            <div className="bg-good text-sm  drop-shadow-xl w-32 py-1 px-1 text-txtgood text-center rounded-lg mx-auto">
              Full Time
            </div>
            <h5>Nov 2022 - Jui 2023</h5>
          </div>
        </div>
        <div
          className="flex flex-col gap-3 md:gap-0 text-center md:text-left md:flex-row justify-between w-full items-center "
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-5">
            <h3>Developpeur Web</h3>
            <h4> Greta 93 </h4>
          </div>
          <div className="flex flex-col gap-5 w-72 text-center">
            <div className="bg-good text-sm  drop-shadow-xl w-32 py-1 px-1 text-txtgood text-center rounded-lg mx-auto">
              Full Time
            </div>
            <h5>Oct 2021 - Jui 2022</h5>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-10" />
    </div>
  );
}
