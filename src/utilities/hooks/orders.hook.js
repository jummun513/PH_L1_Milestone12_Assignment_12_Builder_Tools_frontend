import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDataWithOutFile, getFilteredData, getSingleData } from "../api/allServerSideRequest";

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

export const usePaymentOrder = () => {
    const result = useMutation({
        mutationFn: (data) => addDataWithOutFile("order/payment", data)
    });
    return result;
};

export const useGetSingleOrderById = (id) => {
    const result = useQuery({
        queryKey: ["getSingleFilterOrder"],
        queryFn: () => getSingleData(`order/${id}`),
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