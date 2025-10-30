import React from 'react';

const Services = () => {
  const services = [
    { title: 'Companies & Businesses', icon: '🏢' },
    { title: 'Event Planners', icon: '🎉' },
    { title: 'Restaurants & Cafes', icon: '🍽️' },
    { title: 'Garages', icon: '🔧' },
    { title: 'Night Clubs', icon: '🎵' },
    { title: 'Family Events & Individuals', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;