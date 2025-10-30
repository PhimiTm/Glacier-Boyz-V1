import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/Images/Glacier Boyz Logo.svg" 
            alt="Glacier Boyz" 
            className="h-24 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Glacier Boyz
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Keeping It Cool for Every Occasion
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Order Ice Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;