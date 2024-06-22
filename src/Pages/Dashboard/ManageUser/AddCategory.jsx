import Modal from "react-modal";

import  { useState } from 'react';

import Swal from 'sweetalert2';

const AddCategory = ({ isOpen, onClose, onAdd }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [description, setDescription] = useState('');
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
    const categoryName = e.target.categoryName.value;
    const categoryImage = e.target.categoryImage.value;
    const description = e.target.description.value;
   
    const info = { 
        categoryName ,
        categoryImage,
        description,

    };
//    console.log(info)
   fetch("https://medicine-selling-server-tau.vercel.app/categories", {
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
return(
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
    <div className="container mx-auto mt-20 mb-20">
 
<div className="bg-[#faebd9] p-10 md:p-24">
       <h1 className="text-3xl font-oswald mb-2 font-extrabold text-center">Add Food</h1> 
       <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>

       <form onSubmit={handleAddCategory} className="bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl">
           <div className="flex md:flex-row flex-col gap-6">
               <div className="join flex-col gap-2 ">
                   <label className="font-raleway font-bold text-xl">Category Name</label>
                   <input className="input input-bordered join-item w-full" type="text" name="categoryName" placeholder="Enter Food Name"/>
               </div>
           
           </div>
           <div className="flex md:flex-row flex-col gap-6 mt-5">
               <div className="join flex-col gap-2">
                   <label className="font-raleway font-bold text-xl">Category Image</label>
                   <input className="input input-bordered join-item w-full" type="text" name="categoryImage" placeholder="Enter Food Quantity"/>
               </div>
             
           </div>
           <div className="flex md:flex-row flex-col gap-6 mt-5">
             
               <div className="join flex-col gap-2 ">
                   <label className="font-raleway font-bold text-xl">Description</label>
                   <textarea className="input input-bordered join-item w-full" type="text" name="description" placeholder="Enter Additional Notes"/>
               
               </div>
           </div>
        
           <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Add Category" />


       </form>
   </div>
</div>
</Modal>
)}

export default AddCategory
