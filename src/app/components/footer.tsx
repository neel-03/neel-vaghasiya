const Footer = () => {
    return (
        <footer className="flex flex-col mb-10 px-4 text-center gap-1 text-xs font-bold">
            <span>
                Made with 🖤 by Neel Vaghasiya
            </span>
            <span className="mb-2">
                &copy; {new Date().getFullYear()}{" "}
                Neel Vaghasiya. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer