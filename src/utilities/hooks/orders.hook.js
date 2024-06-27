import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDataWithOutFile, getFilteredData } from "../api/allServerSideRequest";

// export const useGetAllBlogs = () => {
//     const result = useQuery({
//         queryKey: ["getAllBlogs"],
//         queryFn: () => getAllData("blogs"),
//     });
//     return result;
// };

export const useAddOrder = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (data) => addDataWithOutFile("order", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllOrders", "getUserOrders"] });
        },
    });
    return result;
};


export const useGetSingleOrderForSpecificUser = (params) => {
    const result = useQuery({
        queryKey: ["getSingleFilterOrder"],
        queryFn: () => getFilteredData('order/specific-user/single-order', params),
    });
    return result;
};

export const useGetAllOrdersForSpecificUser = (params) => {
    const result = useQuery({
        queryKey: ["getAllFilterOrder"],
        queryFn: () => getFilteredData('order/specific-user/all-orders', params),
    });
    return result;
};