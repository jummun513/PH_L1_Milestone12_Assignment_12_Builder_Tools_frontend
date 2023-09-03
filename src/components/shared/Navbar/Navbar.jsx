import { useState } from "react";
import navLogo from '../../../assets/images/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineUser, AiFillCaretDown } from 'react-icons/ai';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { MdDashboardCustomize, MdAdminPanelSettings } from 'react-icons/md';
import './Navbar.css';
// import navLogoLazy from '../../../assets/images/logo-lazy.png';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openUserDashboard, setOpenUserDashboard] = useState(false);
    // const [openSubmenu, setOpenSubmenu] = useState(false);


    const user = false;

    const navItem = [
        { href: '/', name: 'Home' },
        { href: '/blogs', name: 'Blogs' },
        { href: '/', name: 'Blogs' },
        { href: '/', name: 'Blogs' },
    ]

    return (
        <div>
            <nav className="bg-white">
                <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
                    <div className="relative flex h-16 lg:h-24 items-center justify-between">
                        <div onClick={() => { setOpenNavbar(!openNavbar); setOpenUserDashboard(false) }} className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            <button type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none bg-primary text-white focus:ring-2 focus:ring-inset focus:ring-gray-300"
                                aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 md:h-10 xl:h-14 w-auto" src={navLogo}
                                    alt="Company Logo" />
                            </div>
                            <ul className="hidden md:flex md:ms-10 lg:ms-14 items-center md:space-x-6 lg:space-x-12">
                                {navItem.map((item, idx) => (
                                    <li id='sidebar' key={idx}>
                                        <NavLink to={item.href} className="md:text-sm uppercase lg:text-base text-gray-950 font-semibold rounded-md px-4 py-3 hover:bg-primary hover:text-white md:hover:bg-primary ease-linear duration-150">
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                            {
                                user ?
                                    <div className="relative ml-3 md:ml-5">
                                        <div>
                                            <button onClick={() => { setOpenNavbar(false); setOpenUserDashboard(!openUserDashboard) }} type="button"
                                                className="relative items-center flex rounded-full text-sm focus:outline-none ring-2 ring-primary"
                                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="absolute -inset-1.5"></span>
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt="" />
                                                <AiFillCaretDown className={`h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5 mx-1 ${openUserDashboard ? 'rotate-180 duration-150 ease-linear' : 'rotate-0 duration-150 ease-linear'}`}></AiFillCaretDown>
                                            </button>
                                        </div>

                                        {
                                            openUserDashboard && <div className="absolute right-0 z-10 mt-4 lg:mt-5 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                                    <AiOutlineUser className="me-2 h-5 w-5"></AiOutlineUser>
                                                    <a href="#" role="menuitem" tabIndex="-1"
                                                        id="user-menu-item-2">Your Profile</a>
                                                </div>
                                                <div className="flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                                    <MdDashboardCustomize className="me-2 h-5 w-5"></MdDashboardCustomize>
                                                    <a href="#" role="menuitem" tabIndex="-1"
                                                        id="user-menu-item-2">Dashboard</a>
                                                </div>
                                                <div className="flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                                    <BsFillBookmarkPlusFill className="me-2 h-5 w-5"></BsFillBookmarkPlusFill>
                                                    <a href="#" role="menuitem" tabIndex="-1"
                                                        id="user-menu-item-2">Wishlist</a>
                                                </div>
                                                <div className="flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                                    <MdAdminPanelSettings className="me-2 h-5 w-5"></MdAdminPanelSettings>
                                                    <a href="#" role="menuitem" tabIndex="-1"
                                                        id="user-menu-item-2">Admin Panel</a>
                                                </div>
                                                <div className="mt-3 bg-gray-100 flex items-center px-4 py-2 sm:py-3 text-sm lg:text-base text-gray-900 hover:text-primary duration-150 ease-linear">
                                                    <FaSignOutAlt className="me-2 h-5 w-5"></FaSignOutAlt>
                                                    <a href="#" role="menuitem" tabIndex="-1"
                                                        id="user-menu-item-2">Sign out</a>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <div>
                                        <Link to='/login'><button className="btn ms-2 md:ms-5 btn-sm lg:btn-md bg-gradient-to-r from-primary to-grad border border-primary text-white hover:border-secondary">Sign In</button></Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                {
                    openNavbar &&
                    <ul className="block md:hidden bg-gray-50 text-gray-950 space-y-5 text-xs sm:text-sm bg-gradient-to-r from-primary to-grad">
                        {navItem.map((item, idx) => (
                            <li id='sidebar' key={idx}>
                                <NavLink to={item.href} className="uppercase flex py-2 w-full text-gray-50 hover:bg-secondary justify-center ease-linear duration-150">
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
            </nav>
        </div>
    );
};

export default Navbar;