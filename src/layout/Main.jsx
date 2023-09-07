import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';


const Main = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </QueryClientProvider>
    );
};

export default Main;