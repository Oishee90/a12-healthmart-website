import { Helmet } from "react-helmet-async";
import useCart from "../hook/useCart";
import bg from "../assets/cdc-YlES0PvDgyc-unsplash.jpg";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch] = useCart([]);
    const [localCart, setLocalCart] = useState([]);
    const axiosSecure = useAxiosSecure()
    const totalPrice = localCart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);
   
    useEffect(() => {
        // Initialize localCart with default quantity of 1 if not present
        const initializedCart = cart.map(item => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setLocalCart(initializedCart);
      }, [cart]);
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0)
                    refetch();
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            })
            }
          });

    }
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
    
        // Update the cart state
        setLocalCart(updatedCart);
    
        // Call the server to update the quantity
        axiosSecure.patch(`/carts/${id}`, { quantity: newQuantity })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
            }
          });
      };
    return (
        <div className="container mx-auto mt-20 bg-white min-h-screen">
             <Helmet><title>HealthMart|| Cart</title></Helmet>
             <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" >My Cart</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" >
            Welcome to the Medicine Shop, your one-stop solution for all your healthcare needs. Explore our wide range of high-quality medicines and healthcare products.
            </p>
        
</div>
</div>
</div>
<div className="text-4xl text-center font-oswald mt-4"> My Cart</div>
<div className='justify-center mx-auto border-b-2 h-px w-[95px]  border-[#2d9496a2]'></div>
<div className=" flex container mx-auto mt-20    justify-between">
        
           <h2 className="text-4xl font-bold">Total Price {totalPrice}</h2>
           {cart.length ? <Link to={"/dashboard/payment"}><button className="btn btn-primary mb-4 font-oswald">Pay</button></Link>:
           <button disabled className="btn btn-primary mb-4 font-oswald">Pay</button>
}
       </div>
        <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead className=" bg-blue-50">

              <tr>
              <th className=" font-extrabold font-ubuntu border-4 border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Items: {cart.length}</th>
                
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Medicine Name</th>
                
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Medicine Image</th>

                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Price</th>

                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Company</th>
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Quantity</th>
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Action</th>
             
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {localCart.map((item ,index)=> (
                <tr key={item.id}>
                     <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">{index+1}</td>
                  
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">{item.itemName}</td>
                  
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2"><div className="avatar">
  <div className="w-32 rounded">
    <img src={item.image} />
  </div> </div></td>
                 
                  
                
                  <td className="border-4 font-raleway font-bold text-red-500 hover:bg-blue-50  px-4 py-2">$ {item.pricePerUnit}</td>
                  <td className="border-4 font-raleway font-bold  hover:bg-blue-50  px-4 py-2">$ {item.company}</td>
                 
                 
                  <td className="border-4 font-raleway font-bold text-red-500 hover:bg-blue-50 px-4 py-2 flex items-center">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="btn btn-sm btn-secondary">
                    <FaMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="btn btn-sm btn-secondary">
                    <FaPlus />
                  </button>
                </td>
                  <td onClick={()=>handleDelete(item._id)} className="border-4 btn-lg  font-raleway font-bold text-red-500 hover:bg-blue-50  px-4 py-2"><FaTrash></FaTrash></td>
                 
               
                </tr>
                
              ))}
            </tbody>
          </table>
</div>
        </div>
    );
};

export default Cart;