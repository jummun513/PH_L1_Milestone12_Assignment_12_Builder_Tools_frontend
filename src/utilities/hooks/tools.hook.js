import { useMutation, useQuery, useQueryClient } from "react-query";
import { addData, getAllData, getSingleData } from "../api/allServerSideRequest";

export const useGetAllTools = () => {
    const result = useQuery({
        queryKey: ["getAllTools"],
        queryFn: () => getAllData("tools"),
    });
    return result;
};

export const useAddTool = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (data) => addData("tool", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllTools"] });
        },
    });
    return result;
};

export const useGetSingleTool = (id) => {
    const result = useQuery({
        queryKey: ["getSingleTool"],
        queryFn: () => getSingleData(`tool/${id}`),
    });
    return result;
};