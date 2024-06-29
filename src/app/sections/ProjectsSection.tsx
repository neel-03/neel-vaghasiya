import { heading } from '../components/custom/fonts'
import ProjectGrid from '../components/project/ProjectGrid'

const ProjectsSection = () => {
  return (
    <div className='pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]'>
      <div className={`${heading.className} text-5xl`}>Projects</div>
      <div className="text-center md:text-start mt-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, neque! Exercitationem totam vel nobis, eaque fuga amet. Odit non impedit alias cum expedita molestias sit laborum tempora iste asperiores blanditiis doloremque modi eos odio iusto, maxime nulla dolorum. Accusantium beatae temporibus magni vel quisquam?</div>
      <ProjectGrid />
      <div id='contact' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default ProjectsSection