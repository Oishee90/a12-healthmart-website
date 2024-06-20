import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { MdAddCall, MdMarkEmailRead, MdOutlineAddLocationAlt   } from "react-icons/md";
import logo from '../../assets/ea7fa191a0b2cd2e41448c80aebff3da.png'

const Footer = () => {

    return (
        <div className=" w-full mt-20 "  >
          

<footer className="">
    <div className="  w-full">
   <div className="p-10 flex gap-5 flex-col md:flex-row md:justify-between items-center bg-gray-300 dark:bg-gray-900">
    <div className="text-black font-raleway font-ubuntu font-extrabold">
    <div className="flex flex-row items-center">
    <img src={logo} className="md:h-16 h-8 w-auto" alt="Logo" />
   <h1 className="text-5xl font-oswald text-black">Health<span className="text-[#0E2954]">Mart</span></h1></div>
   <p  className="mt-5 mb-5 text-base md:text lg">Stay connected with HealthMart, your trusted source for medicines</p>
   <p className=" text-base md:text lg"> Connect with health-conscious individuals, share your experiences, and participate in insightful discussions.

</p>
    </div>

    <div>
        <h1 className="text-sm font-bold text-gray-900 uppercase dark:text-white">Contact Us</h1>
        <div className="border-b-2 w-[81px] mt-2 border-[#2d9496a2] ... mb-6"></div>
        <div className="flex  items-center gap-2 mt-0">
               <MdAddCall  className=" text-[#0E2954] fill-current font-extrabold w-[24px] h-[24px]"></MdAddCall >
            <h3 className="py-2 font-bold font-raleway text-black ">Phone Number : (+62) 123-321-543</h3></div>
            <div className="flex  items-center gap-2 mt-0">
              <MdMarkEmailRead  className="text-[#0E2954] fill-current font-extrabold w-[24px] h-[24px]"></MdMarkEmailRead >
              <h3 className="py-2 font-bold font-raleway text-black ">Email : healthmart11@support.com</h3></div>
              <div className="flex  items-center gap-2 mt-0">
              <MdOutlineAddLocationAlt  className="text-[#0E2954]  fill-current font-extrabold w-[24px] h-[24px]"></MdOutlineAddLocationAlt >
              <h3 className="py-2 font-bold font-raleway text-black ">Location : 152/1 Mohakhali Wireless Gate</h3></div>
   
   
    </div>
   </div>
    <footer className="footer footer-center p-10 bg-[#0E2954] text-base-content rounded">
  
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-white font-bold'>Copyright © 2024 - All right reserved by HealthMart</p>
  </aside>
</footer>
    </div>
</footer>

        
        </div>
    );
};

export default Footer;







