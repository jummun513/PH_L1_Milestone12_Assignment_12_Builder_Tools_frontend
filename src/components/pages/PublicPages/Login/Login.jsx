import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo.jpg';
import { useRef, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import url from '../../../../assets/images/loginBg.svg'
import { useAuth } from '../../../../providers/AuthProvider';
import SocialLogin from '../../../shared/SocialLogin/SocialLogin';

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const formRef = useRef();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, loading } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation().state?.from?.pathname || '/'; // save the user location from where he or she come

    // after submitted form handle
    const formSubmit = (event) => {
        event.preventDefault();
        const e = (email.current.value).trim().toLowerCase();
        const p = password.current.value;

        if (error === '') {
            setIsLoading(true);
            signIn(e, p)
                .then(() => {
                    setIsLoading(false);
                    navigate(location, { replace: true }); //navigate to previous page
                    formRef.current.reset();
                })
                .catch((error) => {
                    console.log(error);
                    setError(error.message);
                    setIsLoading(false);
                })
        }
    }

    return (
        <div className="bg-[#fbfbfb] w-full min-h-screen flex flex-col items-center">
            <div className='py-5 sm:py-10 lg:py-16 mx-auto w-full max-w-screen-xxl px-2 sm:px-8 lg:px-5 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <div className='flex items-end justify-center'>
                    <div className='hidden lg:flex lg:w-[50%] lg:pr-10'>
                        <img className='w-[90%] xl:w-[80%]' loading='lazy' src={url} alt="registration side bar image" />
                    </div>
                    <div className="w-full lg:w-[50%] lg:pl-10 flex flex-col items-center">
                        <div onClick={() => navigate('/')} className='cursor-pointer h-16 w-16 xs:h-24 xs:w-24 rounded-full p-1 border-2 border-primary'><img loading='lazy' className='w-full h-full rounded-full' src={logo} alt="company logo in top" /></div>
                        <h2 className="xxs:text-base xs:text-xl lg:text-2xl font-bold text-gray-800 mt-3 mb-8 md:mt-5 md:mb-10 2xl:mb-16">Sign In with Email and Password</h2>

                        {/* form start */}
                        <form ref={formRef} className='w-full' onSubmit={formSubmit}>
                            {/* Email field */}
                            <div className="relative z-0 w-full mb-6 xs:mb-10 group">
                                <input onChange={() => setError('')} ref={email} type="email" name="login_floating_email" id="login_floating_email" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="sample-user-email=jummunislam516@gmail.com" required />
                                <label htmlFor="login_floating_email" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                <p className='text-xs xs:text-sm mt-1'>We&#39;ll never share your email with anyone else.</p>
                            </div>
                            {/* password field  */}
                            <div onChange={() => setError('')} className="relative z-0 w-full mb-6 xs:mb-8 group">
                                <input ref={password} type={showPassword ? 'text' : 'password'} title='Password must have contain one lowercase(a-z), one uppercase(A-Z), one number(0-9), one special character (!,@,#,$,%,^,&,*) and length must be 8 to 16' name="login_floating_password" id="login_floating_password" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="sample-user-password=12345aA@" required />
                                <label htmlFor="login_floating_password" className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                <div className='flex items-center absolute top-3 right-1'>
                                    {
                                        (password.current?.value !== null) && (showPassword ? <BiShow onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer text-gray-700 h-4 w-4 sm:h-6 sm:w-6 ms-2 md:ms-4'></BiShow> : <BiHide onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer text-gray-700 h-4 w-4 sm:h-6 sm:w-6 ms-2 md:ms-4'></BiHide>)
                                    }
                                </div>
                                {
                                    (error.includes('invalid-login-credentials') && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>Incorrect email/password.</p> ||
                                        error.includes('too-many-requests') && <p className='text-xs sm:text-sm mt-1 sm:mt-3 text-red-600'>Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.</p>)
                                }
                            </div>
                            {/* remember me checkbox */}
                            <div className="mb-8 min-h-[1.5rem] pl-[1.5rem] flex justify-between items-center">
                                <div className='flex items-center'>
                                    <input
                                        className="relative float-left -ml-[1.5rem] mr-[3px] xs:mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                        type="checkbox"
                                        value=""
                                        id="loginCheckboxDefault" required />
                                    <label
                                        className="text-sm xxs:text-base inline-block pl-[0.15rem] text-gray-600 hover:cursor-pointer"
                                        htmlFor="loginCheckboxDefault">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <p className='text-sm xxs:text-base cursor-pointer hover:underline text-blue-600'>Forget Password?</p>
                                </div>
                            </div>
                            {/* submit button */}
                            {
                                (loading | isLoading) ?
                                    <button disabled type="button" className="rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 inline-flex items-center">
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-950 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Processing...
                                    </button>
                                    :
                                    <button type="submit" className="inline-block rounded bg-gradient-to-r from-primary to-grad px-3 py-2 xxs:px-4 xs:px-6 xxs:pb-2 xxs:pt-2.5 text-xs md:text-sm 2xl:text-base font-medium uppercase leading-normal text-gray-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
                                        Sign In
                                    </button>
                            }
                            <p className='text-gray-700 text-sm xxs:text-base mt-6 sm:mt-10'>Not have an account? <Link to='/registration' className='text-blue-600 cursor-pointer hover:underline'>Register here.</Link></p>
                        </form>

                        <div className="lg:hidden divider my-10 w-full mx-auto text-gray-700">OR</div>
                        {/* social login */}
                        <div className='lg:hidden w-full'><SocialLogin></SocialLogin></div>
                    </div >
                </div>

                <div className="hidden lg:flex divider mt-16 mb-10 w-full mx-auto text-gray-700">OR</div>
                {/* social login */}
                <div className='hidden lg:block w-full'><SocialLogin></SocialLogin></div>
            </div>
        </div >
    );
};

export default Login;