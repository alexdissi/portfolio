export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Contact
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-300">
          For opportunities, consulting, or questions.
        </p>

        <div className="space-y-3">
          <a
            href="mailto:contact@figenn.com"
            className="text-gray-900 dark:text-gray-100 underline underline-offset-4"
          >
            contact@figenn.com
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">France</p>
        </div>
      </div>
    </main>
  );
}
