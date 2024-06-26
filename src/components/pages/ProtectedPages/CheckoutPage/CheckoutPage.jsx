import { useParams } from "react-router-dom";
import { useGetSingleOrderForSpecificUser } from "../../../../utilities/hooks/orders.hook";
import Loading from "../../../shared/Loading/Loading";

const CheckoutPage = () => {
    const { email, toolId } = useParams();
    const { data, isError, isLoading: getSingleToolLoading, error } = useGetSingleOrderForSpecificUser({ email: email, toolId: toolId });

    if (getSingleToolLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }

    console.log(data);
    return (
        <div>
            This is checkout page
        </div>
    );
};

export default CheckoutPage;