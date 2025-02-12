import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAthenticate from "./UseAthenticate";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = UseAthenticate();
//    tanstack query
const {refetch,data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
      }
      return []; }

})
return [cart, refetch]
};

export default useCart;