import { projects } from "@/constants/projects";
import ProjectCard from "./project-card";

export default function PortfolioList() {
    return (
        <section className="w-[600px] mb-20">
            <div className="grid grid-cols-2 gap-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        link={project.link}
                        imgSrc={project.imgSrc}
                    />
                ))}
            </div>
        </section>
    );
}
