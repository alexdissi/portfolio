import { createClient } from "@supabase/supabase-js";
import { exit } from "process";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
let supabase: any;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  exit();
}

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification des champs requis
    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Enregistrement des données dans la table "contact" de Supabase
    const { data, error } = await supabase
      .from("contact")
      .insert([{ name, email, message }]);

    if (error) {
      console.error(
        "Une erreur s'est produite lors de l'enregistrement des données :",
        error
      );
    } else {
      setIsAlertVisible(true);
      // Réinitialiser les champs du formulaire après l'enregistrement
      setName("");
      setEmail("");
      setMessage("");

      // Display a success toast notification
      toast.success(
        "Your message has been sent and I will get back to you shortly."
      );
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-10"
      data-aos="fade-up"
      id="form"
    >
      <h2 className="font-mono font-extrabold text-3xl mx-4 text-solidheadinglight dark:text-solidheadingdark text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-44">
        <div className="w-80 sm:w-[500px]">
          <h3 className="text-md text-justify md:text-5xl font-mono font-bold text-solidheadinglight dark:text-solidheadingdark mt-3">
            Drop me a line. I would like to hear from you.
          </h3>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-8 w-80 justify-between"
          >
            <div>
              <label
                htmlFor="userName"
                className="relative dark:bg-white dark:text-slate-950 block overflow-hidden rounded-md border border-black px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="UserName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Name
                </span>
              </label>
            </div>

            <div>
              <label
                htmlFor="UserEmail"
                className="relative dark:bg-white dark:text-slate-950 block overflow-hidden rounded-md border border-black px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>

            <div>
              <label
                htmlFor="text"
                className="relative dark:bg-white dark:text-slate-950 block overflow-hidden rounded-md border border-black px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <textarea
                  name=""
                  className="peer h-200 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  id="text"
                  cols={30}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                ></textarea>

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Message
                </span>
              </label>

              <button
                disabled={!name || !email || !message}
                className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative w-24 py-2 transition-all ease-in duration-200 bg-bglight dark:bg-bgdark rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
