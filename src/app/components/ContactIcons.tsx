import Image from "next/image"
import github from '../../public/github-logo.png'
import linkedin from '../../public/linkedin-logo.png'
import mail from '../../public/email-logo.png'
import { Tooltip } from "@nextui-org/tooltip";

const ContactIcons = () => {
    return (
        <div className="flex gap-5">
            <Tooltip content={'LinkedIn'} className="bg-black text-white text-xs px-1 pt-1 rounded-md">
                <Image
                    data-cursor={true}
                    className="border-2 border-opacity-20 transition-colors rounded-full shadow-md"
                    src={linkedin}
                    alt="linkedin-logo"
                    height={50} width={50}
                    onClick={() => { window.open('https://www.linkedin.com/in/vneel/') }}
                />
            </Tooltip>
            <Tooltip content={'GitHub'} className="bg-black text-white text-xs px-1 pt-1 rounded-md">
                <Image
                    data-cursor={true}
                    className="border-2 border-opacity-20 transition-colors rounded-full shadow-md"
                    src={github}
                    alt="github-logo"
                    height={50} width={50}
                    onClick={() => { window.open('https://www.github.com/neel-03') }}
                />
            </Tooltip>
            <Tooltip content={'Mail'} className="bg-black text-white text-xs px-1 pt-1 rounded-md">
                <Image
                    data-cursor={true}
                    className="border-2 border-opacity-20 transition-colors rounded-full shadow-md"
                    src={mail}
                    alt="mail-logo"
                    height={50} width={50}
                    onClick={() => { window.open('https://mail.google.com/mail/?view=cm&fs=1&to=neelvaghasiya003@gmail.com') }}
                />
            </Tooltip>
        </div>
    )
}

export default ContactIcons