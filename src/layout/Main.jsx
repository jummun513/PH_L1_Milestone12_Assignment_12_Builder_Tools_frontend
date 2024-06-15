import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';


const Main = () => {
    const location = useLocation();

    return (
        <>
            {(
                location.pathname.includes('login') ||
                location.pathname.includes('registration') ||
                location.pathname.includes('admin-panel')
            ) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {
                (
                    location.pathname.includes('login') ||
                    location.pathname.includes('registration') ||
                    location.pathname.includes('admin-panel')
                ) ||
                <Footer></Footer>
            }
        </>
    );
};

export default Main;