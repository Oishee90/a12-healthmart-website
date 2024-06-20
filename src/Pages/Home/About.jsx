import about from "../../assets/cdc-ZvDN-Gj_4Eg-unsplash.jpg"
import { CiCircleCheck } from "react-icons/ci";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div className="container mx-auto  mt-10 mb-10 ">
          <div className='flex flex-col justify-center' data-aos="fade-up">
                <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>Why Choose US</h1>
                <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-[#2d9496a2]'></div>
                <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '> Discover our story, our values, and how you can join us in making a
          positive impact on healthcare. At HealthMart, we are committed to
          providing high-quality medicines and exceptional customer service. </p>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  mt-6 mb-20 items-start container mx-auto">
  <div className="rounded-2xl relative h-full " data-aos="fade-up"> 

      <img className=" items-center rounded-xl h-full  mt-10 mx-auto " src={about} alt="" />
      <div className="absolute mt-10 h-full  rounded-xl inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] "></div>

    </div>
         <div className="flex flex-col mt-5 " data-aos="fade-up"> 
         <h1 className="font-oswald font-bold text-2xl  lg:text-4xl text-[#0E2954] mt-3">Why Choose Us</h1>
         <h1 className="font-oswald font-extrabold text-xl  md:text-5xl text-black mt-7 ">
          Quality Meet Excellent <span className="text-[#0E2954]">Service</span>.</h1>
<p className="text-black text-base lg:text-xl font-oswald  mt-6">  At HealthMart, we prioritize transparency, efficiency, and compassion in all that we do. From our user-friendly platform to our commitment to making a difference in the lives of others, discover why we're the preferred partner in healthcare.
</p>
         <div className="flex flex-col ml-3">
         <p className="items-center gap-2  text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-[#0E2954] w-[2rem] "/>
        
          High-Quality Medicines
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-[#0E2954] w-[2rem] "/>
          Trusted by Customers
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-[#0E2954] w-[2rem] "/>
          Customer-Centric Approach
          </p>
          

         </div>
      
            
      </div>
      </div>
      {/* swipper */}

    
    </div>

    );
};

export default About;