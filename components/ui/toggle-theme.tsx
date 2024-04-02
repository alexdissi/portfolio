"use client"
import { useTheme } from "next-themes"
import {MoonIcon, SunIcon} from "@radix-ui/react-icons"
const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button
            aria-label="theme toggler"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-body-color flex h-8 w-8 items-center justify-center duration-300 dark:text-white"
        >
      <span>
       <SunIcon className="hidden h-[22px] w-[22px] fill-current dark:block" />
        <MoonIcon className="h-[22px] w-[22px] fill-current dark:hidden" />
      </span>
        </button>
    )
}
export default ThemeToggler