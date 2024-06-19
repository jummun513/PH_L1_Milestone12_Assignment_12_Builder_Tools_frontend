import { useQuery } from "react-query";
import { getAllData } from "../api/allServerSideRequest";

export const useGetAllTools = () => {
    const result = useQuery({
        queryKey: ["getAllTools"],
        queryFn: () => getAllData("tools"),
    });
    return result;
};