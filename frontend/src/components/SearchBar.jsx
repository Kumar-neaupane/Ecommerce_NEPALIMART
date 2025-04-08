import React, { useContext, useRef, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const inputRef = useRef(null);
  
  // Auto-focus input when search appears
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  if (!showSearch) return null;
  
  return (
    <div className='border-t border-b bg-gray-50 py-4 text-center shadow-sm'>
      <div className='relative inline-flex items-center justify-center border border-gray-300 
                     bg-white px-5 py-2 my-2 rounded-full w-3/4 sm:w-1/2 shadow-sm
                     transition-all duration-200 hover:shadow focus-within:shadow-md focus-within:border-gray-400'>
        <img 
          className='w-4 h-4 text-gray-500 mr-2' 
          src={assets.search_icon}
          alt="Search" 
        />
        <input 
          ref={inputRef}
          value={search}   
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm py-1' 
          type='text' 
          placeholder='Search products...'
        />
        {search && (
          <img 
            onClick={() => setSearch('')}
            className='w-3 h-3 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' 
            src={assets.cross_icon}
            alt="Clear search" 
          />
        )}
      </div>
      
      <button 
        onClick={() => setShowSearch(false)}
        className='ml-3 inline-flex items-center justify-center p-2 rounded-full 
                  bg-white border border-gray-300 hover:bg-gray-100 transition-colors
                  cursor-pointer'
      >
        <img 
          className='w-3 h-3' 
          src={assets.cross_icon}
          alt="Close search" 
        />
      </button>
    </div>
  )
}

export default SearchBar