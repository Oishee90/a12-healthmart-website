
import { Link, NavLink, } from 'react-router-dom';
import logo from '../../assets/ea7fa191a0b2cd2e41448c80aebff3da.png'
import { Tooltip } from 'react-tooltip'
import { useState } from 'react';
import UseAthenticate from '../../hook/UseAthenticate';

const Navbar = () => {
    const {logOut,user} = UseAthenticate()
    const [language, setLanguage] = useState('en');
console.log(user)
    const changeLanguage = (event) => {
      setLanguage(event.target.value);
      console.log(`Language changed to: ${event.target.value}`);
    };
    const navlinks = <>
    <li className={`font-oswald text-xs lg:text-lg ml-5   `}  id="sidebar"><NavLink to={"/"}>Home</NavLink></li>
    <li className={`font-oswald text-xs lg:text-lg ml-5  `} id="sidebar"><NavLink to={"/availableFood"}>Shop</NavLink></li>
    <li className={`font-oswald text-xs lg:text-lg ml-5  `}id="sidebar" ><NavLink to={"/addFood"}> Cart</NavLink></li>

    <div className="language-selector font-oswald text-xs lg:text-lg ml-5 mt-2  font-oswald ">
            <label htmlFor="language" className="bg-white ">Choose a language: </label>
            <select id="language" value={language} onChange={changeLanguage} className="select-language">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
    
    
  </>
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        navlinks
      }
      </ul>
    </div>
    <div className='flex justify-center items-center'>
    <img src={logo} className="md:h-16 h-8 w-auto" alt="Logo" />
    <a className="text-xl md:text-2xl gap-0 font-oswald font-bold ">HealthMart</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        navlinks
      }
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
    

  
  {user? <div className="flex items-center gap-1">
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full my-anchor-element ">
    <Tooltip anchorSelect=".my-anchor-element" place="top">
{user.displayName}
</Tooltip>
      <img src={user?.photoURL || "https://i.ibb.co/BcWRPHQ/derek-lee-93-L-Ph-OWPk-Y-unsplash.jpg"} />

    </div>

  </div>
  <ul tabIndex={0} className="mt-3 z-[1]  p-2 shadow menu menu-sm dropdown-content bg-green-50  rounded-box w-52">
    
   
    <Link to={"/updateProfile"}> <li className={` hover:rounded-xl text-black hover:bg-[#86469C] hover:text-white font-raleway fon-bold`}><a className="mb-2">Update Profile</a></li></Link>
    <Link ><li className={` hover:rounded-xl text-black hover:bg-[#86469C] hover:text-white font-raleway fon-bold`}><a className="mb-2">Dashboard</a></li></Link>
    <Link  onClick={logOut} ><li className={` hover:rounded-xl text-black  hover:bg-[#86469C] hover:text-white font-raleway fon-bold`}><a className="mb-2">{}LogOut</a></li></Link>
   
  </ul>
</div>

 
  </div>:

<div className="dropdown dropdown-end ml-2">
    
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <button className="md:h-full h-8 w-full text-white  bg-[#285073]"> Join Us
       
      </button>
    </div>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
  
   <Link to={'/login'}><li className={`font-raleway rounded-lg mb-3 font-bold text-lg bg-[#2d9496a2] text-white`}><a>Log in</a></li></Link> 
   <Link to={'/register'}><li className={`font-raleway rounded-lg mb-3 font-bold text-lg bg-[#0E2954] text-white`}><a>Register</a></li></Link> 

  </ul>
</div>
}

</div>
</div> 
        </div>
    );
};

export default Navbar;