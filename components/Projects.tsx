"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
// Asset imports temporarily commented out
// import foodMarketImage from '@assets/generated_images/sprouts_ruby.png';
// import healthcareImage from '@assets/generated_images/ruby_healthcare.png';
// import assetCutImage from '@assets/generated_images/next.js_assetcut.png';
// import hootelBookingImage from '@assets/generated_images/hotel booking.png';
// import dashboardImage from '@assets/generated_images/business dashboard_rampcom.png';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  year: string;
}

export default function Projects() {
  // TODO: Remove mock data
  const projects: Project[] = [
    {
      id: "foodmarket-platform",
      title: "Food Market Platform",
      description: "Developed an food market site using Ruby on Rails and React. I built the user interface using TailwindCSS, integrated the Stripe payment gateway, and developed the backend using GraphQL and Ruby on Rails. I collaborated with designer, QA engineer, and front-end developer on the development.",
      technologies: ["Ruby on Rails", "React.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "https://sprouts.com",
      image: "/generated_images/sprouts_ruby.png",
      year: "2024"
    },
    {
      id: "rwa-platform",
      title: "Real World Assets Platform",
      description: "Built RWA platform forntend with Next.js, Web3.js,  Material UI and TailwindCSS. I focused on fully responsive, pixel perfect UI. Collaborated with Backend developer and blockchain developer to implement the tokenization logic and integrate RESTful API.",
      technologies: ["Next.js", "TypeScript", "Material UI", "Web3.js", "TailwindCSS"],
      liveUrl: "https://assetcut.com",
      image: "/generated_images/next.js_assetcut.png",
      year: "2024"
    },
    {
      id: "healthcare-platform",
      title: "Healthcare Platform",
      description: "Healthcare platform for hairloss patients. Developed with Ruby on Rails and React.js. Implemented the quiz system, Gpay and Apple pay intergration.",
      technologies: ["Ruby on Rails", "React.js", "PostgreSQL", "Google Pay", "Apple Pay"],
      liveUrl: "https://agenthealth.co.uk/",
      image: "/generated_images/ruby_healthcare.png",
      year: "2023"
    },
    {
      id: "hotelbooking",
      title: "Hotel Booking App",
      description: "A hotel booking platform is an online service that lets travelers search, compare, and reserve hotels in different locations.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Material UI", "OAuth", "Figma"],
      liveUrl: "https://www.sonder.com/",
      image: "/generated_images/hotel booking.png",
      year: "2022"
    },
    {
      id: "business_dashboard",
      title: "Business Dashboard",
      description: "Business dashboard platform that makes time efficient, effective business. Worked as full stack developer with MERN stack",
      technologies: ["Node.js", "Express.js", "React", "MongoDB", "Data visualization", "D3.js"],
      liveUrl: "https://ramp.com",
      image: "/generated_images/business dashboard_rampcom.png",
      year: "2021"
    }
  ];

  const handleProjectClick = (project: Project, type: 'github' | 'live') => {
    const url = type === 'github' ? project.githubUrl : project.liveUrl;
    window.open(url, '_blank')
  };

  return (
    <section id="projects" className="py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-4" data-testid="projects-title">
              <span className="text-primary font-mono text-2xl">03.</span>
              My Project Journey
              <div className="flex-1 h-px bg-border ml-8"></div>
            </h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" data-testid="timeline-line"></div>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  data-testid={`timeline-item-${project.id}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content Card */}
                  <Card className={`w-2/5 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} hover-elevate group`}>
                    <CardContent className="p-4 space-y-3">
                      {/* Project Image */}
                      {project.image && (
                        <div className="relative overflow-hidden rounded-md">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                            data-testid={`project-image-${project.id}`}
                          />
                          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                        </div>
                      )}
                      
                      {/* Year Badge */}
                      <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <Badge variant="outline" className="font-mono text-xs text-primary border-primary">
                          {project.year}
                        </Badge>
                      </div>
                      
                      {/* Project Info */}
                      <div className={`space-y-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <h3 className="text-lg font-semibold text-foreground" data-testid={`project-title-${project.id}`}>
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className={`text-muted-foreground leading-relaxed text-xs ${index % 2 === 0 ? 'text-left' : 'text-right'}`} data-testid={`project-description-${project.id}`}>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-1 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} data-testid={`project-technologies-${project.id}`}>
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="font-mono text-xs hover-elevate px-2 py-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className={`flex gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleProjectClick(project, 'live')}
                            data-testid={`project-live-${project.id}`}
                            className="hover-elevate w-7 h-7"
                          >
                            <ExternalLink size={14} />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connector Line */}
                  <div className={`absolute top-1/2 w-8 h-0.5 bg-border ${
                    index % 2 === 0 
                      ? 'left-1/2 ml-2' 
                      : 'right-1/2 mr-2'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (Simplified) */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {projects.map((project) => (
                <Card key={`mobile-${project.id}`} className="hover-elevate">
                  <CardContent className="p-6 space-y-0">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="font-mono text-primary border-primary">
                        {project.year}
                      </Badge>
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleProjectClick(project, 'github')}
                            className="hover-elevate w-8 h-8"
                          >
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleProjectClick(project, 'live')}
                            className="hover-elevate w-8 h-8"
                          >
                            <ExternalLink size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs hover-elevate"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}