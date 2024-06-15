import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, SVGProps } from "react"

export const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            data-cursor={true}
            {...props}
            className={`font-light whitespace-nowrap flex justify-center items-center px-3 pt-2 pb-1 border-2 rounded-md border-opacity-20 transition-colors shadow-sm ${props.disabled ?
                "opacity-50" : "hover:border-black hover:border-opacity-30 "
                } ${props.className ? props.className : ""}`}
        />
    )
}

export const CustomAnchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            data-cursor={true}
            target="_blank"
            className={`text-blue-700 whitespace-nowrap hover:shadow-sm underline underline-offset-2 p-1 hover:text-black ${props.className ? props.className : ""
                }`}
        ></a>
    )
}
