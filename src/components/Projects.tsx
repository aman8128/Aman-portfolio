import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern React patterns and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Bootstrap CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative design and smooth animations. Built with performance and SEO in mind.",
      technologies: ["React", "Framer Motion", "GSAP", "Bootstrap CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "Weather API", "Charts.js", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with rich text editor, SEO optimization, and social media integration.",
      technologies: ["Next.js", "Prisma", "NextAuth", "Bootstrap CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      technologies: ["React", "Node.js", "MySQL", "AWS S3", "Google Maps"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`hover-lift transition-smooth border-0 ${
                  project.featured 
                    ? 'md:col-span-2 lg:col-span-1 bg-gradient-card shadow-card' 
                    : 'bg-gradient-card shadow-card'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-gradient-primary text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-3 w-full">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Demo Video Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-0 shadow-elegant max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Watch My Work in Action</h3>
                <p className="text-muted-foreground mb-6">
                  See live demonstrations of my projects and development process
                </p>
                <Button variant="hero" size="lg">
                  View Demo Videos
                  <Play className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;