import { FaProductHunt, FaUsers } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import navLogo from '../../../assets/images/logo.png';
import { FaBlog } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const AdminLargeSidebar = () => {
    const { storedUser, logOut } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut().catch(err => console.log(err));
        navigate('/login');
    }
    return (
        <div className="hidden xl:block w-80 bg-zinc-100 shadow-2xl relative h-[100vh] overflow-auto">
            <div className='p-2 xl:p-3 w-full'>
                <div className='w-full'>
                    <Link to='/'>
                        <img loading='lazy' className='h-16 xl:h-[4.5rem] 2xl:h-20 3xl:h-24 w-auto' src={navLogo} alt="Company Logo" />
                    </Link>
                </div>
                <ul id='admin_panel_sidebar' className="menu mt-7 h-fit">
                    <li><NavLink to='dashboard' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdSpaceDashboard></MdSpaceDashboard>Dashboard</NavLink></li>
                    <li className='mt-3'>
                        <details>
                            <summary className='bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950'>
                                <FaProductHunt /> Manage Tools
                            </summary>
                            <ul className="p-2">
                                <li className='text-gray-100 mb-1'><NavLink to='manage-tools' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-950 hover:bg-primary hover:text-gray-950"}>All Tools</NavLink></li>
                                <li className='text-gray-100'><NavLink to='add-new-tool' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-950 hover:bg-primary hover:text-gray-950"}>Add New Tool</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li className='mt-3'>
                        <details>
                            <summary className='bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950'>
                                <FaBlog /> Manage Blogs
                            </summary>
                            <ul className="p-2">
                                <li className='text-gray-100 mb-1'><NavLink to='manage-blogs' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-950 hover:bg-primary hover:text-gray-950"}>All Blogs</NavLink></li>
                                <li className='text-gray-100'><NavLink to='add-new-blog' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-950 hover:bg-primary hover:text-gray-950"}>Add New Blog</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    {(storedUser?.role === 'super-admin') && <li className='mt-3'><NavLink to='manage-users' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><FaUsers></FaUsers>Manage Users</NavLink></li>}
                </ul>
            </div>
            <div className='mx-3 mb-1 mt-5' onClick={() => handleSignOut()}>
                <a className='bg-[#00000090] flex items-center px-2 py-2 rounded-md cursor-pointer hover:bg-[#00000080] duration-150 ease-linear text-gray-50'>
                    <img src={storedUser ? storedUser.imageUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt='User Image' loading='lazy' className='w-8 xs:w-10 lg:w-12 border p-1 rounded-full me-1 sm:me-2 lg:me-3' /> Sign Out
                </a>
            </div>
        </div>
    );
};

export default AdminLargeSidebar;