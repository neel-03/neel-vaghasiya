"use client"

import { CustomButton } from "./custom/CustomHTMLTags"

export const BackBtn = () => {
    return (
        <CustomButton onClick={() => window.close()}>Go back</CustomButton>
    )
}
