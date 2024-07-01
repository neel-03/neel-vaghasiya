import { heading } from '../components/custom/fonts'
import ProjectGrid from '../components/project/ProjectGrid'

const ProjectsSection = () => {
  return (
    <div className='pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]'>
      <div className={`${heading.className} text-5xl`}>Projects</div>
      <div className="text-center md:text-start mt-7">Here are some of the projects I've worked on. This section includes both collaborative projects and personal ones. Take a look and see what I’ve been up to!</div>
      <ProjectGrid />
      <div id='contact' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default ProjectsSection