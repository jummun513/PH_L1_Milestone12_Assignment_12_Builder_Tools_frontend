import { useMutation, useQuery, useQueryClient } from "react-query";
import { addData, getAllData, getSingleData } from "../api/allServerSideRequest";

export const useGetAllBlogs = () => {
    const result = useQuery({
        queryKey: ["getAllBlogs"],
        queryFn: () => getAllData("blogs"),
    });
    return result;
};

export const useAddBlog = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: (data) => addData("blog", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllBlogs"] });
        },
    });
    return result;
};


export const useGetSingleBlog = (id) => {
    const result = useQuery({
        queryKey: ["getSingleBlog"],
        queryFn: () => getSingleData(`blog/${id}`),
    });
    return result;
};