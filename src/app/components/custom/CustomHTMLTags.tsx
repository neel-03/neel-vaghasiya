import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            data-cursor={true}
            {...props}
            className={`font-light whitespace-nowrap flex justify-center items-center px-3 pt-1 border-2 rounded-md border-opacity-20 transition-colors ${props.disabled ?
                "opacity-50" : "hover:border-green-600 hover:border-opacity-30 "
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
            className={`text-blue-900 whitespace-nowrap underline underline-offset-2 p-1 hover:no-underline ${props.className ? props.className : ""
                }`}
        ></a>
    )
}