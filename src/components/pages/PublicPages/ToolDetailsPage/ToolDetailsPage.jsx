import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleTool } from "../../../../utilities/hooks/tools.hook";
import Loading from "../../../shared/Loading/Loading";

const ToolDetailsPage = () => {
    const { toolId } = useParams();
    const { data, isError, isLoading, error } = useGetSingleTool(toolId);
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
            <h3 className="text-center mt-5 mb-20 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">Tool Details Page</h3>
            <div className="w-full flex flex-col lg:flex-row ">
                <div className="w-full lg:w-[35%] 2xl:w-[40%] me-5 flex items-center">
                    <img className="w-full h-full" src={data?.img} alt="tool image" />
                </div>
                <div className="mt-10 lg:mt-0 w-full lg:w-[65%] 2xl:w-[60%] relative overflow-x-auto">
                    <h4 className="mb-7 text-gray-800 font-semibold text-base sm:text-xl 2xl:text-2xl">Tool Details</h4>
                    <table className="w-full min-w-[250px] rounded-lg">
                        <tbody>
                            <tr className="bg-white border hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Tool name</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{data?.heading}</td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Category</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{data?.category}</td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Minimum Order</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{data?.minOrder}</td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Available Quantity</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{data?.quantity}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex items-start justify-between mt-8">
                        <p className="flex items-center text-xl md:text-2xl 2xl:text-3xl text-green-600 font-semibold md:ps-5">{data?.price}<sub className="font-normal ml-2">(per unit)</sub></p>
                        <p><button onClick={() => navigate(`/tool/${toolId}/purchase`)} type="button" className="btn btn-xs sm:btn-sm xl:btn-md bg-primary hover:bg-secondary border-none text-gray-50">Purchase Now</button></p>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h4 className="mb-7 text-gray-800 font-semibold text-base sm:text-xl 2xl:text-2xl">Tool Overview</h4>
                <p className="text-gray-700 text-justify">
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                    Stair ladders (also known as combination, multi-purpose or stairwell ladders) are probably the most versatile ladder option on the market! Offering impressive stability, our stairwell ladders can be used to access hard to reach places directly above your staircase or elsewhere around your home.
                </p>
            </div>
        </div>
    );
};

export default ToolDetailsPage;