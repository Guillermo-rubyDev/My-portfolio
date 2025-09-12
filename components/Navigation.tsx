"use client"

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
}

export default function Navigation({ activeSection = "home", onSectionClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onSectionClick?.(sectionId);
    console.log(`Navigating to ${sectionId} section`);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-20 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-8 lg:z-50">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-primary font-mono text-2xl font-bold">
            &lt;/&gt;
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <Button
            variant="ghost"
            size="icon"
            data-testid="social-github"
            onClick={() => window.open('https://github.com/Guillermo-rubyDev', '_blank')}
            className="hover-elevate"
          >
            <Github size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            data-testid="social-linkedin"
            onClick={() => window.open('https://linkedin.com', '_blank')}
            className="hover-elevate"
          >
            <Linkedin size={20} />
          </Button>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}>
        <div className="flex items-center justify-between p-4">
          <div className="text-primary font-mono text-xl font-bold">
            &lt;/&gt;
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            className="hover-elevate"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
          <div className="p-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`block w-full text-left p-3 rounded-lg transition-colors font-mono hover-elevate ${
                  activeSection === section.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-muted"
                }`}
                data-testid={`mobile-nav-${section.id}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}