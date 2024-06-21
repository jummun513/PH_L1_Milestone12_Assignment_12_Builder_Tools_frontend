
// const data = [
//     {
//         imageUrl: "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png",
//     }
// ]

const Blogs = () => {
    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 mb-12 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">All Blogs</h3>
            <div className="grid gap-x-5 gap-y-7 2xl:gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
                {/* {data.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)} */}
            </div>
        </div>
    );
};

export default Blogs;