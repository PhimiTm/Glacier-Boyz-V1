import React from 'react';

const Products = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Products & Orders</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Bulk Orders</h3>
            <p className="text-gray-600">Perfect for businesses and large events</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Event Packages</h3>
            <p className="text-gray-600">Customized ice solutions for your special events</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Individual Orders</h3>
            <p className="text-gray-600">Small quantities for personal use</p>
          </div>
        </div>
        
        {/* Order Form */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Request a Quote</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Order Details" rows="4" className="w-full p-3 border rounded-lg"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;