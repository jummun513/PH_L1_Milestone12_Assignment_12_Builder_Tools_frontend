import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../../providers/AuthProvider";
import { MdDashboard } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

/* eslint-disable react/prop-types */
const UserSmallSidebar = ({ drawerOpen, setDrawerOpen }) => {
    const { storedUser } = useAuth();
    return (
        <>
            {drawerOpen && <div className='xl:hidden absolute h-full w-full bg-[#000] z-10 opacity-20'></div>}
            <div className={`xl:hidden absolute z-[21] h-[100vh] overflow-auto w-[250px] xxs:w-80 bg-zinc-950 shadow-xl duration-200 ease-linear ${drawerOpen ? 'visible opacity-100 translate-x-0' : '-translate-x-20 invisible opacity-0'}`}>
                <div className='p-2 xl:p-3 w-full'>
                    <ul id='admin_panel_sidebar' className="menu mt-8 md:mt-14 h-fit">
                        {(storedUser?.role === 'user') && <li><NavLink to='dashboard' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdDashboard></MdDashboard>Dashboard</NavLink></li>}
                        {(storedUser?.role === 'user') && <li className='mt-3'><NavLink to='add-review' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdRateReview></MdRateReview>Add Review</NavLink></li>}
                        {(storedUser?.role === 'user') && <li className='mt-3'><NavLink to='wishlist' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><BsFillBookmarkPlusFill></BsFillBookmarkPlusFill>Wishlist</NavLink></li>}
                        <li className='mt-3'><NavLink to='my-profile' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><CgProfile></CgProfile>My Profile</NavLink></li>
                    </ul>
                </div>
                <button onClick={() => setDrawerOpen(!drawerOpen)} className='absolute right-1 top-1 border-none btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary'><AiOutlineClose className='text-gray-950 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineClose></button>
            </div>
        </>
    );
};

export default UserSmallSidebar;