"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Guillermo-rubyDev", handle: "   " },
    { name: "LinkedIn", icon: Linkedin, url: "www.linkedin.com/in/guillermo-fernandez-a0580b210", handle: "   " },
  ];

  return (
    <section id="contact" className="py-24 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center justify-center gap-4" data-testid="contact-title">
              <span className="text-primary font-mono text-2xl">04.</span>
              What's Next?
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="contact-subtitle">
              Get In Touch
            </h3>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">

            {/* Contact Info & Social Links */}
            <div className="space-y-6">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground" data-testid="direct-contact-title">
                  Let's Connect
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities, especially ambitious or large projects. 
                  But even if you just want to say hi, don't hesitate to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4 flex space-x-12 items-end">
                {socialLinks.map((social) => (
                  <div
                    key={social.name}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer hover-elevate"
                    onClick={() => {
                      window.open(social.url, '_blank');
                    }}
                    data-testid={`social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="text-primary w-6 h-6" />
                    <div className="flex-1">
                      <div className="text-foreground font-medium">{social.name}</div>
                      <div className="text-muted-foreground text-sm font-mono">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}