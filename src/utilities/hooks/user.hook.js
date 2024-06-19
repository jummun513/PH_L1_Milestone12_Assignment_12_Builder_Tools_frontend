import { useQuery } from "react-query";
import { getAllData } from "../api/allServerSideRequest";

export const useGetAllUsers = () => {
    const result = useQuery({
        queryKey: ["getAllUsers"],
        queryFn: () => getAllData("users"),
    });
    return result;
};