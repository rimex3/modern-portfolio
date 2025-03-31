import Image from "next/image"
import Link from "next/link"

export interface ProjectCardProps {
    id: number
    imgSrc: string
    name: string
    link: string
}

export default function ProjectCard({ id, link, name,imgSrc }: ProjectCardProps) {
    return (
        <div key={id} className="relative group overflow-hidden">
            <Image
                src={imgSrc}
                alt={name}
                priority={true}
                draggable={false}
                placeholder="blur"
                blurDataURL={imgSrc}
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover group-hover:filter-none filter grayscale contrast-50 transition"
            />

            <Link
                href={link}
                target="_blank"
                className="absolute bottom-0 left-0 w-full flex justify-start px-4 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white py-2 text-[#333333]"
            >
                <div className="flex flex-col">
                    <span className="font-semibold">
                        {name}
                    </span>
                    <span className="font-light text-[12px] ">
                        View
                    </span>
                </div>
            </Link>
        </div>
    )
}
