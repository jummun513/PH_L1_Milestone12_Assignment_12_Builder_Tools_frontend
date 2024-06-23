import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddTool } from "../../../../../utilities/hooks/tools.hook";

const category = [
    { id: 1, value: "Ladder Stairs", label: "Ladder Stairs" },
    { id: 2, value: "Mandatory Tools", label: "Mandatory Tools" },
    { id: 3, value: "Electric Tools", label: "Electric Tools" },
    { id: 4, value: "Heavy Tools", label: "Heavy Tools" },
]

const AdminAddTool = () => {
    const { control, handleSubmit, formState: { errors }, reset, register } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { mutateAsync, isSuccess } = useAddTool();
    const formData = new FormData();

    const onSubmit = async (data) => {
        try {
            const { img, ...rest } = data;
            if (img instanceof FileList && img.length > 0) {
                formData.append("file", img[0]);
            }
            formData.append("data", JSON.stringify(rest));

            setIsLoading(true);

            await mutateAsync(formData);

            if (isSuccess) {
                Swal.fire("Successfully! Added.", "", "success");
                reset();
            }
        } catch (error) {
            Swal.fire("There was a problem!", "", "error");
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div className="px-5 sm:px-10 py-7 xxs:pt-10 xxs:pb-14">
            <h2 className="text-center text-xl xs:text-3xl md:text-4xl font-bold text-gray-800 mb-5 xs:mb-10 md:mb-14">Add New Tool</h2>
            <div>
                {/* form start */}
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                    {/* heading+min-order field */}
                    <div className="relative md:flex z-0 w-full mb-6 xs:mb-10 group">
                        <Controller
                            name="heading"
                            control={control}
                            rules={{
                                required: 'Heading is required',
                                pattern: {
                                    value: /^[A-Za-z0-9\s.'\-_?!]+$/, // Regular expression for letters and spaces
                                    message: 'Heading can only contain letters, numbers, spaces, ., \', -, ?, and _',
                                },
                            }}
                            defaultValue=""
                            render={({ field }) => (<div className="md:w-1/2 md:me-5 mb-6 md:mb-0">
                                <label htmlFor="toolHeading" className="block mb-2 text-sm xl:text-base font-medium text-gray-900">Heading <sup className='text-red-500'>*</sup></label>
                                <input {...field} type="text" id="toolHeading" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                {errors?.heading &&
                                    <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.heading?.message}</p>

                                }
                            </div>)}
                        />
                        <Controller
                            name="minOrder"
                            control={control}
                            rules={{
                                required: 'Minimum Order is required',
                                min: 0,
                            }}
                            defaultValue=""
                            render={({ field }) => (<div className="md:w-1/2">
                                <label htmlFor="toolMinOrder" className="block mb-2 text-sm xl:text-base font-medium text-gray-900">Minimum Order <sup className='text-red-500'>*</sup></label>
                                <input {...field} type="number" min={0} id="toolMinOrder" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                {errors?.minOrder &&
                                    <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.minOrder?.message}</p>

                                }
                            </div>)}
                        />
                    </div>

                    {/* quantity + price */}
                    <div className="relative md:flex z-0 w-full mb-6 xs:mb-10 group">
                        <Controller
                            name="quantity"
                            control={control}
                            rules={{
                                required: 'Available quantity is required',
                                min: 0
                            }}
                            defaultValue=""
                            render={({ field }) => (<div className="md:w-1/2 md:me-5 mb-6 md:mb-0">
                                <label htmlFor="toolAvailableQuantity" className="block mb-2 text-sm xl:text-base font-medium text-gray-900">Available Quantity <sup className='text-red-500'>*</sup></label>
                                <input {...field} type="number" min={0} id="toolAvailableQuantity" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                {errors?.quantity &&
                                    <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.quantity?.message}</p>
                                }
                            </div>)}
                        />
                        <Controller
                            name="price"
                            control={control}
                            rules={{
                                required: 'Unit Price is required',
                                min: 0,
                            }}
                            defaultValue=""
                            render={({ field }) => (<div className="md:w-1/2">
                                <label htmlFor="toolUnitPrice" className="block mb-2 text-sm xl:text-base font-medium text-gray-900">Unit Price <sup className='text-red-500'>*</sup></label>
                                <input {...field} type="number" min={0} id="toolUnitPrice" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                                {errors?.price &&
                                    <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.price?.message}</p>
                                }
                            </div>)}
                        />
                    </div>

                    {/* file field */}
                    <div className="relative z-0 w-full mb-6 xs:mb-10 group">
                        <Controller
                            name=""
                            control={control}
                            rules={{ required: 'Image is required' }}
                            defaultValue=""
                            render={() => (
                                <div>
                                    <label htmlFor="Tool Image" className="block mb-2 md:mb-3 text-sm xl:text-base font-medium text-gray-900">Photo <sup className='text-red-500'>*</sup></label>
                                    <input {...register('img')} id="Tool Image" type="file" className="file-input file-input-bordered text-gray-900 bg-transparent border-gray-800 w-full" />
                                    {errors?.image &&
                                        <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.image?.message}</p>
                                    }
                                </div>
                            )
                            }
                        />
                    </div>

                    {/* category field */}
                    <div className="relative z-0 w-full mb-6 xs:mb-10 group">
                        <Controller
                            name="category"
                            control={control}
                            rules={{ required: 'Category is required' }}
                            defaultValue=""
                            render={({ field }) => (
                                <div>
                                    <select
                                        {...field}
                                        id="blogCategory"
                                        className={`w-full text-gray-700 border p-2 rounded mt-1 mb-2 focus:outline-none ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                                    >
                                        <option value="">Select Category</option>
                                        {
                                            category.map((item, idx) => (
                                                <option key={idx} value={item.value}>{item.label}</option>
                                            ))
                                        }
                                    </select>
                                    {errors?.category &&
                                        <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors?.category?.message}</p>

                                    }
                                </div>
                            )
                            }
                        />
                    </div>

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
                                submit
                            </button>
                    }
                </form>
            </div>
        </div>
    );
};

export default AdminAddTool;