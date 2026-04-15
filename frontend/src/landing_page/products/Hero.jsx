import React from 'react';

function Hero() {
  return (
    <div className="w-full bg-gray-100 py-20 flex items-center justify-center mb-5 mt-5">
      <div className="text-center max-w-2xl px-4">
        
        <h3 className="text-4xl font-semibold text-gray-800 mb-4 mt-5">
          Zerodha Products
        </h3>

        <p className="text-lg text-gray-600 mb-6">
          Sleek, modern, and intuitive trading platforms
        </p>

        <a 
          href="#" 
          className="text-blue-600 font-medium hover:underline mb-5"
          style={{ textDecoration: "none" }}
        >
          Check out our investment offerings →
        </a>

      </div>
      <hr className='mt-5'/>
    </div>
  );
}

export default Hero;