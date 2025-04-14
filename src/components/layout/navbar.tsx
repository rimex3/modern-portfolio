import "@/styles/globals.css";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <nav className="flex items-center space-x-5">
            <div className="flex items-center space-x-4 w-max shadow min-h-[76px] px-5 rounded-full bg-white">

                <div>
                    <h2 className="font-medium text-gradient text-[1.3rem]">Rime Design</h2>
                </div>

                <div>
                    <ul className="flex items-center space-x-4 text-[#626772] text-[1.2rem]">
                        <li className="hover:text-[#0C1020] transition-colors">
                            <a href="#">Web Design</a>
                        </li>
                        <li className="hover:text-[#0C1020] transition-colors">

                            <a href="#">Branding</a>
                        </li>
                        <li className="hover:text-[#0C1020] transition-colors">

                            <a href="#">Pricing</a>
                        </li>
                        <li className="hover:text-[#0C1020] transition-colors">

                            <a href="#">Success Stories</a>
                        </li>
                        <li className="hover:text-[#0C1020] transition-colors">

                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center space-x-4 w-max shadow min-h-[76px] px-5  rounded-full bg-white">
                <a href="#" className="text-[1.2rem] text-[#0C1020] hover:text-[#626772] transition-colors">
                    Send us a message
                </a>

                <Button>
                    Book Your Free Intro Call
                </Button>
            </div>
        </nav>
    )
}
