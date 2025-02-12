import { useQuery } from "@tanstack/react-query";
import UseAthenticate from "./UseAthenticate";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure =useAxiosSecure()
    const {user} = UseAthenticate()
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email,'isAdmin'],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        console.log(res.data)
        return res.data?.admin;
    }
   })
   return [isAdmin,isAdminLoading]
};

export default useAdmin;