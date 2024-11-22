import React from 'react';
import { Button } from "./ui/button";
import interior from '../assets/images/flats1.avif'
function FeaturesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Life
              <br />
              Per Sq. ft.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thoughtfully designed apartments that maximize space and comfort, providing you with the perfect balance of luxury and functionality.
            </p>
            <Button variant="outline" size="lg" className="hover:bg-blue-500">
              Explore Unit Plans
            </Button>
          </div>
          <div className="relative aspect-video">
            <img
              src={interior}
              alt="Luxury Apartment Interior"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

