import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { IoBagAddSharp } from "react-icons/io5";
import AddMedicine from "./AddMedicine";
import { Helmet } from "react-helmet-async";


const ManageMedicine = () => {
    const axiosSecure = useAxiosSecure()
    const [medicines, setMedicine] = useState([])
    const [selectedCategories, setSelectedCategories] = useState(null);
    
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [control,setControl]=useState(false)
    useEffect(() => {
        fetch("https://medicine-selling-server-tau.vercel.app/sellermedicine")
                .then(res => res.json())
                .then(data => {
                   
                    setMedicine(data);
                })
                .catch(error => console.error('Error fetching food data:', error));
        }, []);
      
     
        const openAddModal = () => {
            setIsAddModalOpen(true);
          };
        
          const closeAddModal = () => {
            setIsAddModalOpen(false);
          }
    return (
        <div className="flex">
    <Helmet><title>HealthMart|ManageMedicine</title></Helmet>
        {/* Main Content */}
        <div className="overflow-x-auto w-full">
          <h1 className="text-2xl  text-center mb-4 font-oswald font-bold">Medicine </h1>
  
     
          <table className="min-w-full font-raleway text-xl border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
              <th className="border border-gray-300 py-2 px-4">Category Name</th>
           
                <th className="border border-gray-300 py-2 px-4">Medicine Image</th>
                <th className="border border-gray-300 py-2 px-4">Medicine Name</th>
                <th className="border border-gray-300 py-2 px-4"> Generic name</th>
                <th className="border border-gray-300 py-2 px-4">Short description</th>
            
              
                <th className="border border-gray-300 py-2 px-4">Company</th>
                <th className="border border-gray-300 py-2 px-4">Mass Unit</th>
                <th className="border border-gray-300 py-2 px-4">Price</th>
                <th className="border border-gray-300 py-2 px-4">Discount Price</th>

              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td className="border border-gray-300 py-2 px-4">{medicine.categoryName}</td>
                  <td className="border border-gray-300 py-2 px-4">
                    <img src={medicine.image} className="w-20 h-auto" />
                  </td>
                  <td className="border border-gray-300 py-2 px-4"></td>
                  <th className="border border-gray-300 py-2 px-4">{medicine.itemName}</th>
                  <th className="border border-gray-300 py-2 px-4">{medicine.itemGenericName}</th>
                  <th className="border border-gray-300 py-2 px-4">{medicine.description}</th>
                  <th className="border border-gray-300 py-2 px-4">{medicine.company}</th>
                  <th className="border border-gray-300 py-2 px-4">{medicine.massUnit}</th>
                  <th className="border border-gray-300 py-2 px-4">{medicine.discount}</th>
                </tr>
              ))}
            </tbody>
          </table>
  
          {/* Add Category Button */}
          <button
            className="border-2 mx-auto justify-center bg-blue-50 mt-5 text-xl font-oswald font-bold  flex gap-0 items-center rounded-3xl text-black border-blue-500 hover:bg-blue-600  py-2 px-4 "
            onClick={openAddModal}
          ><IoBagAddSharp/>
            Add Category
          </button>
        </div>
       
         <AddMedicine
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
      
      />
      </div>
    );
};

export default ManageMedicine;