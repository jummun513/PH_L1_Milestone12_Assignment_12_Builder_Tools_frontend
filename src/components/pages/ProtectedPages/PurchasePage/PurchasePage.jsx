import { useParams } from "react-router-dom";
import { useGetSingleTool } from "../../../../utilities/hooks/tools.hook";
import Loading from "../../../shared/Loading/Loading";

const PurchasePage = () => {
    const { toolId } = useParams();
    const { data, isError, isLoading, error } = useGetSingleTool(toolId);

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }
    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 mb-12 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">Purchase Page</h3>
            <div className="w-full flex ">
                <div className="w-[40%] me-5">
                    <img className="w-full h-full" src={data?.img} alt="tool image" />
                </div>
                <div className="w-[60%] relative overflow-x-auto">
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
                    <div className="flex items-center justify-between mt-8">
                        <p className="flex items-center 2xl:text-xl text-gray-700 font-semibold">{data?.price}<sub className="font-normal ml-2">(per unit)</sub></p>
                        <p><button type="button" className="btn btn-sm 2xl:btn-md bg-primary hover:bg-secondary border-none text-gray-950">Purchase Now</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;