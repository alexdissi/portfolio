export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Projects
        </h1>

        <p className="mb-10 text-gray-600 dark:text-gray-300">
          A few things I’ve worked on (high-level). If you want details or code
          samples, reach out.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
              Hublead — LinkedIn → HubSpot extension
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Chrome extension and backend services that help sales teams import
              leads and sync activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
              SaaS platforms — backend & scaling
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Go services, REST APIs, clean architecture, and performance work.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
