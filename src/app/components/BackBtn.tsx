"use client"

import { CustomButton } from "./custom/CustomHTMLTags"
import { useRouter } from "next/navigation"

export const BackBtn = () => {
    const router = useRouter()
    return (
        <CustomButton onClick={() => router.push('/')} className="mt-6">Go back</CustomButton>
    )
}
