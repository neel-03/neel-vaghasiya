const CustomLoader = () => {
    return (
        <div className="flex flex-col gap-y-4 justify-center items-center h-screen">
            <div className="rounded-xl h-12 w-12 border-4 border-t-4 border-black animate-spin"></div>
            <span>Please wait...</span>
        </div>
    )
}

export default CustomLoader