import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="mt-24 flex items-center justify-center w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-[5rem] font-bold text-gradient text-center w-full max-w-[1000px]">
                    High-End Websites for SaaS & Digital Products
                </h1>
                <p className="text-[#626772] text-[1.5rem] text-center w-full max-w-[400px] mt-5">
                    Get your custom conversion-focused
                    website in under 10 days.
                </p>

                <Button className="mt-5 text-[20px]">
                    Book Your Free Intro Call
                </Button>
            </div>
        </section>
    )
}
