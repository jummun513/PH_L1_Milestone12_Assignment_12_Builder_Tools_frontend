
const Test = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center">
                <div
                    className="inline-block h-8 w-8 md:h-14 md:w-14 animate-spin rounded-full border-4 border-solid border-[#f3f3f3] border-r-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                </div>
                <div className="text-gray-700 text-sm md:text-xl md:font-semibold font-serif mt-3 md:mt-5">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Test;