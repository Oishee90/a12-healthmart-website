import hero from "../../assets/9602764.jpg"
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Extra = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div className="container mx-auto  mt-20 mb-10 ">
            <div  className="hero h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
        data-aos="fade-up">
  
</div> 
        </div>
    );
};

export default Extra;