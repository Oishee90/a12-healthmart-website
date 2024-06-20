import { Link } from "react-router-dom";
import error from '../assets/6339704.jpg'

const ErrorPage = () => {
    return (
        <div>
        <div className="mx-auto w-full items-center justify-center" style={{ backgroundImage: `url(${error})`, backgroundSize: 'contain', backgroundPosition:"center" , backgroundRepeat: 'no-repeat', height:'100vh',    }}>
        <div className='text-center'>

              <p className=' text-black text-4xl  font-bold'>Sorry, an unexpected error has occurred.</p>
            
            </div>
          
           </div>
           <div className="mb-7">
           <Link className="text-center mt-0" to={'/'}>
             <div className="mx-auto mt-0">
             <h2 className="text-center hover:bg-red-900 border-none px-7 btn bg-red-500 text-white font-raleway  text-2xl">Back to home page</h2>
     </div>
     </Link>
           </div>
     
     </div>
    );
};

export default ErrorPage;