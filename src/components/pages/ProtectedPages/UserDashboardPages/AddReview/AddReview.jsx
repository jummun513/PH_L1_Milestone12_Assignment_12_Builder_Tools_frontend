import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../../../../providers/AuthProvider";
import { Rating } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAddReview } from "../../../../../utilities/hooks/reviews.hook";

const AddReview = () => {
    const { storedUser } = useAuth();
    const { control, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: { name: storedUser?.fullName, image: storedUser.imageUrl ? storedUser.imageUrl : "" } });
    const [isLoading, setIsLoading] = useState(false);
    const { mutateAsync } = useAddReview();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            await mutateAsync(data);

            Swal.fire("Successfully! Added.", "", "success");
            reset();
        } catch (error) {
            Swal.fire("There was a problem!", "", "error");
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 md:mt-5 mb-10 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">Add Review</h3>
            <div className="py-8 px-5 w-full max-w-[35rem] mx-auto rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="mr-2 sm:mr-4 w-8 xxs:w-12 lg:w-14 2xl:w-16 rounded-full ring-2 ring-primary">
                        <img className="rounded-full" src={storedUser.imageUrl ? storedUser.imageUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="user image" />
                    </div>
                    <p className="text-gray-800 font-semibold">{storedUser?.fullName}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    {/* Rating field */}
                    <div className="mt-3 mb-6">
                        <Controller
                            name="rating"
                            control={control}
                            defaultValue={4}
                            render={({ field }) => (
                                <Rating
                                    name="simple-controlled"
                                    {...field}
                                    value={Number(field.value)}
                                    precision={0.5}
                                />

                            )}
                        />
                    </div>

                    {/* textarea field */}
                    <div className="">
                        <Controller
                            name="description"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Your evaluation is required' }}
                            render={({ field }) => (
                                <div>
                                    <textarea {...field} style={{ resize: 'none' }} className="w-full h-24 xs:h-48 bg-gray-50 border border-gray-400 rounded-md text-gray-950 text-xs sm:text-sm p-4" placeholder="Share your experience with Builder Tools..." required></textarea>
                                    {errors?.description &&
                                        <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.description?.message}</p>
                                    }
                                </div>
                            )}
                        />
                    </div>

                    <p className="text-end mt-4 sm:mt-5 lg:mt-8">
                        {
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
                                    Post
                                </button>
                        }
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AddReview;