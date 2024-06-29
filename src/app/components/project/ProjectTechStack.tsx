import { Tech } from "@/app/database/projects"
import { Tooltip } from "@nextui-org/tooltip"
import Image from "next/image"

interface Prop{
    tech: Tech[]
}

const ProjectTechStack = ({ tech }: Prop) => {
    return (
        <div className="mb-3 flex items-center justify-start">
            {
                tech.map((item) => (
                    <Tooltip
                        key={item.techId}
                        closeDelay={0}
                        content={item.techName}
                        placement='bottom'
                        className="bg-black text-white text-xs px-1 pt-1 rounded-md"
                    >
                        <Image
                            data-cursor={true}
                            src={item.techIcon}
                            alt={item.techName}
                            width={30}
                            height={30}
                            className="p-1"
                            draggable={false}
                        />
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default ProjectTechStack