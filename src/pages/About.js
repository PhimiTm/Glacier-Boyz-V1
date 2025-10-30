import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">About Us</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            At Glacier Boyz, we're passionate about delivering premium quality ice for every occasion. 
            Founded with a commitment to reliability and excellence, we've built our reputation on 
            providing crystal-clear ice that meets the highest standards.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Whether you're hosting a corporate event, running a restaurant, or planning a family 
            gathering, we understand that quality ice is essential. Our state-of-the-art production 
            facilities ensure every cube meets our exacting standards for purity and clarity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;