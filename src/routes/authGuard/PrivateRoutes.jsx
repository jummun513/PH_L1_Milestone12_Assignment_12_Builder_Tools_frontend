/* eslint-disable react/prop-types */
import { useAuth } from "../../providers/AuthProvider";
import Loading from "../../components/shared/Loading/Loading";
import NotFound from "../../components/shared/NotFound/NotFound";


const PrivateRoutes = ({ children }) => {
    const { storedUser, loading } = useAuth();

    if (loading) {
        return <Loading></Loading>
    }

    else if (storedUser?.role === 'user' || storedUser?.role === 'admin' || storedUser?.role === 'super-admin') {
        return children;
    }

    else {
        return <NotFound></NotFound>
    }
};

export default PrivateRoutes;