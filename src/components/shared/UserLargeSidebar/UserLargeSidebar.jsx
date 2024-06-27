import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";

const UserLargeSidebar = () => {
    const { storedUser } = useAuth();
    return (
        <div className="hidden xl:block w-80 bg-zinc-100 shadow-2xl relative h-[calc(100vh-64px)] lg:h-[calc(100vh-96px)] overflow-auto">
            <div className='p-2 xl:p-3 w-full'>
                <ul id='admin_panel_sidebar' className="menu mt-7 h-fit">
                    {(storedUser?.role === 'user') && <li><NavLink to='dashboard' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdDashboard></MdDashboard>Dashboard</NavLink></li>}
                    {(storedUser?.role === 'user') && <li className='mt-3'><NavLink to='add-review' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdRateReview />Add Review</NavLink></li>}
                    {(storedUser?.role === 'user') && <li className='mt-3'><NavLink to='wishlist' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><BsFillBookmarkPlusFill></BsFillBookmarkPlusFill>Wishlist</NavLink></li>}
                    <li className='mt-3'><NavLink to='my-profile' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><CgProfile></CgProfile>My Profile</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default UserLargeSidebar;