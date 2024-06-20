import Swal from "sweetalert2";
import { useDeleteSingleUser, useGetAllUsers, usePatchUser } from "../../../../../utilities/hooks/user.hook";
import Loading from "../../../../shared/Loading/Loading";

const AdminManageUsers = () => {
  const { data, isError, isLoading, error } = useGetAllUsers();
  const { mutateAsync, isError: makeAdminIsError, error: makeAdminError } = usePatchUser();
  const { mutateAsync: deleteUserAsyncFun, isError: deleteIsError, error: deleteError, isSuccess: deleteSuccess } = useDeleteSingleUser();

  if (isLoading) {
    return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
  }

  if ((error && isError) || (makeAdminError && makeAdminIsError) || (deleteIsError && deleteError)) {
    return <div>Error: {error?.message || makeAdminError?.message || deleteError?.message}</div>;
  }

  const handleMakeAdminButton = async (id) => {
    await mutateAsync({ id: id, data: { role: 'admin' } })
  }

  const handleRemoveAdminButton = async (id) => {
    await mutateAsync({ id: id, data: { role: 'user' } })
  }

  const handleDeleteUserButton = (id) => {
    Swal.fire({
      title: "This user will be deleted from database!",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "rgb(220 38 38)"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUserAsyncFun(id);
        if (deleteSuccess) {
          Swal.fire("Successfully! deleted.", "", "success");
        }
        else {
          Swal.fire("There was a problem!", "", "info");
        }
      }
    });
  }

  return (
    <div className="px-5 sm:px-10 py-7 xxs:pt-10 xxs:pb-14">
      <h2 className="text-center text-xl xs:text-3xl md:text-4xl font-bold text-gray-800 mb-5 xs:mb-10 md:mb-14">Manage All Users</h2>
      <div className="w-full flex justify-between items-center mt-5 xs:mt-10 md:mt-14">
        <div className="w-2/5 flex justify-start">
          <p className="text-center xxs:text-left my-4 font-semibold text-gray-800 xxs:text-base xs:text-xl">Total : {data?.length}</p>
        </div>
        <div className="w-3/5">
          <form>
            <div className="flex">
              <div className="relative w-full">
                <input type="search" id="search" className="block p-1.5 xxs:p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-primary focus:border-primary outline-none" placeholder="Search by email or role" required />
                <button disabled type="submit" className="absolute top-0 right-0 h-full p-1.5 xxs:p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border border-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary">
                  <svg className="w-4 h-4 text-gray-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative overflow-x-auto sm:overflow-x-hidden shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 min-w-[500px]">
            <thead className="text-xs md:text-sm text-gray-800 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-3 md:px-6 py-4">
                  Email
                </th>
                <th scope="col" className="px-3 md:px-6 py-4">
                  Position
                </th>
                <th scope="col" className="px-3 md:px-6 py-4 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((d, i) => {
                  return (
                    <tr key={i} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-900 whitespace-nowrap">
                        {d?.email}
                      </td>
                      <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-gray-800">
                        {d?.role}
                      </td>
                      <td className="px-3 sm:px-6 lg:px-4 xl:px-6 py-3 text-center">
                        {!d.role.match('admin') && <button onClick={() => handleMakeAdminButton(d._id)} className="btn btn-xs xl:btn-sm text-gray-50 bg-green-600 border-none hover:bg-green-500 me-2">Make Admin</button>}
                        {d.role === 'admin' && <button onClick={() => handleRemoveAdminButton(d._id)} className="btn btn-xs xl:btn-sm text-gray-50 bg-orange-600 border-none hover:bg-orange-500 me-2">Remove Admin</button>}
                        <button onClick={() => handleDeleteUserButton(d._id)} disabled={d.role === 'super-admin'} className="btn btn-xs xl:btn-sm text-gray-50 bg-red-600 border-none hover:bg-red-500">Delete</button>
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
  )
};

export default AdminManageUsers;
