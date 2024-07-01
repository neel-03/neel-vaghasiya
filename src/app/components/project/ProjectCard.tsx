import { Project } from "@/app/database/projects"
import Image from "next/image"
import { heading } from "../custom/fonts"
import { CustomButton } from "../custom/CustomHTMLTags"
import ProjectTechStack from "./ProjectTechStack"

const ProjectCard = (project: Project) => {
    return (
        <div className="w-full md:hover:scale-105 md:transition border-2 rounded-xl shadow-md md:hover:shadow-xl">
            <Image
                className="rounded-t-xl pointer-events-none w-full h-auto hidden md:block"
                src={project.imgURL}
                alt={project.heading}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className={`${project.id === '3' ? 'mt-1':''} p-5`}>
                <h5 className={`${heading.className} text-2xl md:text-3xl font-bold`}>{project.heading}</h5>
                <h6 className="mb-3 text-base md:text-lg font-bold">{project.description}</h6>
                <div className="h-fit md:h-[200px] md:flex md:flex-col md:justify-between">
                    <p className="mb-3 text-sm md:text-md">{project.content}</p>
                    <div>
                        <h6 className="text-sm md:text-md font-bold">Technologies Used</h6>
                        <ProjectTechStack tech={project.tech} />
                        <div className="flex items-center justify-center gap-x-3 w-full">
                            {
                                project.liveLink && <CustomButton className="w-full" onClick={() => window.open(project.liveLink)}>View Live</CustomButton>
                            }
                            {
                                project.githubLink && <CustomButton className="w-full" onClick={() => window.open(project.githubLink)}>View Code</CustomButton>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard