"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (name: string, url: string) => {
    console.log(`Opening ${name}: ${url}`);
    window.open(url, '_blank');
  };

  return (
    <footer className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Attribution */}
          <div className="space-y-2 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> by Guillermo Fernandez
            </p>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            onClick={() => {
              console.log("Scrolling to top");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono text-primary hover:text-primary/80 hover-elevate"
            data-testid="back-to-top"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
}