/* eslint-disable react/prop-types */
import { useAuth } from "../../providers/AuthProvider";
import Loading from "../../components/shared/Loading/Loading";
import NotFound from "../../components/shared/NotFound/NotFound";


const PrivateUserRoutes = ({ children }) => {
    const { storedUser, loading } = useAuth();

    if (loading) {
        return <Loading></Loading>
    }

    else if (storedUser?.role === 'user') {
        return children;
    }

    else {
        return <NotFound></NotFound>
    }
};

export default PrivateUserRoutes;