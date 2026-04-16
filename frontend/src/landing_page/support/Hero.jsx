import React from "react";
import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">
            Support Portal
          </h1>

          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition">
            My tickets
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help (e.g. hdfc)"
            className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;