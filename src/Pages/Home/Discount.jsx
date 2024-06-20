import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Discount = () => {
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 mb-10">
            <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Product 1</h2>
              <p className="text-gray-700">Description for Product 1.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Product 2</h2>
              <p className="text-gray-700">Description for Product 2.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Product 3</h2>
              <p className="text-gray-700">Description for Product 3.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Product 3</h2>
              <p className="text-gray-700">Description for Product 3.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Product 3</h2>
              <p className="text-gray-700">Description for Product 3.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
    );
};

export default Discount;