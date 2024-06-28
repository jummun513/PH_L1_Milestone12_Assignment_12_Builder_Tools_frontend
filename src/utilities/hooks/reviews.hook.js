import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDataWithOutFile, getAllData } from "../api/allServerSideRequest";

export const useAddReview = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (data) => addDataWithOutFile("review", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllReviews"] });
        },
    });
    return result;
};

export const useGetAllReviews = () => {
    const result = useQuery({
        queryKey: ["getAllReviews"],
        queryFn: () => getAllData("reviews"),
    });
    return result;
};