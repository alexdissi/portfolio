import { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import Image from 'next/image';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const elNavigation = [
        {
            id: 1,
            name: 'Home',
            link: '#home',
        },
        {
            id: 2,
            name: 'About',
            link: '#about',
        },
        {
            id: 3,
            name: 'Project',
            link: '#project',
        },
        {
            id: 4,
            name: 'Tech Stack',
            link: '#stack',
        },
        {
            id: 5,
            name: 'Contact',
            link: '#form',
        },
    ];

    return (
        <nav className="sticky z-50 top-0  bg-bglight dark:bg-bgdark">
            <div
                data-aos="fade-up" className=''>
                <div className="flex justify-between items-center">
                    <div className='hidden md:block'>
                        <Image src={"/logo.png"} width={100} height={100} alt='' />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-10 text-solidheadinglight dark:text-solidheadingdark text-md font-sans">
                            {elNavigation.map((nav) => (
                                <a href={nav.link} key={nav.id} className="relative">
                                    <li className="group">
                                        {nav.name}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
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
                    <div className="md:hidden">
                        <motion.button
                            className="text-solidheadinglight dark:text-solidheadingdark"
                            onClick={toggleMenu}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RiMenu3Line className='text-2xl' />
                        </motion.button>
                    </div>
                </div>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.ul
                            className="flex flex-col gap-4 text-white text-2xl font-sans text-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {elNavigation.map((nav) => (
                                <a href={nav.link} key={nav.id} onClick={toggleMenu}>
                                    <li>{nav.name}</li>
                                </a>
                            ))}
                        </motion.ul>
                        <motion.button
                            className="absolute top-4 right-4 text-white"
                            onClick={toggleMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RiCloseCircleLine className='text-3xl' />
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
