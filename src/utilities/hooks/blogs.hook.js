import { useMutation, useQueryClient } from "react-query";
import { addBlogs } from "../api/allServerSideRequest";

export const useAddBlog = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (data) => addBlogs("blog", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllBlogs"] });
        },
    });
    return result;
};