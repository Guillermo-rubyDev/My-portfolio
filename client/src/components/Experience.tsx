import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  url?: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  // TODO: Remove mock data
  const experiences: ExperienceItem[] = [
    {
      id: "infuse",
      company: "Infuse",
      position: "Software Engineer",
      duration: "2023 - 2025",
      url: "https://infuse.com/",
      description: [
        "Streamlined code review processes by implementing automated testing tools, resulting in a 30% increase in efficiency and a 20% decrease in error rates.",
        "Led the development of a customer-facing application, enhancing user engagement by 30% through user-centric design and feature improvements",
        "Spearheaded the implementation of best practices for code quality and consistency, resulting in a 25% reduction in technical debt.",
        "Mentored junior developers on coding standards and best practices, fostering a culture of continuous learning and improvement within the team."
      ],
      technologies: ["Ruby on Rails", "Next.js", "Node.js", "Nest.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "Jira"]
    },
    {
      id: "sinnaptia",
      company: "SINAPTIA",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      url: "https://sinaptia.dev/",
      description: [
        "Designed and implemented user-friendly interfaces using React and Next.js, resultingin a 20% increase in user engagement and retention",
        "Developed and maintained RESTful APIs in Ruby on Rails, improving data processing efficiency by 30%",
        "Optimized database queries and migrations in PostgreSQL, improving application response times by 20%.",
        "Participated actively in Agile development cycles, enhancing team productivity and achieving rapid deployment velocities."
      ],
      technologies: ["Ruby on Rails", "React.js", "Next.js", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Postman", "Vercel"]
    },
    {
      id: "tarmac",
      company: "Tarmac.IO",
      position: "Backend developer",
      duration: "2017 - 2021",
      url: "https://www.tarmac.io/",
      description: [
        "Developed and maintained backend applications using Ruby on Rails and Node.js, consistently meeting project deadlines and delivering high-quality code",
        "Implemented RESTful APIs and integrated third-party services to optimize functionality and improve user experience.",
        "Collaborated with cross-functional teams to troubleshoot and resolve technical issues, ensuring seamless integration of front-end and back-end systems",
        "Conducted performance testing and optimization to enhance application scalability and reliability, resulting in improved response times and reduced downtime."
      ],
      technologies: ["Ruby on Rails", "Node.js", "Express.js", "Postman", "PostgreSQL", "Slack", "Git"]
    }
  ];

  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience: ExperienceItem) => {
    setActiveExperience(experience);
    console.log(`Selected experience: ${experience.company}`);
  };

  return (
    <section id="experience" className="py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-4" data-testid="experience-title">
              <span className="text-primary font-mono text-2xl">02.</span>
              Where I've Worked
              <div className="flex-1 h-px bg-border ml-8"></div>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Experience Tabs - Desktop */}
            <div className="lg:col-span-1">
              <div className="hidden lg:flex flex-col space-y-2">
                {experiences.map((exp) => (
                  <Button
                    key={exp.id}
                    variant={activeExperience.id === exp.id ? "secondary" : "ghost"}
                    onClick={() => handleExperienceClick(exp)}
                    className={`justify-start font-mono text-sm py-3 px-4 border-l-2 rounded-none hover-elevate ${
                      activeExperience.id === exp.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    data-testid={`experience-tab-${exp.id}`}
                  >
                    {exp.company}
                  </Button>
                ))}
              </div>

              {/* Experience Tabs - Mobile */}
              <div className="lg:hidden">
                <div className="flex overflow-x-auto space-x-2 pb-2">
                  {experiences.map((exp) => (
                    <Button
                      key={exp.id}
                      variant={activeExperience.id === exp.id ? "secondary" : "ghost"}
                      onClick={() => handleExperienceClick(exp)}
                      className={`whitespace-nowrap font-mono text-sm hover-elevate ${
                        activeExperience.id === exp.id
                          ? "bg-primary/10 text-primary border-b-2 border-primary"
                          : "text-muted-foreground"
                      }`}
                      data-testid={`experience-tab-mobile-${exp.id}`}
                    >
                      {exp.company}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Content */}
            <div className="lg:col-span-3">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-0 space-y-6">
                  {/* Job Title & Company */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2" data-testid="job-title">
                      {activeExperience.position}{" "}
                      <span className="text-primary">@ {activeExperience.company}</span>
                      {activeExperience.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6 hover-elevate"
                          onClick={() => {
                            console.log(`Opening ${activeExperience.url}`);
                            window.open(activeExperience.url, '_blank');
                          }}
                          data-testid="company-link"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm" data-testid="job-duration">
                      {activeExperience.duration}
                    </p>
                  </div>

                  {/* Job Description */}
                  <ul className="space-y-4 text-muted-foreground" data-testid="job-description">
                    {activeExperience.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-2 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2" data-testid="job-technologies">
                    {activeExperience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="font-mono text-xs hover-elevate"
                        data-testid={`tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}