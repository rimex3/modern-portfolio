'use client'

import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/cn";
import { useScroll, useTransform, useSpring, motion } from "motion/react";

export default function ProjectsSection() {
    const { scrollY } = useScroll();

    const layer1X = useSpring(useTransform(scrollY, [0, 1000], [0, 500]), {
        stiffness: 1000,
        damping: 50,
    });

    const layer2X = useSpring(useTransform(scrollY, [0, 1000], [0, -300]), {
        stiffness: 1000,
        damping: 50,
    });

    return (
        <motion.section className="mt-20 w-full flex flex-col items-center justify-center">
            <motion.div
                className={cn("flex items-center space-x-7")}
                style={{ x: layer1X }}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </motion.div>

            <motion.div
                className={cn("flex items-center space-x-7 mt-10")}
                style={{
                    x: layer2X
                }}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </motion.div>
        </motion.section>
    );
}
