import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleTool } from "../../../../utilities/hooks/tools.hook";
import Loading from "../../../shared/Loading/Loading";
import { useAuth } from "../../../../providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import { useAddOrder } from "../../../../utilities/hooks/orders.hook";
import { useState } from "react";
import Swal from "sweetalert2";

const PurchasePage = () => {
    const { toolId } = useParams();
    const { data, isError, isLoading: getSingleToolLoading, error } = useGetSingleTool(toolId);
    const { storedUser } = useAuth();
    const { control, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: { email: storedUser?.email, toolId: toolId } });
    const [isLoading, setIsLoading] = useState(false);
    const { mutateAsync, isSuccess } = useAddOrder();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await mutateAsync(data);

            if (isSuccess) {
                Swal.fire("Successfully! Added.", "", "success");
                reset();
                navigate(`/tool/${storedUser.email}/checkout/${toolId}`);
            }
        } catch (error) {
            Swal.fire("There was a problem!", "", "error");
            console.log(error);
        }
        setIsLoading(false);
    };

    if (getSingleToolLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }
    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 md:mt-5 mb-20 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">Purchase Page</h3>
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
                    <p className="mt-7 md:mt-10 flex items-center justify-center md:justify-start text-xl md:text-2xl 2xl:text-3xl text-green-600 font-semibold md:ps-5">{data?.price}<sub className="font-normal ml-2">(per unit)</sub></p>
                </div>
            </div>
            <div className="mt-16">
                <h4 className="text-center mb-7 text-gray-800 font-semibold text-base sm:text-xl 2xl:text-2xl">Order Information</h4>

                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                    <table className="w-full min-w-[250px] max-w-3xl mx-auto rounded-lg">
                        <tbody>
                            <tr className="bg-white border hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Order By</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{storedUser?.fullName}</td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Email</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start">{storedUser?.email}</td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Mobile</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4">
                                    <Controller
                                        name="mobileNo"
                                        control={control}
                                        rules={{
                                            required: 'Mobile number is required',
                                            min: {
                                                value: 0,
                                                message: 'Not allowed negative number.'
                                            },
                                            pattern: {
                                                value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                                                message: 'Invalid mobile number.'
                                            }
                                        }}
                                        defaultValue=""
                                        render={({ field }) => (<>
                                            <input {...field} type="number" id="orderMobileNo" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                            {errors?.mobileNo &&
                                                <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.mobileNo?.message}</p>
                                            }
                                        </>)}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Quantity</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4">
                                    <Controller
                                        name="quantity"
                                        control={control}
                                        rules={{
                                            required: 'Quantity is required',
                                            min: {
                                                value: data?.quantity | 0,
                                                message: `Minimum order ${data?.quantity | 0} pc.`
                                            },
                                        }}
                                        defaultValue=""
                                        render={({ field }) => (<>
                                            <input {...field} type="number" id="orderQuantity" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                            {errors?.quantity &&
                                                <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.quantity?.message}</p>
                                            }
                                        </>)}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border border-t-0 hover:bg-slate-100">
                                <th scope="row" className="text-gray-900 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4 text-start flex justify-between"><p>Location</p><p>:</p></th>
                                <td className="text-gray-700 px-1 xxs:px-2 md:px-4 xl:px-6 py-2 md:py-4">
                                    <Controller
                                        name="location"
                                        control={control}
                                        rules={{
                                            required: 'Location is required',
                                        }}
                                        defaultValue=""
                                        render={({ field }) => (<>
                                            <input {...field} type="text" id="orderLocation" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                            {errors?.location &&
                                                <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.location?.message}</p>
                                            }
                                        </>)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-5 md:mt-7 w-full max-w-3xl mx-auto">{
                        isLoading ?
                            <button disabled type="button" className="rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 inline-flex items-center">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-950 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Processing...
                            </button>
                            :
                            <button type="submit" className="inline-block rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]" data-te-ripple-init data-te-ripple-color="light">
                                Checkout
                            </button>
                    }</p>
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;