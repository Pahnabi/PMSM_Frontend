import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '🔧',
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '🛠️',
    title: 'Service 2',
    description: 'Proin eu justo nec risus fringilla dapibus.',
  },
  {
    icon: '⚙️',
    title: 'Service 3',
    description: 'Sed malesuada urna nec ex hendrerit, in eleifend turpis tristique.',
  },
  {
    icon: '🔧',
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '🛠️',
    title: 'Service 2',
    description: 'Proin eu justo nec risus fringilla dapibus.',
  },
  {
    icon: '⚙️',
    title: 'Service 3',
    description: 'Sed malesuada urna nec ex hendrerit, in eleifend turpis tristique.',
  },
  
];

function Services() {
  return (
    <div className="starry-background p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-extrabold font-mono text-center mb-8 md:mb-12">
        What do we provide?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <div className="text-3xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 text-blue-500 hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

