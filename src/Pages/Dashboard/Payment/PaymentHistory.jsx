import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hook/useAxiosSecure";
import UseAthenticate from "../../../hook/UseAthenticate";


const PaymentHistory = () => {
    const {user} = UseAthenticate()
  
    const axiosSecure = useAxiosSecure()
    const { data: payments = []} = useQuery({
        queryKey:['payments',user.email],
        queryFn: async() =>{
            const  res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    console.log(payments)
    return (
        <div>
           <h2 className="text-3xl">Total Payments {payments.length}</h2> 
           <div className="overflow-x-auto w-full">
          <h1 className="text-2xl  text-center mb-4 font-oswald font-bold">Medicine </h1>
  
     
          <table className="min-w-full font-raleway text-xl border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
              <th className="border border-gray-300 py-2 px-4">#</th>
           
                <th className="border border-gray-300 py-2 px-4">Price</th>
                <th className="border border-gray-300 py-2 px-4">Transaction Id</th>
                <th className="border border-gray-300 py-2 px-4">Status</th>

              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td className="border border-gray-300 py-2 px-4">{index + 1}</td>
                  
                  <td className="border border-gray-300 py-2 px-4">{payment.price}</td>
                   <td className="border border-gray-300 py-2 px-4">{payment.transactionId}</td>
                   <td className="border border-gray-300 py-2 px-4">{payment.status}</td>
                  
                
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
    );
};

export default PaymentHistory;