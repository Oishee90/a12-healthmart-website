

 // Assuming you have additional styles here
 import {Autoplay, Navigation, Pagination,  } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 import banner1 from "../../assets/cdc-YlES0PvDgyc-unsplash.jpg"
 import banner2 from "../../assets/national-cancer-institute-byGTytEGjBo-unsplash.jpg"

 import banner3 from "../../assets/isaac-quesada-Loahp7cXIf4-unsplash.jpg"
 import banner4 from "../../assets/medium-shot-pharmacist-helping-patient.jpg"
import { Link } from 'react-router-dom';

 
const Banner = () => {
 
  {/* <Typewriter
  options={{
    strings: ['JourneySEA','Your Gateway to Adventure!'],
    autoStart: true,
    loop: true,
  }}
/>< */}
  return (
    <div className="container mx-auto  relative mt-20 mb-20" >
      
  
  <Swiper   
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
           <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner1} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-left'>
    <h1 className="  text-4xl md:text-7xl w-full  text-white font-extrabold font-oswald mb-4 "> At  <span className=''>FoodShare</span ><span className='text-[#FFA62F]'>Hub</span>  
    
</h1>
<p className='mt-2 md:mt-5 text-lg md:text-2xl lg:text-4xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>We're committed to 
ending hunger one donation at a time. </p>
    <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
   Nourish Those in Need', 'Spread Love Through Food
  

</p>
    <Link to={"/availablefood"}  className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-green-700 hover:bg-green-800 transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner4} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-center md:text-left'>
    <h1 className="  text-xl md:text-2xl lg:text-4xl w-full  text-white font-extrabold font-oswald mb-4 "> Help End Hunger Today. 
    
</h1>
<p className='mt-2 md:mt-5 text-base md:text-xl lg:text-2xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'> Donate surplus food and join our mission to ensure no one goes to bed hungry.</p>
    <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
   
    Every meal makes a difference.
</p>
    <Link to={"/availablefood"}   className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-green-700 hover:bg-green-800 transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide> 

        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner2} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-center md:text-left'>
    <h1 className="  text-xl md:text-2xl lg:text-4xl w-full  text-white font-extrabold font-oswald mb-4 ">Share Your Meal 
    
</h1>
<p className='mt-2 md:mt-5 text-base md:text-xl lg:text-2xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Donate to FoodshareHub and help us distribute it to those who need it most. </p>
    <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
   'Got extra food?', 'Dont let it go to waste'
</p>
    <Link to={"/availablefood"}   className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-green-700 hover:bg-green-800 transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide>  
        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner3} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-center md:text-left'>
    <h1 className="  text-xl md:text-2xl lg:text-4xl w-full  text-white font-extrabold font-oswald mb-4 "> Experience the joy of giving and receiving . 
    
</h1>
<p className='mt-2 md:mt-5 text-base md:text-xl lg:text-2xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Donate excess food to those who need it most, or reach out if you require assistance.</p>
    <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
   
</p>
    <Link to={"/availablefood"}   className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-green-700 hover:bg-green-800 transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide> 

    
        </Swiper>
        <div className="swiper-button-prev p-8 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
      <div className="swiper-button-next p-8 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
    
        </div>
       
   
  );
};

export default Banner;
