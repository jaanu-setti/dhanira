import React from 'react';

import villa from '../assets/images/villa.jpg'
function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
      <img
          src={villa}
          alt="Luxury apartment exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
         DHANIRA
          <br />
          <span className="text-primary">PROPERTIES</span> 
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Luxury apartments in the heart of the city with world-class amenities
        </p>
       
      </div>
    </section>
  );
}

export default HeroSection;

