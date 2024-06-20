import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteSingleData, getAllData, patchData } from "../api/allServerSideRequest";

export const useGetAllUsers = () => {
    const result = useQuery({
        queryKey: ["getAllUsers"],
        queryFn: () => getAllData("users"),
    });
    return result;
};

export const useDeleteSingleUser = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (id) => deleteSingleData(`user/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
        },
    });
    return result;
};

export const usePatchUser = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: async ({ id, data }) => {
            await patchData(`user/${id}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
        },
    });
    return result;
};