import { Navigate, useLocation } from "react-router-dom";
import UseAthenticate from "../hook/UseAthenticate";
import useAdmin from "../hook/useAdmin";


const AdminRout = ({children}) => {
    const {user, loading} = UseAthenticate()
    console.group(user)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    console.log(location)
    if(loading || isAdminLoading){
        return <div className="w-1/2 mt-24"><span className="loading loading-spinner text-info"></span></div>
    }
   
    if(user && isAdmin){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/"></Navigate>
    );
};

export default AdminRout;