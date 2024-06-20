import { useAuth } from "../../../../../providers/AuthProvider";

const UserProfile = () => {
    const { storedUser } = useAuth();

    // data show for general user profile
    const dataUser = [
        { id: 1, heading: 'Name', value: storedUser?.fullName },
        { id: 2, heading: 'Email', value: storedUser?.email },
        { id: 2, heading: 'Gender', value: storedUser?.gender },
    ]

    return (
        <div className="px-3 xxs:px-5 sm:px-10 py-7 xxs:pt-10 xxs:pb-24">
            <div className="mb-16 xl:mb-16">
                <h2 className="text-center text-xs xxs:text-base sm:text-xl md:text-3xl font-bold text-gray-800 mb-7 xxs:mb-10">Profile Details</h2>

                <div className="w-28 xs:w-40 rounded-full mx-auto">
                    <img className='rounded-full aspect-square' src={storedUser?.imageUrl ? storedUser.imageUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt='User Image' />
                </div>
                <div className="mt-10 lg:mt-16">
                    <div className="relative overflow-x-auto sm:overflow-x-hidden shadow-md sm:rounded-lg lg:min-w-[720px]">
                        <table className="w-full text-sm text-left text-gray-500">
                            <tbody>
                                {
                                    dataUser.map((d, i) => {
                                        return (
                                            <tr key={i} className="bg-white border-b w-[600px] whitespace-nowrap sm:whitespace-normal text-xs xxs:text-sm sm:text-md xl:text-base">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 w-5/12 sm:w-4/12 lg:w-3/12 xl:w-3/12 3xl:w-2/12">
                                                    {d.heading}
                                                </th>
                                                <td className="px-6 py-4 text-gray-800 w-1/12">
                                                    :
                                                </td>
                                                <td className="px-6 py-4 text-gray-800">
                                                    {d.value}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;