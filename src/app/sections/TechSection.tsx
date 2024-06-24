import { heading } from '../components/custom/fonts/fonts'

const TechSection = () => {
  return (
    <div className='pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]'>
      <div className={`${heading.className} text-3xl md:text-5xl`}>Tools & Technologies</div>
      <div className="mt-7 w-full flex justify-center">
        hello world
      </div>
      <div id='projects' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default TechSection