import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary-foreground text-gray-600">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4  text-gray-600">About Us</h3>
            <p className="text-sm text-gray-600">
              Dhanira Properties is a leading real estate developer known for creating luxurious living spaces with world-class amenities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/projects" className="text-sm text-gray-600 hover:text-white">
                Projects
              </a>
              <a href="/amenities" className="text-sm text-gray-600 hover:text-white">
                Amenities
              </a>
              <a href="/location" className="text-sm text-gray-600 hover:text-white">
                Location
              </a>
              <a href="/contact" className="text-sm text-gray-600 hover:text-white">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>080 471 09111</p>
              <p>sales@dhanira.in</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Dhanira Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

