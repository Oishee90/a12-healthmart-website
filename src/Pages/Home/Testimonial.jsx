import {Autoplay, Pagination,  } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri"
 import { Swiper, SwiperSlide } from 'swiper/react';
 import img1 from "../../assets/elegant-man-with-folded-arms.jpg"
 import img2 from "../../assets/close-up-doctor-getting-ready-work.jpg"
 import img3 from "../../assets/young-woman-with-coffee-notebook-book.jpg"

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <div className="container mx-auto  mt-10 mb-10 ">
             <div className='flex flex-col justify-center' data-aos="fade-up">
                <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>Testimonial</h1>
                <div className='justify-center mx-auto border-b-2 h-px w-[81px] border-[#2d9496a2] mb-6'></div>
                <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '> Discover what our clients have to say about their experiences with HealthMart. Their feedback highlights our dedication to quality and customer satisfaction.
                  </p>
                  <RiDoubleQuotesL className='text-blue-700 text-6xl mx-auto mb-3' />
            </div>
            <div>
            
            <Swiper
         spaceBetween={30}
         modules={[Autoplay, Pagination]}
         autoplay={{
           delay: 5000, // Autoplay delay in milliseconds
           disableOnInteraction: false, // Disable autoplay on user interaction
         }}
         pagination={{
           clickable: true,
         }}
         className="mySwiper h-[300px]"
      >
        <SwiperSlide>
            <div className='flex  item-center p-5 lg:p-10 gap-5 justify-center mr-5 ml-5'>
        <div className="avatar ">
  <div className="w-44 h-44 border-blue-900 border  rounded">
    <img  className="w-full h-full" src={img1} />
  </div>
</div>
<div>

<p className='font-raleway text-base md:text-2xl'>"I trust HealthMart for all my family's medication needs. 
<br />Their products are reliable and their prices are unbeatable."</p>
    <h1 className='font-oswald text:xs md:text-xl'>-Jane Smith</h1>
    
</div>
           </div>
        </SwiperSlide>
        <SwiperSlide>   
             <div className='flex  item-center p-5 lg:p-10 gap-5 justify-center mr-5 ml-5'>
        <div className="avatar ">
  <div className="w-44 h-44 border-blue-900 border  rounded">
  <img  className="w-full h-full" src={img2} />
  </div>
</div>
<div>
<p className='font-raleway text-base md:text-2xl'>The team at HealthMart is always helpful and their delivery is incredibly fast

</p>
    <h1 className='font-oswald text:xs md:text-xl'>- Michael Johnson</h1>
    
</div>
           </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className='flex  item-center p-5 lg:p-10 gap-5 justify-center mr-5 ml-5'>
        <div className="avatar ">
  <div className="w-44 h-44 border-blue-900 border  roundeded">
  <img  className="w-full h-full" src={img3} />
  </div>
</div>
<div>
<p className='font-raleway text-base md:text-2xl'>"HealthMart's user-friendly website and excellent customer service make shopping for medicine a breeze."

</p>
    <h1 className='font-oswald text:xs md:text-xl'>- Marrie</h1>
    
</div>
           </div>
        </SwiperSlide>
       
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;