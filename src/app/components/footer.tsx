import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer data-aos="zoom-in">
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <a href="mailto:alexandredissi@icloud.com,">alexandredissi@icloud.com</a>
                </div>
                <div>
                    <a href='#'> <FaArrowUp className='text-2xl' /></a>
                </div>
                <div className='flex flex-row gap-12'>
                    <a href="tel:0686681447">06.86.68.14.47</a>
                    <div className="flex gap-6">
                        <a href="http://github.fr" className="" target="_blank">
                            <FaGithub fontSize={22} />
                        </a>
                        <a href="http://twitter.fr" className="hover:text-twittercolor duration-300" target="_blank">
                            <FaTwitter fontSize={22} />
                        </a>
                        <a href="http://linkedin.fr" className="hover:text-linkedincolor duration-300" target="_blank">
                            <FaLinkedin fontSize={22} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border border-gray-300 mt-5" />

            <h3 className='text-center mt-5 font-sans'>Built by Alexandre Dissi with <span className='text-rose-700'>Love ❤️</span> </h3>

        </footer>
    )
}
