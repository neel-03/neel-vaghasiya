import ProjectCard from "./ProjectCard"
import { projects } from "@/app/database/projects"

const ProjectGrid = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center h-fit">
      <div className="mt-3 grid grid-cols-̄1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          projects.map(((project) => (
            <ProjectCard {...project} key={project.id} />
          )))
        }
      </div>
    </div>
  )
}

export default ProjectGrid