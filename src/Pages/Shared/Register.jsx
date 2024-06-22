import { Link } from "react-router-dom";
import backgroundImage from '../../assets/person-writing-prescription-clipboard-with-first-aid-kit-capsules-blue-background.jpg';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseAthenticate from "../../hook/UseAthenticate";
import useAxiosPublic from "../../hook/useAxiosPublic";


const Register = () => {
  const {createUser, updateUserProfile,user  } = UseAthenticate();
  const [showpassword, setShowpassword] = useState(false)
const axiosPublic = useAxiosPublic();
  console.log(user)
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const {
    register,                                       
    handleSubmit,
  
    formState: { errors },
  } = useForm();

  // navigation system
  const navigate = useNavigate()
  const location = useLocation()
  const form = location?.state ||"/";

  const onSubmit = async (data) => {
    const { email, password, fullName, image, role } = data;
   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (!isPasswordValid) {
      // Display toast for invalid password
      toast.error('Password must have at least 6 characters with an uppercase letter and a lowercase letter.');
      return;
    }

    try {
      // Upload image to imgBB API
      const formData = new FormData();
      formData.append('image', image[0]);

      const response = await fetch(image_hosting_api, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const imageData = await response.json();
      const imageUrl = imageData.data.url;

      // Create user in Firebase
      await createUser(email, password);
      const userInfo = {
        email,
        fullName,
        imageUrl,
        role
      };
      // Update user profile with name and image URL
      await updateUserProfile(fullName, imageUrl);

      // Store user role in the user object
        axiosPublic.post('/users',userInfo)
        .then(res => {
          if(res.data.insertedId){
            toast.success('Account created successfully!');
          }
        })

      // Navigate to specified form or route
      navigate(form);
    
      console.log(userInfo);
    
    } catch (error) {
      console.error('Error creating account:', error);
      toast.error('Failed to create account');
    }
  };
    return (
        <div className="container mx-auto  mt-24 mb-10 ">
       <Helmet><title>HealthMart-Register</title></Helmet>
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
         backgroundSize: 'cover',
         backgroundPosition: 'center',  }}>
  <div className="text-center w-1/2 mt-5 mb-5 ">
   
    <div className="card shadow-2xl w-full glass ">
        <h1 className="font-bold text-xl md:text-2xl mt-5 font-raleway text-[#FCFFE0]">Create An Account</h1>
     
      <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-white">Name</span>
          </label>
          <input type="text"name="fullName" {...register("fullName", { required: true })} placeholder="Enter Your Name" 
          className="input input-bordered border-green-200 bg-gray-50 placeholder:font-raleway placeholder:text-xs  placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300  "/>
            {errors.fullName&& 
            <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text font-raleway text-base md:text-lg font-bold text-white">Email</span>
          </label>
          <input type="email" name="fullName" placeholder="Enter Your Email"  {...register("email", { required: true })}
           className="input input-bordered  border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 
           "  />
             {errors.email&& 
            <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text font-raleway text-base md:text-lg font-bold text-white">Photo Upload</span>
                </label>
                <input type="file" name="image" accept="image/" {...register("image", { required: true })} className="input input-bordered border-green-200 bg-gray-50" />
                {errors.image && <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-raleway text-base md:text-lg font-bold text-white">Role</span>
                </label>
                <select name="role" {...register("role", { required: true })} className="input input-bordered border-green-200 bg-gray-50">
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
              </div>
        <div className="form-control  relative">
       <label className="label">
         <span className="label-text font-raleway text-base md:text-lg font-bold text-white">Password</span>
         
       </label>
       
       <input 
          type = {showpassword ? "text" : "password"}
          placeholder="password" {...register("password", { required: true })}
          className="border-green-200  input input-bordered    placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:font-medium placeholder:text-gray-300"  />
       <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[66%] left-[82%] md:left-[94%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
    {errors.password&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
       
     </div>
        
        <div className="form-control mt-6">
          <button className="btn border-none transition duration-1000 ease-in  cursor-pointer bg-blue-900 hover:bg-blue-950 font-raleway text-xs md:text-lg font-bold text-white">Create An Acoount</button>
        </div>
        <div className="form-control mt-6">
        <p className="text-left font-raleway text-xs md:text-lg font-bold text-white">Already Have An Account? <Link to={'/login'} className="text-[#56b6e7]">Login Here</Link></p>
        </div>
      </form>
      <ToastContainer/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;