'use client'

import { useRouter } from "next/navigation"
import CustomCursor from "./components/custom/CustomCursor"
import { CustomButton } from "./components/custom/CustomHTMLTags"
import { heading } from "./components/custom/fonts"


const NotFound = () => {
    const router = useRouter()
    return (
        <>
            <CustomCursor />
            <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border-2 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-md max-w-[650px]">
                    <h1 className={`${heading.className} text-5xl md:text-6xl lg:text-7xl font-bold`}>404</h1>
                    <p className={`${heading.className} text-lg md:text-xl lg:text-3xl font-bold mt-4 text-center`}>YOU SEEM TO BE LOST..!</p>
                    <p className="text-gray-700 mt-4 pb-4 border-b-2 text-center">It looks like the page you're looking for doesn't exist. Perhaps you mistyped the address.</p>
                    <CustomButton className="mt-6" onClick={() => { router.push('/') }}>
                        Go back
                    </CustomButton>
                </div>
            </div>
        </>
    )
}

export default NotFound