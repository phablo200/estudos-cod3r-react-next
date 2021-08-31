const Logo = () => {
    return (
        <div className={`
            flex flex-col items-center justify-center
            bg-white w-10 h-10 rounded-full
        `}>
            <div className="h-3 w-3 rounded-full bg-red-600" />
            <div className="flex">
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-600" />
            </div>
        </div>
    )
}

export default Logo;