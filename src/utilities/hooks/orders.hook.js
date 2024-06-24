import { useMutation, useQueryClient } from "react-query";
import { addData } from "../api/allServerSideRequest";

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
        mutationFn: (data) => addData("order", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllOrders", "getUserOrders"] });
        },
    });
    return result;
};


// export const useGetSingleBlog = (id) => {
//     const result = useQuery({
//         queryKey: ["getSingleBlog"],
//         queryFn: () => getSingleData(`blog/${id}`),
//     });
//     return result;
// };