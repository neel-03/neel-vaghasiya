import Image from "next/image"
import { Tooltip } from "@nextui-org/tooltip";

type Props = {
    name: string,
    url: string,
    w: number,
    h: number
}

const SliderItem = (props: Props) => {
    return (
        <div className="slider-item">
            <Tooltip
                offset={20}
                closeDelay={0}
                content={props.name}
                placement='bottom'
                className="bg-black text-white text-xs px-1 pt-1 rounded-md">
                <Image
                    data-cursor={true}
                    src={props.url}
                    alt={props.name}
                    width={props.w}
                    height={props.h}
                    className="p-2"
                    draggable={false}
                />
            </Tooltip>
            <h4 data-cursor={true} className="text-xs md:hidden" aria-hidden>
                {props.name}
            </h4>
        </div>
    )
}

export default SliderItem