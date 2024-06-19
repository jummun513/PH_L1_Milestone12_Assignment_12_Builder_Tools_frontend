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
                path: 'manage-users',
                element: <AdminManageUsers></AdminManageUsers>,
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