const ToolsCard = (data) => {
    const { img, heading, desc } = data.data;
    return (
        <div className="flex w-[320px] flex-col items-center rounded-xl bg-[#fefefe] bg-clip-border text-gray-700 shadow-md">
            <div className="mx-3 w-[300px] p-2 overflow-hidden mt-4 rounded-xl bg-[#f3f3f3] bg-clip-border text-gray-700">
                <img
                    src={img}
                    className="h-full w-full object-contain aspect-[4/3]"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {heading}
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {desc}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="block w-full select-none rounded-lg bg-gradient-to-l text-slate-50 from-grad to-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ToolsCard;