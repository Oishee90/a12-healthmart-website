import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import  { useEffect, useState } from 'react';

const Discount = () => {
  const [discountedMedicines, setDiscountedMedicines] = useState([]);

    useEffect(() => {
        // Fetch all medicines and filter those with a discount
        fetch('http://localhost:5002/sellermedicine')
            .then((res) => res.json())
            .then((data) => {
                const discounted = data.filter((medicine) => medicine.discount > 0);
                setDiscountedMedicines(discounted);
            })
            .catch((error) => console.error('Error fetching medicines:', error));
    }, []);

    return (
      <div className="container mx-auto mt-10 mb-10">
      <div className="flex flex-col justify-center" data-aos="fade-up">
          <h1 className="text-center p-5 text-4xl font-oswald font-semibold">Our Discount Products</h1>
          <div className="justify-center mx-auto border-b-2 h-px w-20 border-[#2d9496a2] mb-6"></div>
          <p className="text-center p-5 mx-auto mb-6 text-lg font-raleway">
              Explore our wide range of high-quality medicines and healthcare products.
          </p>
      </div>

      <Swiper
          modules={[ Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
         
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
          {discountedMedicines.map((medicine) => (
              <SwiperSlide key={medicine.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 mb-10">
                      <img src={medicine.image} alt={medicine.itemName} className="w-full h-48 object-cover" />
                      <div className="p-6">
                          <h2 className="text-2xl font-semibold mb-2">{medicine.itemName}</h2>
                          <p className="text-gray-700">{medicine.description}</p>
                          <p className="text-gray-700">Discount: {medicine.discount}%</p>
                      </div>
                  </div>
              </SwiperSlide>
          ))}
      </Swiper>
      </div>
    );
};

export default Discount;