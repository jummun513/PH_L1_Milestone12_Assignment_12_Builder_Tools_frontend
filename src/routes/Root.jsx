import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../components/pages/PublicPages/Home/Home';
import Blogs from '../components/pages/PublicPages/Blogs/Blogs';
import Tools from '../components/pages/PublicPages/Tools/Tools';
import About from '../components/pages/PublicPages/About/About';
import Login from '../components/pages/PublicPages/Login/Login';
import Register from '../components/pages/PublicPages/Register/Register';
import NotFound from "../components/shared/NotFound/NotFound";
import Test from "../layout/Test";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import AdminDashboard from "../components/pages/ProtectedPages/AdminDashboardPages/AdminDashboard/AdminDashboard";
import AdminAddTool from "../components/pages/ProtectedPages/AdminDashboardPages/AdminAddTool/AdminAddTool";
import AdminManageTools from "../components/pages/ProtectedPages/AdminDashboardPages/AdminManageTools/AdminManageTools";
import AdminManageUsers from "../components/pages/ProtectedPages/AdminDashboardPages/AdminManageUsers/AdminManageUsers";
import PrivateAdminRoutes from "./authGuard/PrivateAdminRoutes";
import UserDashboardLayout from "../layout/UserDashboardLayout";
import UserDashboard from "../components/pages/ProtectedPages/UserDashboardPages/UserDashboard/UserDashboard";
import UserProfile from "../components/pages/ProtectedPages/UserDashboardPages/UserProfile/UserProfile";
import UserWishList from "../components/pages/ProtectedPages/UserDashboardPages/UserWishList/UserWishList";
import PrivateUserRoutes from "./authGuard/PrivateUserRoutes";
import PrivateSuperAdminRoutes from "./authGuard/PrivateSuperAdminRoutes";
import PrivateRoutes from "./authGuard/PrivateRoutes";
import AddReview from "../components/pages/ProtectedPages/UserDashboardPages/AddReview/AddReview";
import AdminAddBlog from "../components/pages/ProtectedPages/AdminDashboardPages/AdminAddBlog/AdminAddBlog";
import AdminManageBlogs from "../components/pages/ProtectedPages/AdminDashboardPages/AdminManageBlogs/AdminManageBlogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Register></Register>,
            },
            {
                path: '/tools',
                element: <Tools />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ]
    },
    {
        path: "/admin",
        element: <PrivateAdminRoutes><AdminDashboardLayout /></PrivateAdminRoutes>,
        children: [
            { index: true, element: <Navigate to="dashboard"></Navigate> },
            {
                path: 'dashboard',
                element: <AdminDashboard></AdminDashboard>,
            },
            {
                path: 'add-new-tool',
                element: <AdminAddTool></AdminAddTool>,
            },
            {
                path: 'manage-tools',
                element: <AdminManageTools></AdminManageTools>,
            },
            {
                path: 'add-new-blog',
                element: <AdminAddBlog></AdminAddBlog>,
            },
            {
                path: 'manage-blogs',
                element: <AdminManageBlogs></AdminManageBlogs>,
            },
            {
                path: 'manage-users',
                element: <PrivateSuperAdminRoutes><AdminManageUsers></AdminManageUsers></PrivateSuperAdminRoutes>,
            }
        ]
    },
    {
        path: "/user",
        element: <PrivateRoutes><UserDashboardLayout /></PrivateRoutes>,
        children: [
            { index: true, element: <Navigate to="dashboard"></Navigate> },
            {
                path: 'dashboard',
                element: <PrivateUserRoutes><UserDashboard /></PrivateUserRoutes>,
            },
            {
                path: 'add-review',
                element: <PrivateUserRoutes><AddReview /></PrivateUserRoutes>,
            },
            {
                path: 'my-profile',
                element: <UserProfile></UserProfile>,
            },
            {
                path: 'wishlist',
                element: <PrivateUserRoutes><UserWishList /></PrivateUserRoutes>,
            }
        ]
    },
    {
        path: "/test",
        element: <Test></Test>,
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);