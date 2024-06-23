
import Modal from "react-modal";

import  { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import UseAthenticate from "../../../hook/UseAthenticate";

const AddMedicine = ({ isOpen, onClose }) => {
    const [categories, setCategories] = useState([]);
    const { user } = UseAthenticate();

    useEffect(() => {
        // Fetch categories
        fetch('https://medicine-selling-server-tau.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);
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
    
      const handleAddCategory = (e) => {
        e.preventDefault();
        const itemName = e.target.itemName.value;
        const image = e.target.image.value;
        const itemGenericName = e.target.itemGenericName.value;
        const company = e.target.description.value;
        const massUnit = e.target.description.value;
        const pricePerUnit = e.target.description.value;
        const discount = e.target.description.value;
        const categoryName = e.target.description.value;
        const email = user.email;
        const fullName = user.displayName;
        const role = user.role;
  
       
        const info = { 
            itemName ,
            itemGenericName,
            company,
            massUnit,
            pricePerUnit,
            discount,
            categoryName,
            email,
            fullName,
            role,
            image
    
        };
    //    console.log(info)
       fetch("https://medicine-selling-server-tau.vercel.app/sellermedicine", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: '  Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          window.location.reload();
    }
    })
      if (!isOpen) return null;
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <div className="container mx-auto mt-20 mb-20">
     
    <div className="bg-[#faebd9] p-10 md:p-24">
           <h1 className="text-3xl font-oswald mb-2 font-extrabold text-center">Add Medicine</h1> 
           <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>
    
           <form onSubmit={handleAddCategory} className="bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl">
           <div className="flex md:flex-row flex-col gap-6">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Item Name</label>
                            <input className="input input-bordered join-item w-full" type="text" name="itemName" placeholder="Enter Food Name"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Item Image</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodImage" placeholder="Enter Food Image URL"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Item Generic Name</label>
                            <input className="input input-bordered join-item w-full" type="text" name="itemGenericName" placeholder="Enter Food Quantity"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">MassUnit</label>
                            <input className="input input-bordered join-item w-full" type="text" name="massUnit" placeholder="Enter Pickup Location"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Price</label>
                            <input className="input input-bordered join-item w-full" type="pricePerUnit" name="expiredDateTime" />
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Additional Notes</label>
                            <textarea className="input input-bordered join-item w-full" type="text" name="additionalNotes" placeholder="Enter Additional Notes"/>
                        
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Discount</label>
                            <input className="input input-bordered join-item w-full" type="discount" name="expiredDateTime" />
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Additional Notes</label>
                            <textarea className="input input-bordered join-item w-full" type="text" name="additionalNotes" placeholder="Enter Additional Notes"/>
                        
                        </div>
                    </div>
                    <div className="join flex-col gap-2 md:w-1/2">
                        <label className="font-raleway font-bold text-xl">Category Name</label>
                        <select className="input input-bordered join-item w-full" name="categoryName">
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>{category.categoryName}</option>
                            ))}
                        </select>
                    </div>

            
               <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Add Category" />
    
    
           </form>
       </div>
    </div>
    </Modal>
    );
};

export default AddMedicine;