import React from 'react';
import { Card, CardContent } from "./ui/card";
import landmark from '../assets/images/landmark.jpg';
import spectra from '../assets/images/spectra.jpg';
import springs from '../assets/images/springs.jpg';
const projects = [
  {
    title: "Dhanira Landmark",
    type: "3, 3.5 & 4 BHK",
    location: "Financial District",
    completion: "March 2025",
    image: landmark
  },
  {
    title: "Dhanira Spectra",
    type: "3 BHK",
    location: "Gachibowli",
    completion: "December 2025",
    image: spectra
  },
  {
    title: "Dhanira Springs",
    type: "2 & 3 BHK",
    location: "Pocharam",
    completion: "February 2025",
    image: springs
  }
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-1">{project.type}</p>
                <p className="text-muted-foreground mb-1">{project.location}</p>
                <p className="text-sm">Completion: {project.completion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

