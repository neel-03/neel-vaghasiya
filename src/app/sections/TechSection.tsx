import Slider from '../components/TechIconsSlider/Slider'
import { heading } from '../components/custom/fonts'
import { logos } from '../database/Logos'

const TechSection = () => {
  return (
    <div className='pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]'>
      <div className={`${heading.className} text-3xl md:text-5xl`}>Tools & Technologies I Use</div>
      <div className="mt-7 w-full flex justify-center">
        <Slider logos={logos.logos}/>
      </div>
      <div id='projects' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default TechSection