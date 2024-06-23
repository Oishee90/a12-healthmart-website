import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { GiConfirmed } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    
    const {data: users = [], refetch} = useQuery({
     queryKey:['users'],
     queryFn: async () => {
          const res = await axiosSecure.get('/users',{
            headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
            }
          });
          return res.data
     }
    })
    const handleConfirmUser = () => {
      
                window.location.reload(); // Reload the page after confirmation
          
    };
    const handleDeleteUser= user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axiosSecure.delete(`/users/${user._id}`)
            .then(res => {
                if(res.data.deletedCount > 0)
                    refetch();
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            })
            }
          });

    }
    const handleRoleChange = async (userId, newRole) => {
        try {
          const res = await axiosSecure.put(`/users/${userId}/role`, { role: newRole });
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: `User role updated successfully.`,
              icon: 'success',
              confirmButtonText: 'OK'
            });
            refetch();
           
          }
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update user role.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error('Error updating role:', error);
        }
      };
    return (
        <div className="mt-8">
              <Helmet><title>HealthMart|Manage Users</title></Helmet>
              <h2 className="text-3xl font-oswald justify-center mx-auto text-center">Manage All Users</h2>
              <div className='justify-center mx-auto border-b-2 h-px w-[81px] mt-2  border-[#2d9496a2]'></div>
              
        <div className="flex justify-between gap-8">
          
            <h2 className="text-3xl font-oswald mb-3">Total Users : {users.length}</h2>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead className="">

              <tr>
              
                <th className="border font-extrabold font-ubuntu border-blue-500 hover:bg-white px-4 py-2"></th>
              
                <th className="border font-extrabold font-ubuntu border-blue-500 hover:bg-white px-4 py-2">Users Name</th>
              
               
                <th className="border font-extrabold font-ubuntu border-blue-500 hover:bg-white px-4 py-2">Users email</th>
                <th className="border font-extrabold font-ubuntu border-blue-500 hover:bg-white px-4 py-2">Role</th>
              
                <th className="border font-extrabold font-ubuntu border-blue-500 hover:bg-white px-4 py-2">Actions</th>
             
              </tr>
            </thead>
            <tbody className="">
              {users.map((user,index) => (
                <tr key={user._id}>
                  <td className="border font-raleway font-bold hover:bg-blue-50 border-blue-500 px-4 py-2">{index+1}</td>
                
                 
                  <td className="border font-raleway font-bold hover:bg-blue-50 border-blue-500 px-4 py-2">{user.fullName}</td>
                
                  <td className="border font-raleway font-bold text-red-500 hover:bg-blue-50 border-blue-500 px-4 py-2">{user.email} </td>
                  <td className="border font-raleway font-bold text-red-500 hover:bg-blue-50 border-blue-500 px-4 py-2">
                  <select
 
    onChange={(e) => handleRoleChange(user._id, e.target.value)}
    className="ml-2 p-1 border rounded"
>
    {user.role === 'admin' ? (
        <>
            <option value="admin" selected>Admin</option>
           
        </>
    ) : user.role === 'seller' ? (
        <>
            <option value="admin">Admin</option>
            <option value="seller" selected>Seller</option>
            <option value="user">User</option>
        </>
    ) : (
        <>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="user" selected>User</option>
        </>
    )}
</select>
                 </td>
                  <td className=" flex items-center gap-5 border font-raleway font-bold text-red-500 hover:bg-blue-50 border-blue-500 px-4 py-2">
                     <button  onClick={handleConfirmUser} className="btn hover:bg-black bg-white btn-lg">
                     <GiConfirmed className="text-green-600"/>
                     </button>
                    <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn hover:bg-black bg-white btn-lg"
                    >
                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                 
                 
                </tr>
                
              ))}
            </tbody>
          </table> 
        </div>
        </div>
    );
};

export default ManageUser;