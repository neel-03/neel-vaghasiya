import Image from "next/image"
import photo from '../../../public/photo.png'
import { heading } from "../components/custom/fonts"
import { CustomAnchor } from "../components/custom/CustomHTMLTags"
import ContactIcons from "../components/ContactIcons"
import { Tooltip } from "@nextui-org/tooltip";

const HomeSection = () => {
  return (
    <div className="pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]">
      <div className="flex flex-col gap-3 md:flex-row md:justify-around items-center">
        <div className="flex flex-col">
          <h1 className={`max-[1140px]:text-6xl max-[1140px]:leading-normal max-[1300px]:leading-snug max-[992px]:text-5xl max-[992px]:leading-normal max-[800px]:text-4xl max-[800px]:leading-relaxed max-[634px]:leading-tight max-[455px]:text-3xl text-6xl leading-tight ${heading.className}`}>
            Hey there, I'm <span data-cursor={true} className="px-2 text-white font-outline-1 hover:font-outline-2">Neel Vaghasiya</span>.
          </h1>
          <h3 className={`max-[1140px]:text-4xl max-[1140px]:leading-normal max-[1300px]:leading-snug max-[992px]:text-3xl max-[992px]:leading-normal max-[800px]:text-xl max-[800px]:leading-relaxed max-[634px]:leading-tight max-[455px]:text-2xl text-4xl leading-tight ${heading.className}`}>
            A Passionate <span data-cursor={true} className="px-2 text-white font-outline hover:font-outline-1">Developer</span> & Lifelong <span data-cursor={true} className="px-2 text-white font-outline hover:font-outline-1">Learner</span>
          </h3>
          <span className="text-sm md:text-lg mt-3 md:mt-7 max-w-[650px]">
            Namaste...!<br />I'm a final year IT student at <CustomAnchor href="https://www.google.com/search?q=Dharmsinh+Desai+University" target="_blank">Dharmsinh Desai University</CustomAnchor> in <CustomAnchor href="https://www.google.com/maps/place/Gujarat/@22.8437446,64.5445728,5.81z/" target="_blank">Gujarat, India</CustomAnchor>.<br /> I enjoy building Web-Apps, backend services, and everything in between. I'm always eager to take on challenges and find opportunities to learn new technologies.
          </span>
        </div>
        <div className="border-2 rounded-lg border-opacity-20 transition-colors shadow-lg">
          <Tooltip content={'Yes, It\'s me..!'} placement='bottom' className="bg-black text-white text-xs px-1 pt-1 rounded-md">
            <Image
              data-cursor={true}
              src={photo}
              alt='Neel Vaghasiya'
              width={230} height={450}
              className="rounded-lg w-36 md:w-[230px]"
            />
          </Tooltip>
        </div>
      </div>
      <div className="mt-3 font-bold md:flex items-center justify-center gap-6">
        <div>Reach out to me:</div>
        <ContactIcons />
      </div>
      <div id='education' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default HomeSection