import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAthenticate from "./UseAthenticate";

export const axiosSecure = axios.create({
 baseURL:'https://medicine-selling-server-tau.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = UseAthenticate()
   axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
   
    config.headers.authorization = `Bearer ${token}`;
    return config
   },function (error){
    return Promise.reject(error);
   }
);
// intercepts 401
axiosSecure.interceptors.response.use(function(response){
    return response;
}, async (error) => {
    const status = error.response.status;
    console.log('status error in the interceptor', status)
    if(status === 401 || status === 403){
        await logOut();
        navigate('/login')

    }
    return Promise.reject(error);
})
   return axiosSecure
};

export default useAxiosSecure;