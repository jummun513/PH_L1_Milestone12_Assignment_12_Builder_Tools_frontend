import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../providers/AuthProvider';


const Main = () => {
    const queryClient = new QueryClient();
    const location = useLocation();
    // console.log(location);

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
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
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default Main;