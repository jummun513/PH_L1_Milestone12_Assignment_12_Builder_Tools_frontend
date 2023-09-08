import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/pages/Home/Home'
import Blogs from "../components/pages/Blogs/Blogs";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Loading from "../components/shared/Loading/Loading";
import Test from "../components/pages/Home/Test/Test";


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
            }
        ]
    },
    {
        path: '/loading',
        element: <Loading></Loading>,
    },

    {
        path: '/test',
        element: <Test></Test>,
    },

]);