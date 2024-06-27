import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../providers/AuthProvider";
import { useGetAllOrdersForSpecificUser } from "../../../../../utilities/hooks/orders.hook";
import Loading from "../../../../shared/Loading/Loading";

const UserWishList = () => {
    const { storedUser } = useAuth();
    const { data, isError, isLoading, error } = useGetAllOrdersForSpecificUser({ email: storedUser.email });
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
            <h3 className="text-center mt-16 md:mt-5 mb-20 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">All Wished Tools</h3>
            <div className="2xl:w-[90%] 2xl:mx-auto grid grid-cols-1 gap-y-5 md:gap-y-8">
                {data?.map((item, idx) => (
                    <div key={idx} className="flex h-32 sm:h-48 shadow-sm md:shadow-xl p-2 md:p-5 border rounded-2xl">
                        <div className="w-[40%] me-2 md:me-5 h-full bg-gray-200 flex justify-center rounded-lg">
                            <img className="h-full" src={item.toolId?.img?.url} alt="" />
                        </div>
                        <div className="w-[60%] text-gray-700 flex justify-between">
                            <div className="w-[80%] flex flex-col justify-center">
                                <h3 className="text-sm sm:text-lg md:text-xl font-semibold">{item.toolId.heading}</h3>
                                <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base">Order Quantity: {item.quantity} pc.</p>
                                <p className="text-xs sm:text-sm md:text-base">Order Date: 5th March, 2024. 05:24 PM</p>
                            </div>
                            <div className="w-[20%] flex flex-col items-end justify-between">
                                <p className={`text-xs md:text-sm font-semibold ${item.isConfirmed ? "text-green-600" : (item.isPaid ? "text-blue-600" : "text-red-500")}`}>{item.isConfirmed ? "Confirmed" : item.isPaid ? "Paid" : "Not Paid"}</p>
                                <button onClick={() => { navigate(`/tool/${storedUser.email}/checkout/${item.toolId._id}`); }} className="btn btn-xs sm:btn-sm xl:btn-md bg-primary hover:bg-secondary border-none text-gray-50">Checkout</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserWishList;