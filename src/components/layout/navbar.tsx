import "@/styles/globals.css";

export default function Navbar() {
    return (
        <nav className="flex items-center space-x-4 w-max shadow p-5 rounded-full bg-white">
            <div>
                <h2 className="font-medium text-gradient text-[1.3rem]">Rime Design</h2>
            </div>

            <div>
                <ul className="flex items-center space-x-4 text-[#626772] text-[1.2rem]">
                    <li className="hover:text-[#0C1020]">
                        <a href="#">Web Design</a>
                    </li>
                    <li className="hover:text-[#0C1020]">

                        <a href="#">Branding</a>
                    </li>
                    <li className="hover:text-[#0C1020]">

                        <a href="#">Pricing</a>
                    </li>
                    <li className="hover:text-[#0C1020]">

                        <a href="#">Success Stories</a>
                    </li>
                    <li className="hover:text-[#0C1020]">

                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
