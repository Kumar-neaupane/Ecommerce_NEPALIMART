import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row shadow-lg overflow-hidden rounded-lg bg-white">
      {/* Hero left - content section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="text-gray-800 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-gray-800"></div>
            <p className="font-medium text-sm md:text-base tracking-wider uppercase">Our Best Sellers</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Latest Arrivals
          </h1>
          
          <button className="group flex items-center gap-3 mt-6 transition-all duration-300">
            <span className="font-semibold text-base tracking-wide group-hover:text-gray-600">SHOP NOW</span>
            <div className="flex items-center transition-all duration-300 group-hover:translate-x-2">
              <div className="w-10 h-[2px] bg-gray-800"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Hero right - image section */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <img 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
          src={assets.hero_img} 
          alt="Latest fashion arrivals"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
    </div>
  );
};

export default Hero;