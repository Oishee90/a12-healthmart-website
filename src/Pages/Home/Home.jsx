import About from "./About";
import Banner from "./Banner";
import Discount from "./Discount";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";
import Extra from "./Extra";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const Home = () => {
    const [categories, setCategories] = useState([])
    const [medicines, setMedicines] = useState([]);
    const [filteredMedicines, setFilteredMedicines] = useState([]);
    const CategorieItems = categories.slice(0,6)
    useEffect(() => {
    fetch("http://localhost:5002/categories")
            .then(res => res.json())
            .then(data => {
               
                setCategories(data);
            })
            .catch(error => console.error('Error fetching food data:', error));
    }, []);
    console.log(CategorieItems)
    useEffect(() => {
        fetch("http://localhost:5002/sellermedicine")
                .then(res => res.json())
                .then(data => {
                   
                    setMedicines(data);
                })
                .catch(error => console.error('Error fetching food data:', error));
        }, []);
        useEffect(() => {
            // Filter medicines based on categories
            const filtered = medicines.filter((medicine) =>
              categories.some((category) => category.categoryName === medicine.categoryName)
            );
            setFilteredMedicines(filtered);
          }, [categories, medicines]);
    return (
        <div className="container mx-auto " >
             <Helmet><title>HealthMart|Home</title></Helmet>
            <Banner></Banner>
            <div className=" mt-32 mb-30 ">
           <div className='flex flex-col justify-center' data-aos="fade-up">
          <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>Explore Our Categories</h1>
          <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-blue-700 '></div>
          <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '> Discover a wide range of categories offering essential medicines and health products. Each category card showcases its name, a preview image, and the number of available medicines. </p>
        
      </div>
        
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  container mx-auto " >
    {
        CategorieItems.map(CategorieItem => 
            <Categories key={CategorieItem.id} CategorieItem ={CategorieItem } 
            medicines={filteredMedicines.filter(
                (medicine) => medicine.categoryName === CategorieItem.categoryName
              )}
               >

            </Categories>
         
        )
    }
    </div>
      </div>
            <About></About>
            <Extra></Extra>
            <Discount></Discount>
            <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;