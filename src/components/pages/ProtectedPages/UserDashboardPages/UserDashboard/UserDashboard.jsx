import { useGetAllTools } from "../../../../../utilities/hooks/tools.hook";
import Loading from "../../../../shared/Loading/Loading";

const UserDashboard = () => {
    const { data, isError, isLoading, error } = useGetAllTools();

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if (error && isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <div className="my-6 w-full flex gap-x-2 md:gap-x-5">
                <div className="w-1/3 text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Total Order</p>
                    <p>10 items</p>
                </div>
                <div className="w-1/3 text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Total Cost</p>
                    <p>$ 59.01 k</p>
                </div>
                <div className="w-1/3 text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Redeem Points</p>
                    <p>1000</p>
                    <button className="mt-1 sm:mt-2 btn btn-xs md:btn-sm text-gray-50 bg-primary border-none hover:bg-secondary hover:text-gray-50">Use Now</button>
                </div>
            </div>
            <div>
                <h2 className="mt-10 md:mt-16 text-xl md:text-2xl font-bold text-gray-800">Your Latest Orders</h2>
                <div className="mt-6 md:mt-8 relative">
                    <div className="relative overflow-x-auto sm:overflow-x-hidden shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 min-w-[600px]">
                            <thead className="text-xs md:text-sm text-gray-800 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-3 md:px-6 py-4">
                                        Tool
                                    </th>
                                    <th scope="col" className="px-3 md:px-6 py-4">
                                        Unit Price
                                    </th>
                                    <th scope="col" className="px-3 md:px-6 py-4">
                                        Available Quantity
                                    </th>
                                    <th scope="col" className="px-3 md:px-6 py-4 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.slice(0, 6)?.map((d, i) => {
                                        return (
                                            <tr key={i} className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-900 whitespace-nowrap">
                                                    <div className="md:flex items-center">
                                                        <img className="w-10 md:w-16 mb-3 md:mb-0" src={d.img.url} alt={d.heading} />
                                                        <span className="md:ms-5">{d.heading}</span>
                                                    </div>
                                                </td>
                                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800">
                                                    $ {d?.price}
                                                </td>
                                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800">
                                                    {d?.quantity} pc.
                                                </td>
                                                <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-center">
                                                    <button className="btn btn-xs md:btn-sm text-gray-50 bg-primary border-none hover:bg-secondary">Details</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;