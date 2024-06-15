import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../components/pages/PublicPages/Home/Home';
import Blogs from '../components/pages/PublicPages/Blogs/Blogs';
import Login from '../components/pages/PublicPages/Login/Login';
import Register from '../components/pages/PublicPages/Register/Register';
import NotFound from "../components/shared/NotFound/NotFound";
import Test from "../layout/Test";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import AdminDashboard from "../components/pages/ProtectedPages/AdminDashboardPages/AdminDashboard/AdminDashboard";

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
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminDashboardLayout></AdminDashboardLayout>,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard></AdminDashboard>,
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