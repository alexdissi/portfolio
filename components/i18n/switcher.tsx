"use client"
import {Link,usePathname} from "./nav"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {GlobeIcon} from "@radix-ui/react-icons"
export default function LanguageSwitcher() {
    const pathnames = usePathname()

    return (
        <div className="cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <GlobeIcon width="24" height="24" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem> <Link href={pathnames} locale={"fr"}>Francais 🇫🇷</Link></DropdownMenuItem>
                    <DropdownMenuItem> <Link href={pathnames} locale={"en"}>Anglais 🏴󠁧󠁢󠁥󠁮󠁧󠁿</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}