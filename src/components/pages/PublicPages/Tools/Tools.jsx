import { useGetAllTools } from "../../../../utilities/hooks/tools.hook";
import Loading from "../../../shared/Loading/Loading";
import ToolsWithPagination from "./ToolsWithPagination/ToolsWithPagination";

const Tools = () => {
    const { data, isError, isLoading, error } = useGetAllTools();

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }
    if ((isError)) {
        return <div>Error: {error?.message}</div>;
    }
    return (
        <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 mb-20 xl:mb-28">
            <h3 className="text-center mt-16 mb-12 text-xl sm:text-2xl 2xl:text-4xl font-bold text-gray-900">All Tools</h3>
            <ToolsWithPagination items={data} itemsPerPage={8}></ToolsWithPagination>
        </div>
    );
};

export default Tools;