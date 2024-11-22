import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-serif">Dhanira</span>
          <span className="text-primary font-serif">Properties</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/projects" className="text-sm font-medium hover:text-blue-500">
            Projects
          </a>
          <a href="/amenities" className="text-sm font-medium hover:text-blue-500">
            Amenities
          </a>
          <a href="/location" className="text-sm font-medium hover:text-blue-500">
            Location
          </a>
          <a href="/specifications" className="text-sm font-medium hover:text-blue-500">
            Specifications
          </a>
          <a href="/media" className="text-sm font-medium hover:text-blue-500">
            Media
          </a>
          <Button className="bg-yellow-500 hover:bg-blue-500">Book Site Visit</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4">
              <a href="/projects" className="text-sm font-medium">
                Projects
              </a>
              <a href="/amenities" className="text-sm font-medium">
                Amenities
              </a>
              <a href="/location" className="text-sm font-medium">
                Location
              </a>
              <a href="/specifications" className="text-sm font-medium">
                Specifications
              </a>
              <a href="/media" className="text-sm font-medium">
                Media
              </a>
              <Button className="w-full">Book Site Visit</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;

