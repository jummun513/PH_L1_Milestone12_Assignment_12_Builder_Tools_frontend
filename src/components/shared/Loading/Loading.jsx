const Loading = () => {
    return (
        <div className="grid place-items-center">
            <div
                className="inline-block h-8 w-8 md:h-14 md:w-14 animate-spin rounded-full border-4 border-solid border-[#f3f3f3] border-r-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
            </div>
            <div className="text-gray-500 text-sm md:text-xl md:font-semibold font-serif mt-3 md:mt-5">
                Loading...
            </div>
        </div>
    );
};

export default Loading;