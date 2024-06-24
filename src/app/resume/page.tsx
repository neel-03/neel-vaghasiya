import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Neel Vaghasiya | Resume",
    description: "Neel Vaghasiya's resume",
};
import CustomCursor from "../components/custom/CustomCursor"
import { CustomAnchor, CustomButton } from "../components/custom/CustomHTMLTags";
import { BackBtn } from "../components/BackBtn";

const page = () => {
    return (
        <object data="https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/Neel_Vaghasiya_Resume.pdf" type="application/pdf" className="w-full h-screen">
            <CustomCursor />
            <div className="flex flex-col justify-center items-center pt-20">
                <span>Oops..! Something didn't go as planned.</span>
                <span>No worries. View resume on <CustomAnchor href="https://drive.google.com/file/d/1n7ZK7VOYL58Wse77eshaI-luIzusRgs-/view">Drive</CustomAnchor>..!</span>
                <BackBtn />
            </div>
        </object>
    )
}

export default page