import Image from "next/image";
import ThemeToggler from "@/components/ui/toggle-theme";
import LanguageSwitcher from "@/components/i18n/switcher";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className={"flex flex-row justify-between"}>
            <div className={"flex flex-row gap-4 items-center"}>
                <Image src={"/icon.png"} alt={"logo"} width={50} height={50}/>
                <h2 className={"text-3xl font-bold"}>Alexandre Dissi</h2>
            </div>
            <div className={"flex flex-row items-center gap-4 text-xl"}>
                <ThemeToggler/>
                <LanguageSwitcher/>
            </div>
        </nav>
    )
}