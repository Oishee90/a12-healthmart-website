import { Navigate, useLocation } from "react-router-dom";
import UseAthenticate from "../hook/UseAthenticate";
import useAdmin from "../hook/useAdmin";


const AdminRout = (children) => {
    const [user,loading] = UseAthenticate()
    const [isSeller, isAdminLoading] = useAdmin()
    const location = useLocation();
    console.log(location)
    if(loading || isAdminLoading){
        return <div className="w-1/2 mt-24"><span className="loading loading-spinner text-info"></span></div>
    }
   
    if(user && isSeller){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default AdminRout;