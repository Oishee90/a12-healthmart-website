import About from "./About";
import Banner from "./Banner";
import Discount from "./Discount";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";
import Extra from "./Extra";

const Home = () => {
    return (
        <div>
             <Helmet><title>HealthMart|Home</title></Helmet>
            <Banner></Banner>
            <About></About>
            <Extra></Extra>
            <Testimonial></Testimonial>
            <Discount></Discount>
        </div>
    );
};

export default Home;