import React, { useState } from 'react'

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter submission logic here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <div className='bg-gray-50 py-12 px-6 rounded-lg shadow-md max-w-md mx-auto mb-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
        Subscribe now & get 20% off
      </h2>
      <p className='text-gray-600 text-center mb-6'>
        Stay updated with our latest collections and exclusive offers
      </p>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='relative'>
          <input 
            type='email' 
            placeholder='Enter Your Email' 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-300'
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400'
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <button 
          type='submit' 
          className='w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition duration-300 font-semibold tracking-wide'
        >
          SUBSCRIBE
        </button>
      </form>
      <p className='text-xs text-gray-500 text-center mt-4'>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}

export default NewsLetterBox;