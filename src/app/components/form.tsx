import { createClient } from '@supabase/supabase-js';
import { exit } from 'process';
import { useState } from 'react';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
let supabase : any ;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  exit();
}

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Enregistrement des données dans la table "contact" de Supabase
      const { data, error } = await supabase
        .from('contact')
        .insert([{ name, email, message }]);
  
      if (error) {
        console.error('Une erreur s\'est produite lors de l\'enregistrement des données :', error);
      } else {
        setIsAlertVisible(true);
        // Réinitialiser les champs du formulaire après l'enregistrement
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setIsAlertVisible(true);
          }, 3000);
      }
     
    };
    const handleAlertClose = () => {
        setIsAlertVisible(false);
      };
    return (
        <div className="flex flex-col items-center gap-10" data-aos="fade-up" id='form'>
             {isAlertVisible && (
                <div
  role="alert"
  className="rounded-xl border fixed top-0 right-0 ml-4 mr-4 mt-10 md:mt-16 border-gray-100 bg-white p-4 shadow-xl"
>
  <div className="flex items-start gap-4">
    <span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div className="flex-1">
      <strong className="block font-medium text-gray-900">Send</strong>

      <p className="mt-1 text-sm text-gray-700">
      Your message has been sent and I will get back to you shortly. 
      </p>
    </div>

    <button className="text-gray-500 transition hover:text-gray-600" onClick={handleAlertClose}>
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>
      )}
            <h2 className="font-mono font-extrabold text-3xl mx-4 text-solidheadinglight dark:text-solidheadingdark text-center">
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-44">
                <div className="w-96">
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
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    id="text"
                                    cols={30}
                                    value={message}
  onChange={(e) => setMessage(e.target.value)}
                                    rows={20}
                                ></textarea>

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Message
                                </span>
                            </label>
                            <button className="bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-white font-bold py-2 px-2 rounded-md w-40 text-center hover:opacity-75 transition duration-300 mt-7">
                                Send
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}
