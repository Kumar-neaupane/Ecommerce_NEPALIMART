import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch} = useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-6 px-4 font-medium shadow-sm bg-white sticky top-0 z-50">
     <Link to='/'> <img src={assets.logo} className="w-40 h-auto" alt="Logo" /></Link>
      
      <ul className="hidden md:flex gap-8 text-gray-600">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''}`
          }
        >
          <p className="text-sm tracking-wide">HOME</p>
          <hr className="w-full border-none h-[2px] bg-black mt-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </NavLink>
        
        <NavLink 
          to="/collection" 
          className={({ isActive }) => 
            `flex flex-col items-center transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''}`
          }
        >
          <p className="text-sm tracking-wide">COLLECTION</p>
          <hr className="w-full border-none h-[2px] bg-black mt-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `flex flex-col items-center transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''}`
          }
        >
          <p className="text-sm tracking-wide">ABOUT</p>
          <hr className="w-full border-none h-[2px] bg-black mt-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `flex flex-col items-center transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''}`
          }
        >
          <p className="text-sm tracking-wide">CONTACT</p>
          <hr className="w-full border-none h-[2px] bg-black mt-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </NavLink>
      </ul>
      
      <div className="flex items-center gap-8">
        <div className="relative group">
          <img 
            src={assets.search_icon} onClick={()=>setShowSearch(true)}
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" 
            alt="Search" 
          />
        </div>
        
        <div className="group relative">
          <img
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
            src={assets.profile_icon}
            alt="Profile"
          />
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute dropdown-menu right-0 pt-4 transition-all duration-300">
            <div className="flex flex-col gap-3 w-40 py-4 px-6 bg-white text-gray-600 rounded shadow-lg border border-gray-100">
              <p className="cursor-pointer hover:text-black transition-colors duration-200 text-sm">My Profile</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200 text-sm">Orders</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200 text-sm">Logout</p>
            </div>
          </div>
        </div>
        
        <Link to='/cart' className="relative group">
          <img 
            src={assets.cart_icon} 
            alt="Cart" 
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute -right-2 -bottom-2 w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-xs font-semibold transition-transform duration-300 group-hover:scale-110">
            10
          </div>
        </Link>
        <img 
          onClick={() => setVisible(true)} 
          src={assets.menu_icon} 
          className="w-5 h-5 cursor-pointer md:hidden opacity-70 hover:opacity-100 transition-opacity duration-300"
          alt="Menu"
        />
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 h-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${visible ? 'w-64' : 'w-0'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <p className="font-semibold text-gray-800">MENU</p>
            <div 
              onClick={() => setVisible(false)} 
              className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200"
            >
              <img className="h-4 w-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
              <span className="text-sm">Close</span>
            </div>
          </div>
          
          <div className="flex flex-col py-4">
            <NavLink 
              className={({isActive}) => 
                `py-3 px-6 text-sm tracking-wide transition-colors duration-200 flex items-center ${isActive ? 'text-black bg-gray-50 border-l-4 border-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              onClick={() => setVisible(false)} 
              to='/'
            >
              HOME
            </NavLink>
            <NavLink 
              className={({isActive}) => 
                `py-3 px-6 text-sm tracking-wide transition-colors duration-200 flex items-center ${isActive ? 'text-black bg-gray-50 border-l-4 border-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              onClick={() => setVisible(false)}
              to='/collection'
            >
              COLLECTION
            </NavLink>
            <NavLink 
              className={({isActive}) => 
                `py-3 px-6 text-sm tracking-wide transition-colors duration-200 flex items-center ${isActive ? 'text-black bg-gray-50 border-l-4 border-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              onClick={() => setVisible(false)}
              to='/about'
            >
              ABOUT
            </NavLink>
            <NavLink 
              className={({isActive}) => 
                `py-3 px-6 text-sm tracking-wide transition-colors duration-200 flex items-center ${isActive ? 'text-black bg-gray-50 border-l-4 border-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              onClick={() => setVisible(false)}
              to='/contact'
            >
              CONTACT
            </NavLink>
          </div>
          
          <div className="mt-auto p-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link to="/cart" onClick={() => setVisible(false)} className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors duration-200">
                <img src={assets.cart_icon} alt="Cart" className="w-4 h-4" />
                <span>My Cart (10)</span>
              </Link>
              <Link to="/profile" onClick={() => setVisible(false)} className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors duration-200">
                <img src={assets.profile_icon} alt="Profile" className="w-4 h-4" />
                <span>My Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {visible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setVisible(false)}
        />
      )}
    </div>
  );
};

export default Navbar;