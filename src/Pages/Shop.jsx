import  { useEffect, useState } from 'react';
import UseAthenticate from '../hook/UseAthenticate';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import bg from "../assets/cdc-YlES0PvDgyc-unsplash.jpg";
import { FaEye } from 'react-icons/fa';
import MedicineModal from './Home/MedicineModal';
import Swal from 'sweetalert2';
import { MdFileDownloadDone } from 'react-icons/md';
import useCart from '../hook/useCart';

const Shop = () => {
    const [medicines, setMedicines] = useState([]);
    const {user} = UseAthenticate()

    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const navigate = useNavigate();
    const location = useLocation()
    const form = location?.state? location.state : "/";
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();
    useEffect(() => {
        // Fetch medicines for the selected category
        fetch(`https://medicine-selling-server-tau.vercel.app/sellermedicine`)
          .then((res) => res.json())
          .then((data) => {
           
            setMedicines(data);
          })
          .catch((error) => console.error("Error fetching medicines:", error));
      }, []);
      const openModal = (medicine) => {
        setSelectedMedicine(medicine);
      };
    
      const closeModal = () => {
        setSelectedMedicine(null);
      };

      const handlemedicineCart = item => {
        // console.log(item)
        if(user && user.email){
      const cartItem = {
      medicineId : item._id ,
      email: user.email,
      itemName :item.itemName,
      pricePerUnit :item.pricePerUnit,
      image: item.image,
      company: item.company,
    
    
    }
       axiosSecure.post('/carts', cartItem)
       .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.itemName} added to your card`,
            showConfirmButton: false,
            timer: 1500
          });
        //   refetch the cart
        refetch()
        }
       })
    
        }
        else{
          Swal.fire({
            title: "You are not Logged in",
            text: "Please logged in add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
              // send the user log in page
              navigate('/login',form )
            }
          });
          
        }
      }
    return (
        <div className="container mx-auto mt-20 bg-white min-h-screen">
        <Helmet><title>HealthMart|| Shop</title></Helmet>
        <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Medicine Shop</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            Welcome to the Medicine Shop, your one-stop solution for all your healthcare needs. Explore our wide range of high-quality medicines and healthcare products.
            </p>
        
</div>
</div>
</div>
<div className=" mt-10 text-center text-2xl font-oswald font-bold ">All Medicine</div>
      <div className='justify-center mx-auto border-b-2 h-px w-[100px] mb-5 border-blue-700 '></div>
   
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead className=" bg-blue-50">

              <tr>
              <th className=" font-extrabold font-ubuntu border-4 border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Category  Name</th>
                
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Medicine Name</th>
                
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Medicine Image</th>

                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Company</th>

                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Price</th>
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Select Medicine</th>
                <th className="border-4 font-extrabold font-ubuntu border-b-blue-200 border-t-blue-200 hover:bg-white px-4 py-2">Details</th>
             
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {medicines.map(item => (
                <tr key={item.id}>
                     <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">{item.categoryName}</td>
                  
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">{item.itemName}</td>
                  
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2"><div className="avatar">
  <div className="w-32 rounded">
    <img src={item.image} />
  </div> </div></td>
                 
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">{item.company}</td>
                
                  <td className="border-4 font-raleway font-bold text-red-500 hover:bg-blue-50  px-4 py-2">$ {item.pricePerUnit}</td>
                 
                  <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">
                  
                    <Link >
                      <button onClick={()=> handlemedicineCart(item)} className=" flex flex-col md:flex-row gap-2 items-center transition duration-1000 ease-in cursor-pointer bg-blue-300  hover:bg-blue-500 font-ubuntu hover:text-white text-black font-bold py-2 px-4 rounded"> <MdFileDownloadDone /> Add To Cart</button>
                    </Link>
                    </td>
                    <td className="border-4 font-raleway font-bold hover:bg-blue-50  px-4 py-2">
                  <button
                    onClick={() => openModal(item)}
                    className="flex flex-col md:flex-row gap-2 items-center transition duration-1000 ease-in cursor-pointer bg-[#0E2954] text-white font-bold py-2 px-4 rounded"
                  >
                    <FaEye /> View Details
                  </button>
                </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
        {selectedMedicine && (
        <MedicineModal
          isOpen={true} // Set isOpen state based on modal visibility
          onClose={closeModal} // Function to close modal
          item={selectedMedicine} // Pass selected medicine data to modal
        />
      )}
      </div>
    );
};

export default Shop;