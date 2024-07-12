import LineChart from "../../../../shared/LineChart/LineChart";
import PieChart from "../../../../shared/PieChart/PieChart";

const AdminDashboard = () => {
    return (
        <div className="px-5 sm:px-10 py-7 xxs:pt-10 xxs:pb-14">
            <div className="border-b-2 pb-2 md:pb-4 flex justify-between items-center">
                <h3 className="text-gray-800 font-semibold text-lg md:text-xl">Website Performance</h3>
                <button className="btn btn-xs sm:btn-sm bg-primary hover:bg-secondary text-gray-100 border-none">View all</button>
            </div>
            <div className="border-b-2 py-2 md:py-4 w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 md:gap-x-2 lg:gap-x-4">
                <div className="text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Total Orders</p>
                    <p>10K items</p>
                </div>
                <div className="text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Total Revenue</p>
                    <p>$ 59.01M</p>
                </div>
                <div className="text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Users</p>
                    <p>1000</p>
                </div>
                <div className="text-center font-semibold text-xs sm:text-sm md:text-xl text-gray-700 h-20 sm:h-28 md:h-48 p-1 md:p-5 rounded-lg flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-primary">Visitors</p>
                    <p>569.1K</p>
                </div>
            </div>
            <div className="border-b-2 py-2 md:py-4 md:flex w-full md:gap-x-10 mt-6 xl:mt-12">
                <LineChart />
                <PieChart />
            </div>
        </div>
    );
};

export default AdminDashboard;