import type { Metadata } from "next";
import { heading } from "../components/custom/fonts/fonts";
import CustomCursor from "../components/custom/CustomCursor"
import { CustomAnchor } from "../components/custom/CustomHTMLTags";
import { BackBtn } from "../components/BackBtn";

export const metadata: Metadata = {
    title: "Neel Vaghasiya | Resume",
    description: "Neel Vaghasiya's resume",
};

const page = () => {
    return (
        <object data="https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/Neel_Vaghasiya_Resume.pdf" type="application/pdf" className="w-full h-screen">
            <CustomCursor />
            <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border-2 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-md max-w-[650px]">
                    <p className={`${heading.className} text-lg md:text-xl lg:text-3xl font-bold mt-4 text-center`}>Oops..! Something didn't go as planned.</p>
                    <span className="text-gray-700 mt-4 pb-4 border-b-2 text-center">No worries. View resume on <CustomAnchor href="https://drive.google.com/file/d/1n7ZK7VOYL58Wse77eshaI-luIzusRgs-/view">Drive</CustomAnchor>..!</span>
                    <BackBtn />
                </div>
            </div>
        </object>
    )
}

export default page