
import backgroundImage from '../../assets/57027-removebg-preview.png';
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash} from 'react-icons/fa';

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from './SocialLogIn';

import { Helmet } from "react-helmet-async"
import UseAthenticate from '../../hook/UseAthenticate';

const Login = () => {
  const {signInUser} = UseAthenticate()
  const [showpassword, setShowpassword] = useState(false)

  const {
    register,
    handleSubmit,  
  
    formState: { errors },
  } = useForm();
 // navigation system
 const location = useLocation()
//  console.log(location)
 const navigate = useNavigate()

 
 const form = location?.state? location.state : "/";



  const onSubmit = data  => {
   
    // console.log(data)
   const {email,password} = data;
   signInUser(email,password)
   .then (result => {
   
    if(result.user){
      toast.success('Log in successfully!');
     navigate(form)
    }
  })
   .catch( () => {
    toast.error('Invalid email or password.');
   })
  }
    return (
  
        <div className="container mx-auto  mt-10 mb-10 ">
         <Helmet><title>HealthMart|Login</title></Helmet>
        <div className="hero flex lg:flex-row-reverse flex-col-reverse   md:flex-col-reverse min-h-screen bg-blue-50 " >
<div className="text-center justify-start ml-4 w-1/2 mt-5 mb-5 h-full ">
<h1 className="font-extrabold text-center text-xl md:text-4xl mb-3  font-ubuntu text-black">Login Now!!</h1>
<div className='justify-start mx-auto border-b-2 h-px w-[81px]  border-blue-400 mb-3'></div>
<div className="card shadow-xl bg-white  h-full mb-9 w-full ">

 
 <div className="card-body">
 <form   onSubmit={handleSubmit(onSubmit)}>
 
 <div className="form-control ">
   <label className="label">
     <span  className="label-text font-raleway text-base md:text-lg font-bold text-black">Email</span>
   </label>
   <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })}
    className="  input input-bordered   border-black placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-[#747264]
    " />
    {errors.email&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
 </div>

 <div className="form-control  relative">
       <label className="label">
         <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
         
       </label>
       
       <input 
          type = {showpassword ? "text" : "password"}
          placeholder="password" {...register("password", { required: true })}
          className="input input-bordered   border-black   placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:font-medium placeholder:text-[#747264]"  />
       <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[66%] left-[82%] md:left-[94%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
    {errors.password&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
       
     </div>
 
 <div className="form-control mt-6">
   <button className="btn border-none transition duration-1000 ease-in  cursor-pointer bg-blue-600  hover:bg-green-900 font-oswald text-xs md:text-2xl font-extrabold text-white">Log In</button>
 </div>
 <ToastContainer  />
 <div className="form-control mt-6">
 <p className="text-left font-raleway text-xs md:text-lg font-bold text-black">Do You Have An Account? Please <Link to={'/register'} className="text-[#ffa52fec]">Register</Link></p>
 </div>
 
</form>

<SocialLogIn></SocialLogIn>
 </div>
  
</div>
</div>
<div className='h-full w-1/2'>
    <img src={backgroundImage} className='h-full w-full' alt="" />
</div>
</div>
    </div>
    );
};

export default Login;