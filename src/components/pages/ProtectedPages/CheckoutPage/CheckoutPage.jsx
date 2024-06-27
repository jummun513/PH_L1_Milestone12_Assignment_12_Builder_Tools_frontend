import { useParams } from "react-router-dom";
import { useGetSingleOrderForSpecificUser } from "../../../../utilities/hooks/orders.hook";
import Loading from "../../../shared/Loading/Loading";

const CheckoutPage = () => {
    const { email, toolId } = useParams();
    const { data, isError, isLoading: getSingleToolLoading, error } = useGetSingleOrderForSpecificUser({ email: email, toolId: toolId });

    if (getSingleToolLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 md:mt-5 mb-20 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">Checkout Page</h3>
            <div className="w-full mx-auto shadow-lg max-w-5xl py-10 px-5 rounded-md">
                <div className="mb-10">
                    <p className="text-gray-800 font-semibold text-sm md:text-base">Order Serial: <span className="font-normal">{data._id.slice(0, 6)}</span></p>
                    <p className="text-gray-800 font-semibold md:mt-1">Order By:</p>
                    <div className="p-2 border w-fit ms-5 md:mt-1">
                        <p className="text-gray-800 font-semibold text-sm md:text-base">Email: <span className="font-normal">{data.email}</span></p>
                        <p className="text-gray-800 font-semibold">Phone: <span className="font-normal">{data.mobileNo}</span></p>
                        <p className="text-gray-800 font-semibold">Address: <span className="font-normal">{data.location}</span></p>
                    </div>
                    <p className="text-gray-800 font-semibold mt-1">Order Date: <span className="font-normal">5th March, 2024. 05:24 PM</span></p>
                    <p className="text-gray-800 font-semibold md:mt-1">Order Status: <span className={`font-normal ${data.isConfirmed ? "text-green-600" : (data.isPaid ? "text-blue-600" : "text-red-500")}`}>{data.isConfirmed ? "Confirmed" : data.isPaid ? "Paid" : "Not Paid"}</span></p>
                </div>
                <div className="relative overflow-x-auto sm:overflow-x-hidden">
                    <table className="w-full text-sm text-left text-gray-500 min-w-[500px]">
                        <thead className="text-xs md:text-sm text-gray-800 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-3 md:px-6 py-4">
                                    Tool
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-4 text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-4 text-center">
                                    Unit Price
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-4 text-center">
                                    Total Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-900 whitespace-nowrap">
                                    <div>
                                        <img className="w-16" src={data?.toolId?.img?.url} alt="tool image" />
                                        <p className="text-sm mt-2">{data.toolId.heading}</p>
                                    </div>
                                </td>
                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800 text-center">
                                    {data.quantity} pc.
                                </td>
                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800 text-center">
                                    $ {data.toolId.price}
                                </td>
                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800 text-center">
                                    $ {Number(data.quantity) * Number(data.toolId.price)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-end mt-5 md:mt-8"><button className="btn btn-xs sm:btn-sm xl:btn-md bg-primary hover:bg-secondary border-none text-gray-50">Proceed to pay</button></p>
            </div>
        </div>
    );
};

export default CheckoutPage;