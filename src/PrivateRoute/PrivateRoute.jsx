import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import UseAthenticate from "../hook/UseAthenticate";




const PrivateRoute = ({children}) => {
    const {user, loading} = UseAthenticate()
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="w-1/2 mt-24"><span className="loading loading-spinner text-info"></span></div>
    }
   
    if(user){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};


export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired
  };