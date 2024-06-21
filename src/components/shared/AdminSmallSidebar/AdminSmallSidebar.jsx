/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import navLogo from '../../../assets/images/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const AdminSmallSidebar = ({ drawerOpen, setDrawerOpen }) => {
    const { storedUser, logOut } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut().catch(err => console.log(err));
        navigate('/login');
    }
    return (
        <>
            {drawerOpen && <div className='xl:hidden absolute h-full w-full bg-[#000] z-10 opacity-20'></div>}
            <div className={`xl:hidden absolute z-[21] h-[100vh] overflow-auto w-[250px] xxs:w-80 bg-zinc-950 shadow-xl duration-200 ease-linear ${drawerOpen ? 'visible opacity-100 translate-x-0' : '-translate-x-20 invisible opacity-0'}`}>
                <div className='p-2 xl:p-3 w-full'>
                    <div className='w-full'>
                        <Link to='/'>
                            <img loading='lazy' className='h-10 sm:h-14 xl:h-16 w-auto' src={navLogo} alt="Company Logo" />
                        </Link>
                    </div>
                    <ul id='admin_panel_sidebar' className="menu mt-7 h-fit">
                        <li><NavLink to='dashboard' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><MdSpaceDashboard></MdSpaceDashboard>Dashboard</NavLink></li>
                        <li className='mt-3'>
                            <details>
                                <summary className='bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950'>
                                    <FaProductHunt /> Manage Tools
                                </summary>
                                <ul className="p-2 mt-2">
                                    <li className='text-gray-100 mb-1'><NavLink to='manage-tools' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-50 hover:bg-primary hover:text-gray-50"}>All Tools</NavLink></li>
                                    <li className='text-gray-100'><NavLink to='add-new-tool' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-50 hover:bg-primary hover:text-gray-50"}>Add New Tool</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li className='mt-3'>
                            <details>
                                <summary className='bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950'>
                                    <FaBlog /> Manage Blogs
                                </summary>
                                <ul className="p-2 mt-2">
                                    <li className='text-gray-100 mb-1'><NavLink to='manage-blogs' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-50 hover:bg-primary hover:text-gray-50"}>All Blogs</NavLink></li>
                                    <li className='text-gray-100'><NavLink to='add-new-blog' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "text-gray-50 hover:bg-primary hover:text-gray-50"}>Add New Blog</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        {(storedUser?.role === 'super-admin') && <li className='mt-3'><NavLink to='manage-users' className={({ isActive }) => isActive ? "bg-primary hover:bg-primary text-gray-950 hover:text-gray-950" : "bg-gray-300 text-gray-950 hover:bg-primary hover:text-gray-950"}><FaUsers></FaUsers>Manage Users</NavLink></li>}
                    </ul>
                </div>
                <div className='mx-3 mb-1 mt-5' onClick={() => handleSignOut()}>
                    <a className='bg-[#ffffffd0] text-gray-950 flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#fffffff6] duration-150 ease-linear'>
                        <img src={storedUser ? storedUser.imageUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt='User Image' loading='lazy' className='w-8 xs:w-10 lg:w-12 border border-gray-950 p-1 rounded-full me-1 sm:me-2 lg:me-3' /> Sign Out
                    </a>
                </div>
                <button onClick={() => setDrawerOpen(!drawerOpen)} className='absolute right-1 top-1 border-none btn btn-xs xs:btn-sm sm:btn-md bg-primary hover:bg-secondary'><AiOutlineClose className='text-gray-950 h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6'></AiOutlineClose></button>
            </div>
        </>
    );
};

export default AdminSmallSidebar;