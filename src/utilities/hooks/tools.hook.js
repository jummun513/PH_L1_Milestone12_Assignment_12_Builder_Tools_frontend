import { useQuery } from "react-query";
import { getAllData } from "../api/allServerSideRequest";

export const useGetAllTools = () => {
    const result = useQuery({
        queryKey: ["getAllTools"],
        queryFn: () => getAllData("tools"),
    });
    return result;
};

// export const useDeleteSingleEventItem = () => {
//     const queryClient = useQueryClient();
//     const result = useMutation({
//       mutationFn: (id) => deleteSingleData(`event-item/${id}`),
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getAllEventItem"] });
//       },
//     });
//     return result;
//   };
  
//   export const useAddEventItem = () => {
//     const queryClient = useQueryClient();
//     const result = useMutation({
//       mutationFn: (data) => addData("event-item", data),
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getAllEventItem"] });
//       },
//     });
//     return result;
//   };
  
//   export const useEditEventItem = () => {
//     const queryClient = useQueryClient();
//     const result = useMutation<void, Error, { id: string; data: any }>({
//       mutationFn: async ({ id, data }) => {
//         await editData(`event-item/${id}`, data);
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getAllEditEvent"] });
//       },
//     });
//     return result;
//   };