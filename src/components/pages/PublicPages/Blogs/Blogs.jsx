import { useNavigate } from "react-router-dom";
import { useGetAllBlogs } from "../../../../utilities/hooks/blogs.hook";
import Loading from "../../../shared/Loading/Loading";

const Blogs = () => {
    const { data, isError, isLoading, error } = useGetAllBlogs();
    const navigate = useNavigate();

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }
    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 mb-12 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">All Tools</h3>
            <div className="grid gap-x-5 gap-y-7 2xl:gap-y-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center">
                {data.map((item, idx) =>
                    <div onClick={() => navigate(`/blog/${item._id}`)} key={idx} className="w-full max-w-md flex flex-col md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
                        <img className="object-cover w-full rounded-t-lg h-72 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg" src={item?.photoUrl?.thumbnailUrl || "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?t=st=1719054939~exp=1719058539~hmac=0cfed314f66bb32900946bed5842f7a39b302f3d3ce489dd2ccbd6229ea624ac&w=996"} alt="blog thumbnail image" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900">{item.title}</h5>
                            <p className="mb-3 text-xs md:texts-sm font-normal text-gray-700">Category: {item.category}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;