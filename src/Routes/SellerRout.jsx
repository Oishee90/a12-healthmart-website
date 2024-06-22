import { Navigate, useLocation } from "react-router-dom";
import UseAthenticate from "../hook/UseAthenticate";
import useSeller from "../hook/useSeller";


const SellerRout = (children) => {
    const [user,loading] = UseAthenticate()
    const [isSeller, isSellerLoading] = useSeller()
    const location = useLocation();
    console.log(location)
    if(loading || isSellerLoading){
        return <div className="w-1/2 mt-24"><span className="loading loading-spinner text-info"></span></div>
    }
   
    if(user && isSeller){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default SellerRout;