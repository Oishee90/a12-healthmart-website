
import Modal from "react-modal";
// import { FaTimes } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";


const CategoriesUpdate = ({ isOpen, onClose, category, setControl, control }) => {
    const axiosSecure = useAxiosSecure();
    const [categoryId, setCategoryId] = useState(category._id);
    const [categoryName, setCategoryName] = useState(category.categoryName);
    const [categoryImage, setCategoryImage] = useState(category.categoryImage);
    const [description, setDescription] = useState(category.description);
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px", // Adjust max width as per your design
          width: "90%", // Responsive width
          padding: "20px",
          maxHeight: "80vh", // Ensure the modal is scrollable if content exceeds viewport height
          overflowY: "auto", // Enable vertical scrolling
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      };
      console.log(category)
    const handleUpdateCategory = (e) => {
        e.preventDefault();
        const categoryName = e.target.categoryName.value;
        const categoryImage = e.target.categoryImage.value;
        const description = e.target.description.value;
    
        const info = {
            categoryName,
            categoryImage,
            description
        };
    
        fetch(`https://medicine-selling-server-tau.vercel.app/categories/${categoryId}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to update');
            }
            return res.json();
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                window.location.reload();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Update Failed',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        })
        .catch(error => {
            console.error('Error updating category:', error);
            // Handle error state or notify the user
        });
    };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
    <div className="container mx-auto mt-20 mb-20">
      <Helmet><title>FoodShareHub | Update</title></Helmet>
    
        <div className="modal-header flex justify-between items-center p-2">
          <h2 className="text-xl md:text-2xl font-bold"> <span className="text-blue-700">{ category.length}</span></h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes/>
          </button>
        </div>
      <h1 className="text-3xl font-oswald mb-2 font-extrabold text-center">Update Category</h1>
      <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>
      <form onSubmit={handleUpdateCategory} className="bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl">
        <div className="join flex-col gap-2 md:w-1/2">
          <label className="font-raleway font-bold text-xl">Category Name</label>
          <input className="input input-bordered join-item w-full" type="text" defaultValue={category.categoryName} name="categoryName"/>

        </div>
        <div className="join flex-col gap-2 md:w-1/2">
          <label className="font-raleway font-bold text-xl">Category Image</label>
          <input className="input input-bordered join-item w-full" type="text" defaultValue={category.categoryImage} name="categoryImage"/>

        </div>
        <div className="join flex-col gap-2 md:w-1/2">
          <label className="font-raleway font-bold text-xl">Description</label>
          <input className="input input-bordered join-item w-full" type="text" defaultValue={category.description} name="description" />

        </div>
        <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Update Category" />
      </form>
    </div>
    </Modal>
  );
};

export default CategoriesUpdate;
