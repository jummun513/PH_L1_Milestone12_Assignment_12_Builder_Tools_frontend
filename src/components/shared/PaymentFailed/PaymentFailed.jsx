import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleOrderById } from "../../../utilities/hooks/orders.hook";
import Loading from "../Loading/Loading";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../../providers/AuthProvider";

const PaymentFailed = () => {
    const { orderId } = useParams();
    const { data, isError, isLoading, error } = useGetSingleOrderById(orderId);
    const { storedUser } = useAuth();
    const navigate = useNavigate();

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="px-4 md:px-5">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-gray-800 font-bold text-xl md:text-3xl">Payment Unsuccessful !!</h1>
                    <RxCross2 className="mt-3 h-16 w-16 rounded-full p-2 bg-gray-100 text-red-600" />
                </div>
                <div className="text-sm md:text-base">
                    <p className="text-gray-800 font-semibold text-sm md:text-base">Order Serial: <span className="font-normal text-sm md:text-base">{data?._id?.slice(0, 6)}</span></p>
                    <p className="text-gray-800 font-semibold text-sm md:text-base md:mt-1">Order By:</p>
                    <div className="p-2 border w-fit md:mt-1 text-sm md:text-base">
                        <p className="text-gray-800 font-semibold text-sm md:text-base">Email: <span className="font-normal text-sm md:text-base">{data?.email}</span></p>
                        <p className="text-gray-800 font-semibold text-sm md:text-base">Phone: <span className="font-normal text-sm md:text-base">{data?.mobileNo}</span></p>
                        <p className="text-gray-800 font-semibold">Address: <span className="font-normal">{data?.location}</span></p>
                    </div>
                    <p className="text-gray-800 font-semibold mt-1">Order Date: <span className="font-normal">5th March, 2024. 05:24 PM</span></p>
                    <p className="text-gray-800 font-semibold md:mt-1">Order Status: <span className={`font-normal ${data?.isConfirmed ? "text-green-600" : (data?.isPaid ? "text-blue-600" : "text-red-500")}`}>{data?.isConfirmed ? "Confirmed" : data?.isPaid ? "Paid" : "Not Paid"}</span></p>

                </div>
                <p onClick={() => navigate(`/tool/${storedUser?.email}/checkout/${orderId}`)} className="mt-5 md:mt-8"><button className="w-full btn btn-sm md:btn-md bg-red-600 hover:bg-red-500 border-none text-gray-50">Try Again</button></p>
            </div>
        </div>
    );
};

export default PaymentFailed;