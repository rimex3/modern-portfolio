import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="w-full h-[70px] flex items-center justify-between">
            <div className="text-3xl font-semibold text-[#333333] uppercase">
                Rime
            </div>

            <Navbar />
        </header>
    )
}
