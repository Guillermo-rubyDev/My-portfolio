"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I build exceptional digital experiences.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    console.log("Scrolling to about section");
  };

  const viewResume = () => {
    // Create a download link for the CV/resume
    const link = document.createElement('a');
    link.href = '/Guillermo_Fernandez_Resume.pdf';
    link.download = 'Guillermo_Fernandez_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-primary font-mono text-base lg:text-lg" data-testid="hero-intro">
              Hi, my name is
            </p>
            <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight" data-testid="hero-name">Guillermo Fernandez</h1>
            
          </div>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="hero-description">
              I am a seasoned software engineer with over 8 years of experience, specializing in Ruby
              on Rails and modern JavaScript frameworks such as React.js, Next.js and Vue.js.
              I have worked on innovative, large-scale projects and delivered high-quality, best
              optimized and scalable projects.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              onClick={viewResume}
              data-testid="button-resume"
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-mono hover-elevate"
            >
              Check out my resume!
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors animate-bounce"
        data-testid="scroll-indicator"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}