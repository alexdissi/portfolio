import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center pb-16 text-center sm:pb-20">
          <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <Image
              src="/profil.png"
              alt="Profile"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="mb-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Alexandre Dissi
          </h1>
          <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
            Software Engineer (Go / React)
          </p>
          <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">France</p>

          <div className="mb-12 text-gray-600 dark:text-gray-300 max-w-lg">
            <p className="text-lg leading-relaxed">
              Software Engineer passionate about building scalable SaaS
              applications and high-impact web solutions. Currently helping
              Hublead.io grow by designing and delivering robust backend
              services in Go and modern front-end experiences with React.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Curious and always learning, I focus on clean architecture,
              performance, and cutting-edge technologies to deliver real value
              through software.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
              Go
            </span>
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
              Python
            </span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Hublead</h3>
                <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
              </div>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Sep 2025 – Present</span> • France
                • Hybrid
              </div>
              <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Jan 2025 – Sep 2025</span> • Paris
                • Hybrid (Apprenticeship)
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Working on a Chrome extension that integrates LinkedIn with
                HubSpot, enabling sales professionals to import contacts and
                sync activities seamlessly. Helping scale the platform that
                serves thousands of users with robust backend services in Go and
                modern front-end experiences.
              </p>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">CashNow</h3>
                <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
              </div>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Oct 2023 – Jan 2025</span> •
                Greater Paris Metropolitan Region (Apprenticeship)
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Worked on the development of a SaaS platform for financial
                management and risk monitoring. Tech: Front-end, Symfony, +
                additional skills.
              </p>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">CAFOC</h3>
                <p className="text-gray-600 dark:text-gray-300">Front-end Developer</p>
              </div>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Apr 2023 – Jun 2023</span> •
                Créteil, France • Hybrid (Internship)
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                • Front-end feature development
                <br />• Improvements to the Gret@ Distance training platform
                <br />
                Tech: Front-end development, UI/UX implementation
              </p>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  École Normale Supérieure (ENS)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
              </div>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Mar 2022 – Jun 2022</span> • Paris
                • On-site (Internship)
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                • Creation of an internship offer platform
                <br />• End-to-end front-end development
                <br />
                Tech: Front-end development, UI conception
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Education
          </h2>

          <div className="space-y-8">
            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Sup de Vinci — École d&lsquo;Informatique
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Master&lsquo;s Degree (Development specialization), Computer
                  Science
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Sep 2023 – Sep 2025</span> •
                Level: Bac +5
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">GRETA 93</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Application Developer, Computer Science
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Nov 2022 – Jul 2023</span> •
                Level: Bac +3
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Oct 2021 – Jul 2022</span> • Web &
                Mobile Web Developer (DWWM) • Level: Bac +2
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Lycée Champlain
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  STI2D — Technological Baccalaureate
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Sep 2014 – Jul 2017</span> •
                Diploma obtained
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>

          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Languages & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Go
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                TypeScript
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Python
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                React.js
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Next.js
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Concepts & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Clean architecture
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                REST APIs
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                SaaS platforms
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Hybrid & on-site development workflows
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center space-x-6">
            <a
              href="https://www.linkedin.com/in/alexandredissi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alexdissi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-100 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
