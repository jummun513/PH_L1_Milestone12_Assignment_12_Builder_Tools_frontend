import { Outlet } from "react-router-dom";
import UserLargeSidebar from "../components/shared/UserLargeSidebar/UserLargeSidebar";
import Navbar from "../components/shared/Navbar/Navbar";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import UserSmallSidebar from "../components/shared/UserSmallSidebar/UserSmallSidebar";

const UserDashboardLayout = () => {
    const { storedUser } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[#fbfbfb] h-[calc(100vh-64px)] lg:h-[calc(100vh-96px)] overflow-auto relative flex w-full mx-auto max-w-[1600px]">
                <UserLargeSidebar />
                <UserSmallSidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />


                {/* upper heading*/}
                <div className='w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-96px)] overflow-auto'>
                    {/* for large device */}
                    <div className='hidden xl:flex w-full justify-between items-center py-10 border-b-2 px-5'>
                        <p className='text-gray-700 font-bold text-xl xl:text-2xl'><span className='text-secondary font-bold text-xl xl:text-2xl'>Welcome,</span> {storedUser?.email}</p>
                    </div>
                    {/* for medium device */}
                    <div className='flex flex-row-reverse xl:hidden w-full px-3 sm:px-5 pt-3 sm:pt-5 pb-5 xs:pb-8 border-b justify-between items-center'>
                        <button onClick={() => setDrawerOpen(!drawerOpen)} className={`border-none btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary ${drawerOpen && 'visible opacity-0 translate-x-0'}`}><AiOutlineMenu className='text-gray-950 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineMenu></button>
                        <p className='text-gray-700 font-bold sm:text-xl'><span className='text-secondary font-bold sm:text-xl'>Welcome,</span> {storedUser?.email}</p>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;