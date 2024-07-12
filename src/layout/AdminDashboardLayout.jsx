import AdminLargeSidebar from "../components/shared/AdminLargeSidebar/AdminLargeSidebar";
import { useState } from "react";
import AdminSmallSidebar from "../components/shared/AdminSmallSidebar/AdminSmallSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../providers/AuthProvider";
import { FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineUser, AiFillCaretDown } from 'react-icons/ai';

const AdminDashboardLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openUserDashboard, setOpenUserDashboard] = useState(false);
    const { storedUser, logOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut().catch(err => console.log(err));
        navigate('/');
    }

    return (
        <>
            <div className="bg-[#fbfbfb] h-[100vh] overflow-auto relative flex w-full mx-auto max-w-[1600px]">
                <AdminLargeSidebar />
                <AdminSmallSidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />


                {/* dashboard navbar */}
                <div className='w-full h-[100vh] overflow-auto'>
                    <div className='relative flex w-full justify-between items-center py-2 md:py-3 border-b-2 px-2 md:px-5'>
                        <button onClick={() => setDrawerOpen(!drawerOpen)} className={`lg:hidden border-none btn btn-sm sm:btn-md bg-primary hover:bg-secondary ${drawerOpen && 'visible opacity-0 translate-x-0'}`}><AiOutlineMenu className='text-gray-100 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineMenu></button>
                        <p className='hidden lg:block text-gray-700 font-bold lg:text-xl xl:text-2xl'><span className='text-secondary font-bold text-xl xl:text-2xl'>Welcome,</span> {storedUser?.fullName}</p>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button"
                                className="relative rounded-full p-1 hover:text-primary text-primary focus:outline-none ring-2 ring-primary">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3 md:ml-5">
                                <div>
                                    <button onClick={() => setOpenUserDashboard(!openUserDashboard)} type="button"
                                        className="relative items-center flex rounded-full text-sm focus:outline-none ring-2 ring-primary"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full"
                                            src={storedUser.imageUrl ? storedUser.imageUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                            alt="User Image" />
                                        <AiFillCaretDown className={`h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5 mx-1 ${openUserDashboard ? 'rotate-180 duration-150 ease-linear' : 'rotate-0 duration-150 ease-linear'}`}></AiFillCaretDown>
                                    </button>
                                </div>
                                {
                                    openUserDashboard && <div className="absolute right-0 z-10 mt-4 lg:mt-5 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div>
                                            <p className="text-gray-950 mx-2 break-words">{storedUser.email}</p>
                                        </div>
                                        <div className="flex hover:cursor-pointer items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                            <AiOutlineUser className="me-2 h-5 w-5"></AiOutlineUser>
                                            <a href="/user/my-profile" role="menuitem" tabIndex="-1"
                                                id="user-menu-item-2">Your Profile</a>
                                        </div>
                                        <div onClick={handleSignOut} className="mt-3 hover:cursor-pointer bg-gray-100 flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                            <FaSignOutAlt className="me-2 h-5 w-5"></FaSignOutAlt>
                                            <a href="#" role="menuitem" tabIndex="-1"
                                                id="user-menu-item-2">Sign out</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AdminDashboardLayout;