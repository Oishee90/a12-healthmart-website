import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        modules={[Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1} // Default to 1 slide per view for small screens
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        scrollbar={{ draggable: true }}
      >
        {discountedMedicines.map((medicine) => (
          <SwiperSlide key={medicine.id}>
            <div className="relative space-y-3 bg-white h-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 mb-10">
              <img
                src={medicine.image}
                alt={medicine.itemName}
                className="h-[400px] w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
              <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex text-white">
                <div className="ml-6 md:text-left">
                  <h1 className="text-xl md:text-xl lg:text-6xl w-full text-white font-extrabold font-oswald mb-4">
                  Limited Offer! <span className="text-red-600">{medicine.discount}% OFF</span>
                  </h1>
                  <p className="mt-2 md:mt-5 text-base md:text-xl lg:text-2xl w-full text-gray-200 font-extrabold font-oswald md:mb-4">
                    {medicine.description}
                  </p>
                  <Link
                    to={"/shop"}
                    className="inline-block px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-green-700 hover:bg-green-800 transition duration-300 ease-in"
                  >
                   Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Discount;
