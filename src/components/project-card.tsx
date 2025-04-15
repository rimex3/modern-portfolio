'use client'

import { Suspense } from "react";
import { Image } from "./image";
import Skeleton from "./ui/skeleton";
import { motion } from "motion/react"

export default function ProjectCard() {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                rotate: -1,
                filter: "brightness(1.15)",
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                },
            }}
            whileTap={{ scale: 0.98 }}
            className="h-[21rem] w-[32rem] relative flex-shrink-0 rounded-3xl overflow-hidden shadow-xl"
        >
            <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <Image src="/static/media/3.png" alt="3" />
            </Suspense>
        </motion.div>
    )
}
