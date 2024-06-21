import { NavLink, Outlet } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex container mx-auto">
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn  text-white  text-xl font-oswald bg-[#285073] drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
        <li className="text-4xl font-oswald font-bold text-blue-950">Health Mart</li>
        <li className="text-lg font-oswald font-bold text-black mt-2 mb-2">Dashboard</li>
        <div className="divider"></div>
     
      {/* Sidebar content here */}
      <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/dashboard/paymenthistory"><FaMoneyBillTransfer />Paymment</NavLink></li>
      <div className="divider">OR</div>
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/cart"> <FaCartArrowDown />My Cart</NavLink></li>
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/cart"> <FaShopify />Shop</NavLink></li>
      
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/"><IoArrowBackCircle />Back to Home</NavLink></li>
  
    </ul>
   
  </div>
</div>
<div className="flex-1">
    <Outlet></Outlet>
</div>
        </div>
    );
};

export default Dashboard;