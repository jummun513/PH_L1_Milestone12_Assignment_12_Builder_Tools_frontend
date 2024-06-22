import { useParams } from "react-router-dom";
import { useGetSingleBlog } from "../../../../utilities/hooks/blogs.hook";
import Loading from "../../../shared/Loading/Loading";

const SingleBlog = () => {
    const { blogId } = useParams();
    const { data, isError, isLoading, error } = useGetSingleBlog(blogId);

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }
    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
        xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28 mt-10">
            <div className="flex justify-between text-gray-800">
                <p>Posted By: <strong>Md. Jummun Islam</strong></p>
                <p>Date: <strong>29th March, 2024.</strong> Time: <strong>04:13 PM.</strong></p>
            </div>
            <h2 className="text-4xl text-gray-700 font-bold my-10">{data.title}</h2>
            <div className="h-96 flex justify-center mb-16">
                <img className="h-full w-[95%] object-cover rounded-md" src={data?.photoUrl?.url || "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?t=st=1719054939~exp=1719058539~hmac=0cfed314f66bb32900946bed5842f7a39b302f3d3ce489dd2ccbd6229ea624ac&w=996"} alt="blog-top-image" />
            </div>
            <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: data?.content }}></div>
        </div>
    );
};

export default SingleBlog;