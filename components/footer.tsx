import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {useTranslations} from "next-intl";
export default function Footer() {
    const t = useTranslations("index");
    return (
        <div className="mx-10 py-10 mt-4 flex flex-col-reverse gap-5 md:flex-row items-center justify-between h-full">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p>
                    © 2024 - {t("createwith")} 🧡 {t("by")}{" "}
                    <Link
                        href={"https://linkedin.com/in/alexandre-dissi94460"}
                        className="underline"
                    >
                        Alexandre Dissi
                    </Link>
                </p>
            </div>
            <div className="text-center md:text-left">
                <div className="flex gap-6">
                    <Link href="https://github.com/alexdissi" target="_blank">
                        <FaGithub fontSize={22} />
                    </Link>
                    <Link
                        href="https://twitter.com/alexandredissi"
                        className="hover:text-blue-500 duration-300"
                        target="_blank"
                    >
                        <FaTwitter fontSize={22} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/alexandre-dissi94460"
                        className="hover:text-blue-600 duration-300"
                        target="_blank"
                    >
                        <FaLinkedin fontSize={22} />
                    </Link>
                    <Link href="mailto:alexandredissi@icloud.com" className="hover:text-red-500 duration-300">
                        <IoMail fontSize={22} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
