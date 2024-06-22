import { NavLink, Outlet } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaCartArrowDown, FaHome, FaList, FaUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { GiKnightBanner } from "react-icons/gi";
import useAdmin from "../hook/useAdmin";
import useSeller from "../hook/useSeller";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isSeller] = useSeller()
    return (
        <div className="flex container mx-auto">
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn  text-white  text-xl font-oswald bg-[#285073] drawer-button lg:hidden">Open drawer</label>
    <div className="flex-1">
    <Outlet></Outlet>
</div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
        <li className="text-4xl font-oswald font-bold text-blue-950">Health Mart</li>
        <li className="text-lg font-oswald font-bold text-black mt-2 mb-2">Dashboard</li>
        <div className="divider"></div>
     
      {/* Sidebar content here */}
      {
    isAdmin ? (
        <>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/manageCategories"><AiFillMedicineBox />Manage Categories</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/manageUser"><FaUser />Manage User</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/salesReport"><FaList />Sales Report</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/paymentManagement"><FaMoneyBillTransfer />Payment Management</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/manageAdvertisement"><GiKnightBanner />Manage Advertisement</NavLink>
            </li>
        </>
    ) : isSeller ? (
        <>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/sellerHome"><FaHome />Seller Home</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/"><AiFillMedicineBox />Manage Medicines</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/"><FaList />Payment History</NavLink>
            </li>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/"><FaList />Ask For Advertisement</NavLink>
            </li>
        </>
    ) : (
        <>
            <li className="text-xl font-oswald font-bold text-black mt-5 hover:bg-blue-600 hover:text-white hover:rounded">
                <NavLink to="/dashboard/paymentHistory"><FaMoneyBillTransfer />Payment History</NavLink>
            </li>
        </>
    )
}

      <div className="divider">OR</div>
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/cart"> <FaCartArrowDown />My Cart</NavLink></li>
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/cart"> <FaShopify />Shop</NavLink></li>
      
      <li className="text-xl font-oswald font-bold text-black hover:bg-blue-600 hover:text-white hover:rounded"><NavLink to="/"><IoArrowBackCircle />Back to Home</NavLink></li>
  
    </ul>
   
  </div>
</div>

        </div>
    );
};

export default Dashboard;