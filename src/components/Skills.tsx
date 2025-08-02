import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import './all.css';
import { Code, Database, Wrench, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 50 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      description: "Creating robust server-side applications",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 82 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 80 },
        { name: "Uvicorn", level: 80 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      description: "Managing data efficiently and securely",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Database Design", level: 78 },
        { name: "Data Modeling", level: 70 },
        { name: "Query Optimization", level: 78 },
        { name: "Database Security", level: 70 },
        { name: "NoSQL", level: 50 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Building intelligent applications and models",
      skills: [
        { name: "Python", level: 80 },
        { name: "TensorFlow Lite", level: 67 },
        { name: "PyTorch", level: 82 },
        { name: "OpenCV", level: 80 },
        { name: "Image Processing", level: 83 },
        { name: "Model Optimization", level: 78 }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-8 h-8" />,
      description: "Streamlining development and testing processes",
      skills: [
        { name: "Git", level: 82 },
        { name: "Postman", level: 88 },
        { name: "Figma", level: 85 },
        { name: "Web Scraping", level: 50 },
        { name: "API Testing", level: 80 },
        { name: "Version Control", level: 70 }
      ]
    },
    {
      title: "Full-Stack Integration",
      icon: <Palette className="w-8 h-8" />,
      description: "Connecting frontend and backend seamlessly",
      skills: [
        { name: "JWT Authentication", level: 60 },
        { name: "Role-Based Access", level: 85 },
        { name: "Real-time Features", level: 85 },
        { name: "API Integration", level: 90 },
        { name: "Cloud APIs", level: 89 },
        { name: "System Architecture", level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "custom-progress";
    if (level >= 80) return "custom-progress1";
    if (level >= 30) return "custom-progress2";
    return "text-orange-500";
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover-lift bg-gradient-card border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className="color">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress
                        value={skill.level}
                        className={`h-2 bg-purple-100 ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js", "Node.js", "Django", "MongoDB", "Python", "Express.js",
                "HTML5", "CSS3", "Bootstrap", "TensorFlow Lite", "PyTorch", "OpenCV",
                "Git", "Postman", "Figma", "Uvicorn", "Web Scraping", "JWT",
                "Role-Based Access", "API Integration", "Cloud APIs", "Image Processing"
              ].map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-smooth cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;