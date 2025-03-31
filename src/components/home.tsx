import Link from "next/link";
import AnimatedTitle from "./animated-title";

export default function Home() {
    return (
        <section>
            <div>
                <h1 className="text-[72px] font-bold uppercase">
                    Ahmed Hany
                </h1>
                <div className="w-[70px] h-[5px] bg-[#333333] my-7"></div>
                <AnimatedTitle />
            </div>
            <div className="mt-8">
                <Link href={"#"} className="text-white bg-[#333333] transition-all duration-200 hover:bg-transparent border-[2px] border-[#333333] hover:text-[#333333] py-4 px-6 inline-block text-[18px]">Get in Touch</Link>
            </div>
        </section>
    )
}
