import React from 'react'
import { heading } from './custom/fonts/fonts'
import { CustomAnchor } from './custom/CustomHTMLTags'

const Educationspanline = () => {
    return (
        <ul className="px-4 lg:px-8 w-full">
            <li>
                <article>
                    <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 border-2 shadow-md">
                        <h3
                            data-cursor={true}
                            onClick={() => { window.open('https://ddu.ac.in')}}
                            className={`${heading.className} w-fit px-1 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-xl lg:text-3xl`}>
                            Dharmsinh Desai University
                        </h3>
                        <CustomAnchor
                            href='https://www.google.com/maps/place/Nadiad,+Gujarat'
                            data-cursor={true}
                            className="w-fit mb-2 md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                            Nadiad, Gujarat, India
                        </CustomAnchor>
                        <span className="pt-1 px-2 rounded-md border-2 row-start-1 mb-1 md:col-start-1 xl:col-span-2 h-fit w-fit shadow-md">2021 - 2025</span>
                        <div className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0">
                            <ul>
                                <li>- Bachelor of Technology in <strong>Information Technology</strong></li>
                                <li>- Expected Graduation: <strong>May, 2025</strong></li>
                                <li>- Current CPI: <strong>8.75</strong> out of <strong>10</strong></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    )
}

export default Educationspanline