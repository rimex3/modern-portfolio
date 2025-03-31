'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <>
            <div className="flex items-center space-x-5">
                <Link href={"/"} className={`text-[16px] py-2.5 px-10 ${pathname === "/" ? "text-white bg-[#333333]" : "text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300"}`}>
                    Home
                </Link>
                <Link href={"/portfolio"} className={`text-[16px] py-2.5 px-10 ${pathname === "/portfolio" ? "text-white bg-[#333333]" : "text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300"}`}>
                    Portfolio
                </Link>
                <Link href={"/contact"} className={`text-[16px] py-2.5 px-10 ${pathname === "/contact" ? "text-white bg-[#333333]" : "text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300"}`}>
                    Contact
                </Link>
            </div>
        </>
    )
}

