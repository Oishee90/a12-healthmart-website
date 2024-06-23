import  { useEffect, useState } from 'react';
import { IoBagAddSharp } from "react-icons/io5";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import AddCategory from './AddCategory';
import CategoriesUpdate from '../CategoriesUpdate';
import { Helmet } from 'react-helmet-async';


const ManageCategories = () => {
    const axiosSecure = useAxiosSecure()
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [control,setControl]=useState(false)
    useEffect(() => {
        fetch("https://medicine-selling-server-tau.vercel.app/categories")
                .then(res => res.json())
                .then(data => {
                   
                    setCategories(data);
                })
                .catch(error => console.error('Error fetching food data:', error));
        }, []);
        console.log(categories)
     
        
        
          const handleDeleteCategory = async (id) => {
        
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });
    
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/categories/${id}`);
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your this Bucket List item has been deleted.",
                            icon: "success"
                        });
                        setControl(!control);
                        setCategories(categories.filter(item => item._id !== id));
                    }
                } catch (err) {
                    console.log(err.message);
                    alert('Error: ' + err.message);
                }
            }
        
            };
         
            
// update
const openModal = (category) => {
    setSelectedCategories(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategories(null);
    setIsModalOpen(false);
  };
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
    return (
        <div className="flex">
              <Helmet><title>HealthMart|ManageCategories</title></Helmet>
  
        {/* Main Content */}
        <div className="overflow-x-auto w-full">
          <h1 className="text-2xl mb-4 font-oswald font-bold">Categories Management</h1>
  
     
          <table className="min-w-full font-raleway text-xl border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 py-2 px-4">Category Name</th>
                <th className="border border-gray-300 py-2 px-4">Category Image</th>
                <th className="border border-gray-300 py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="border border-gray-300 py-2 px-4">{category.categoryName}</td>
                  <td className="border border-gray-300 py-2 px-4">
                    <img src={category.categoryImage} alt={category.name} className="w-20 h-auto" />
                  </td>
                  <td className="border border-gray-300 py-2 px-4 flex items-center">
             
  <button    onClick={() => openModal(category)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
    Update
  </button>


                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded ml-2"
                      onClick={() => handleDeleteCategory(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          {/* Add Category Button */}
          <button
            className="border-2 bg-blue-50 mt-5 text-xl font-oswald font-bold  flex gap-0 items-center rounded-3xl text-black border-blue-500 hover:bg-blue-600  py-2 px-4 "
            onClick={openAddModal}
          ><IoBagAddSharp />
            Add Category
          </button>
        </div>
        {isModalOpen && selectedCategories && (
        <CategoriesUpdate
          isOpen={isModalOpen}
          onClose={closeModal}
          category={selectedCategories}
          setControl={setControl}
          control={control}
        />
      )}
         <AddCategory
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
      
      />
      </div>
    );
};

export default ManageCategories;

