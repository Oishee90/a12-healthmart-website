import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";



const UseAthenticate = () => {
  
        const all = useContext(AuthContext)
        console.log(all)
        return all;

};

export default UseAthenticate;