import { useQuery } from "@tanstack/react-query";
import UseAthenticate from "./UseAthenticate";
import useAxiosSecure from "./useAxiosSecure";


const useSeller = () => {
    const axiosSecure =useAxiosSecure()
    const {user} = UseAthenticate()
   const {data: isSeller ,isPending: isSellerLoading} = useQuery({
    queryKey: [user?.email,'isSeller'],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/users/seller/${user.email}`);
        console.log(res.data)
        return res.data?.seller
    }
   })
   return [isSeller, isSellerLoading]
};

export default useSeller;