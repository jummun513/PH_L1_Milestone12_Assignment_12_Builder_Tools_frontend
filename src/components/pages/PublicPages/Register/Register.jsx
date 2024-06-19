import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useRef, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import url from '../../../../assets/images/registerBg.svg';
import { Controller, useForm } from "react-hook-form";
import './Register.css';
import { useAuth } from '../../../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const { loading, createNewUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors }, getValues } = useForm();

    // submit handle
    const onSubmit = (data) => {
        const email = data.register_email.trim().toLowerCase();
        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, password, register_email, ...rest } = data;

        setIsLoading(true);

        createNewUser(email, confirmPassword).then(async () => {
            try {
                await axios.post(`${import.meta.env.VITE_serverSideLink}/users`, { email: register_email.trim().toLowerCase(), ...rest });
                setIsLoading(false);
                reset();
                Swal.fire({
                    title: 'Success!',
                    text: "Successfully create user.",
                    icon: 'success',
                    confirmButtonColor: '#15803d',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false,
                }).then(result => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                })
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }).catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    };

    // password validation and strength check
    const checkPasswordValidation = () => {
        let pass = getValues('password');
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{1,})");
        if (strongRegex.test(pass)) {
            setPasswordStrength('strong_password');
        }
        else if (mediumRegex.test(pass)) {
            setPasswordStrength('medium_password');
        }
        else {
            setPasswordStrength('weak_password');
        }
    }

    return (
        <div className="bg-[#fbfbfb] w-full min-h-screen flex flex-col items-center">
            <div className='py-5 sm:py-10 lg:py-16 mx-auto w-full max-w-screen-xxl px-2 sm:px-8 lg:px-5 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <div className='flex items-end justify-center'>
                    <div className='hidden lg:flex lg:w-[50%] lg:pr-10'>
                        <img loading='lazy' src={url} alt="registration side bar image" />
                    </div>
                    <div className="w-full lg:w-[50%] lg:pl-10 flex flex-col items-center">
                        <div className='h-16 w-16 xs:h-24 xs:w-24 rounded-full p-1 border-2 border-primary'><img loading='lazy' className='w-full h-full rounded-full' src={logo} alt="company logo in top" /></div>
                        <h2 className="text-base xs:text-xl sm:text-2xl font-bold text-gray-800 mt-3 mb-8 md:mt-5 sm:mb-10 2xl:mb-16">Create New Account</h2>

                        {/* form start */}
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            {/* Name field */}
                            <div className="relative z-0 w-full mb-6 xs:mb-10 group">
                                <Controller
                                    name="fullName"
                                    control={control}
                                    rules={{
                                        required: 'Full Name is required',
                                        minLength: {
                                            value: 5,
                                            message: 'Full Name must be at least 5 characters',
                                        },
                                        maxLength: {
                                            value: 32,
                                            message: 'Full Name must be at most 32 characters',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z\s.'\-_]+$/, // Regular expression for letters and spaces
                                            message: 'Full Name can only contain letters, spaces, ., \', -, and _',
                                        },
                                    }}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <div>
                                            <input type="text" {...field} id="fullName" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="fullName" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name <sup className='text-red-500'>*</sup></label>
                                            {errors?.fullName &&
                                                <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors.fullName.message}</p>

                                            }
                                        </div>
                                    )}
                                />
                            </div>

                            {/* Gender field */}
                            <div className='relative z-0 w-full mb-6 xs:mb-8 group'>
                                <label htmlFor='gender' className='text-gray-500'>Gender <sup className='text-red-500'>*</sup></label>
                                <Controller
                                    name="gender"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Gender is required' }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            id="gender"
                                            className={`w-full text-gray-700 border p-2 rounded mt-1 mb-2 focus:outline-none ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    )
                                    }
                                />
                                {errors.gender && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors.gender.message}</p>}
                            </div>

                            {/* Email field */}
                            <div className="relative z-0 w-full mb-6 xs:mb-10 group">
                                <Controller
                                    name="register_email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                        onChange: () => setError('')
                                    }}
                                    render={({ field }) => (
                                        <div>
                                            <input type="email" {...field} id="register_email" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="register_email" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address <sup className='text-red-500'>*</sup></label>
                                            <p className='text-xs xs:text-sm mt-1 text-gray-700'>We&#39;ll never share your email with anyone else.</p>
                                            {errors.register_email && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors.register_email.message}</p>}
                                            {error.includes('email-already-in-use') && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>This email is already registered.</p>}
                                        </div>
                                    )}
                                />
                                {/* {
                                    ((error.includes('email-already-in-use')) && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>This email is already register!</p>)
                                } */}
                            </div>

                            {/* password field  */}
                            <div className="relative z-0 w-full mb-6 xs:mb-8 group">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                            message: 'Password must contain at least 8 characters, including at least one number, one lowercase, and one uppercase letter.',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div>
                                            <input onKeyUp={checkPasswordValidation} type={showPassword ? 'text' : 'password'} {...field} title='Password must have contain one lowercase(a-z), one uppercase(A-Z), one number(0-9), one special character (!,@,#,$,%,^,&,*) and length must be 8 to 16' id="password" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="password" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <sup className='text-red-500'>*</sup></label>
                                            {errors.password && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors.password.message}</p>}
                                        </div>
                                    )}
                                />

                                <div className='flex items-center absolute top-3 right-1'>
                                    {
                                        ((passwordStrength.includes('strong_password')) && <p className='text-xs xs:text-sm xs:font-semibold text-green-600'>Strong</p>) ||
                                        ((passwordStrength.includes('medium_password')) && <p className='text-xs xs:text-sm xs:font-semibold text-yellow-400'>Medium</p>) ||
                                        ((passwordStrength.includes('weak_password')) && <p className='text-xs xs:text-sm xs:font-semibold text-red-500'>Weak</p>)
                                    }
                                    {
                                        (password.current?.value !== null) && (showPassword ? <BiShow onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer text-gray-700 h-4 w-4 sm:h-6 sm:w-6 ms-2 md:ms-4'></BiShow> : <BiHide onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer text-gray-700 h-4 w-4 sm:h-6 sm:w-6 ms-2 md:ms-4'></BiHide>)
                                    }
                                </div>
                                {/* {
                                    error.includes('invalid_password') && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>Password must have contain one lowercase&#40;a-z&#41;, one uppercase&#40;A-Z&#41;, one number&#40;0-9&#41;, one special character &#40;!,@,#,$,%,^,&,*&#41; and length must be 8 to 16</p>
                                } */}
                            </div>

                            {/*confirm password field  */}
                            <div className="relative z-0 w-full mb-6 xs:mb-8 group">
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Confirm Password is required',
                                        validate: (value) => value === getValues('password') || 'Passwords do not match',
                                    }}
                                    render={({ field }) => (
                                        <div>
                                            <input type={showConfirmPassword ? 'text' : 'password'} {...field} id="confirmPassword" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password <sup className='text-red-500'>*</sup></label>
                                            {errors.confirmPassword && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>{errors.confirmPassword.message}</p>}
                                        </div>
                                    )}
                                />
                                {
                                    (confirmPassword.current?.value !== null) && (showConfirmPassword ? <BiShow onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} className='cursor-pointer absolute text-gray-700 top-3 right-1 h-4 w-4 sm:h-6 sm:w-6'></BiShow> : <BiHide onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} className='cursor-pointer absolute text-gray-700 top-3 right-1 h-4 w-4 sm:h-6 sm:w-6'></BiHide>)
                                }
                            </div>

                            {/* term and condition check */}
                            <div className="mb-8 min-h-[1.5rem] pl-[1.5rem] flex justify-between items-center">
                                <div className='flex items-center'>
                                    <input className="z-10 relative float-left -ml-[1.5rem] mr-[3px] xs:mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent" type="checkbox" value="" id="RegisterCheckboxDefault" required />
                                    <label className="text-xs xxs:text-sm sm:text-base inline-block pl-[0.15rem] text-gray-600 hover:cursor-pointer" htmlFor="RegisterCheckboxDefault">
                                        Agree with terms & conditions
                                    </label>
                                </div>
                                <div>
                                    <p className='text-xs xxs:text-sm sm:text-base cursor-pointer hover:underline text-blue-600'>Read here</p>
                                </div>
                            </div>

                            {
                                (loading || isLoading) ?
                                    <button disabled type="button" className="rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 inline-flex items-center">
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-950 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Processing...
                                    </button>
                                    :
                                    <button type="submit" className="inline-block rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]" data-te-ripple-init data-te-ripple-color="light">
                                        Register
                                    </button>
                            }
                            <p className='text-gray-700 mt-6 sm:mt-10'>Already registered? <Link to='/login' className='text-blue-600 cursor-pointer hover:underline'>Login here.</Link></p>
                        </form>

                        {/* social login for small device*/}
                        <div className="lg:hidden divider my-10 w-full mx-auto text-gray-700">OR</div>
                        <div className='lg:hidden w-full'><SocialLogin></SocialLogin></div>
                    </div >
                </div>

                {/* social login for large device */}
                <div className="hidden lg:flex divider mt-16 mb-10 w-full mx-auto text-gray-700">OR</div>
                <div className='hidden lg:block w-full'><SocialLogin></SocialLogin></div>
            </div >
        </div >
    );
};

export default Register;