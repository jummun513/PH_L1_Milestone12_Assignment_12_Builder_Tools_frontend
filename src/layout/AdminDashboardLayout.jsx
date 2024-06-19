import AdminLargeSidebar from "../components/shared/AdminLargeSidebar/AdminLargeSidebar";
import { useState } from "react";
import AdminSmallSidebar from "../components/shared/AdminSmallSidebar/AdminSmallSidebar";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../providers/AuthProvider";

const AdminDashboardLayout = () => {
    const { storedUser } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
            <div className="bg-[#fbfbfb] h-[100vh] overflow-auto relative flex w-full mx-auto max-w-[1600px]">
                <AdminLargeSidebar />
                <AdminSmallSidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />


                {/* upper heading*/}
                <div className='w-full h-[100vh] overflow-auto'>
                    {/* for large device */}
                    <div className='hidden xl:flex w-full justify-between items-center py-10 border-b-2 px-5'>
                        <p className='text-gray-700 font-bold text-xl xl:text-2xl'><span className='text-secondary font-bold text-xl xl:text-2xl'>Welcome,</span> {storedUser?.email}</p>
                        <Link to="/"><button className='btn btn-sm xl:btn-md bg-primary hover:bg-secondary border-none text-gray-50'>Back to home</button></Link>
                    </div>
                    {/* for medium device */}
                    <div className='hidden sm:flex xl:hidden w-full px-3 sm:px-5 pt-3 sm:pt-5 pb-5 xs:pb-8 border-b justify-between items-center'>
                        <button onClick={() => setDrawerOpen(!drawerOpen)} className={`border-none btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary ${drawerOpen && 'visible opacity-0 translate-x-0'}`}><AiOutlineMenu className='text-gray-950 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineMenu></button>
                        <p className='text-gray-700 font-bold sm:text-xl'><span className='text-secondary font-bold sm:text-xl'>Welcome,</span> {storedUser?.email}</p>
                        <Link to="/"><button className='btn btn-md bg-primary hover:bg-secondary border-none text-gray-50'>Back to home</button></Link>
                    </div>
                    {/* for small device */}
                    <div className='sm:hidden w-full px-2 pt-3 pb-4 border-b flex flex-col items-center'>
                        <div className='flex justify-between items-center w-full mb-4'>
                            <button onClick={() => setDrawerOpen(!drawerOpen)} className={`border-none btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary ${drawerOpen && 'visible opacity-0 translate-x-0'}`}><AiOutlineMenu className='text-gray-950 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineMenu></button>
                            <Link to='/'><button className='btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary border-none text-gray-950'>Back to home</button></Link>
                        </div>
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

export default AdminDashboardLayout;