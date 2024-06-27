"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import SliderItem from "./SliderItem"
import { CustomButton } from "../custom/CustomHTMLTags"
import { Logo } from "../../database/Logos"

type Props = {
    logos: Logo[]
}

const Slider = (logos: Props) => {

    const [showMore, setShowMore] = useState(false)

    const logosToRender = showMore ? logos.logos : logos.logos.slice(0, 12)

    const width = logos.logos.length * 6

    const renderLogos = (): JSX.Element => (
        <ul>
            {
                logos.logos.map((logo) => (
                    <SliderItem
                        data-cursor={true}
                        key={logo.id}
                        name={logo.name}
                        url={logo.icon.url}
                        h={80} w={80}
                    />
                ))
            }
        </ul>
    )

    return (
        <section className="tech border-2 rounded-lg pt-2 pb-5 shadow-md">
            <div className="inner hidden md:block">
                <div className="logos hidden md:block" style={{ width: `${width}rem` }}>
                    <div className="logos-inner">
                        {renderLogos()}
                        {renderLogos()}
                    </div>
                </div>
            </div>
            <ul className="grid gap-x-4 gap-y-8 grid-cols-3 sm:grid-cols-4 md:hidden px-8 py-4">
                {
                    logosToRender?.map((logo) => (
                        <li
                            key={logo.id}
                            className="md:hover:scale-125 text-base flex flex-col justify-center items-center space-y-1"
                        >
                            <Image
                                src={logo.icon.url}
                                alt={logo.name}
                                width={48}
                                height={48}
                            />
                            <h4 className="text-center" aria-hidden="true">
                                {logo.name}
                            </h4>
                        </li>
                    ))
                }
            </ul>
            {
                !showMore && (
                    <div className="mt-8 flex justify-center md:hidden">
                        <CustomButton onClick={() => setShowMore(true)}>Show More</CustomButton>
                    </div>
                )
            }
            {
                showMore && (
                    <div className="mt-8 flex justify-center md:hidden">
                        <CustomButton onClick={() => setShowMore(false)}>Show Less</CustomButton>
                    </div>
                )
            }
        </section>
    )
}

export default Slider