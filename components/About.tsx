import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// import profileImage from '@assets/generated_images/my photo.jpg';

export default function About() {
  // TODO: Remove mock data
  const skills = [
    "Ruby",
    "JavaScript",
    "TypeScript", 
    "Ruby on Rails",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "Bootstrap",
    "Material UI",
    "Git", 
    "AWS",
    "Vercel",
    "Docker",
    "Jira"
  ];

  return (
    <section id="about" className="py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-4" data-testid="about-title">
              <span className="text-primary font-mono text-2xl">01.</span>
              About Me
              <div className="flex-1 h-px bg-border ml-8"></div>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* About Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>Hello 👋</p>
                <p data-testid="about-paragraph-1">
                  As a seasoned developer, I've developed projects with Ruby on Rails and modern JS frameworks 
                  such as React and Next.js and bring the client's idea into life based on rich experience over 8 years of  software development.
                </p>
                
                <p data-testid="about-paragraph-2">
                  I've focused on delivering scalable, cost-effective solutions with high performance and high availability.
                </p>

                <p data-testid="about-paragraph-3">
                 Especially, I have a strong background in Ruby on Rails and Next.js, leading several projects to success, 
                 including e-commerce, healthcare, and financial services.
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <p className="text-foreground font-medium">
                  Here are my expertise skills:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" data-testid="skills-grid">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-start font-mono text-sm py-2 hover-elevate"
                      data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <span className="text-primary mr-2">▹</span>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-1">
              <Card className="relative group overflow-hidden">
                <div className="aspect-square">
                  <img
                    src="/generated_images/my photo.jpg"
                    alt="Guillermo Fernandez"
                    className="w-full h-full group-hover:grayscale-0 transition-all duration-300"
                    data-testid="profile-image"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}