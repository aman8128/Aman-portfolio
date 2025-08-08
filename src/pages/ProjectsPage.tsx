import { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Target, ArrowLeft, Play, Github, ExternalLink, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import './ProjectsPage.css';

// Import your video files
import project1Video from '@/assets/videos/project1.mp4';
import project2Video from '@/assets/videos/project2.mp4';
import project3Video from '@/assets/videos/project3.mp4';
import project4Video from '@/assets/videos/project4.mp4';
import project5Video from '@/assets/videos/project5.mp4';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const smoothNavigate = (path) => {
    // First scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Then navigate after scroll completes
    setTimeout(() => {
      navigate(path);
    }, 500); // Match this duration with your scroll duration
  };

  const projects = [
    {
      date: "Aug 2024 - Sept 2024",
      title: "Student Assignment Service Platform",
      description: "Developed a platform for students to buy/sell assignment services. Included per-page pricing, live chat, and role-based login/dashboard system.",
      techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
      status: "Completed",
      video: project1Video,
      demoUrl: "#",
      githubUrl: "https://github.com/aman8128/devoirify.git"
    },
    {
      date: "Oct 2024 - Dec 2024",
      title: "Business Collaboration Platform",
      description: "Built a full-stack platform to connect co-founders, investors, freelancers, and business owners. Integrated dashboards, role-based access, opportunity matching, and real-time filtering.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
      status: "Completed",
      video: project2Video,
      demoUrl: "#",
      githubUrl: "https://github.com/aman8128/business-collab.git"
    },
    {
      date: "Jan 2025 - Apr 2025",
      title: "Pre-trained AI Model Enhancement System",
      description: "Improved a weak AI model for image generation, SVG creation, and vectorization. Focused on performance and memory control on low-resource machines (no GPU/server).",
      techStack: ["Python", "OpenCV", "TensorFlow Lite", "Vtracer", "PyTorch", "Uvicorn", "Postman", "MongoDB"],
      status: "Completed",
      video: project3Video,
      demoUrl: "#",
      githubUrl: "https://github.com/aman8128/Pre-trained-model.git"
    },
    {
      date: "May 2025 - June 2025",
      title: "AI Chatbot Using Cloud Models",
      description: "Developed a chatbot capable of understanding images, generating responses, and creating AI art using cloud APIs. Includes login/signup and smart context retention.",
      techStack: ["React.js", "Cloud APIs", "Python", "MongoDB", "Uvicorn"],
      status: "Completed",
      video: project4Video,
      demoUrl: "#",
      githubUrl: "https://github.com/aman8128/ai-new.git"
    },
    {
      date: "July 2025 - Present",
      title: "AI Tools Listing Platform",
      description: "Building a categorized AI tools directory with search, filters, ratings, and upvote system. Tracks pricing and highlights trending tools.",
      techStack: ["React.js", "Node.js", "MongoDB", "Python", "Uvicorn", "Web Scraping"],
      status: "In Progress",
      video: project5Video,
      demoUrl: "#",
      githubUrl: "https://github.com/aman8128/ALL-AI.git"
    }
  ];

  const toggleVideo = (index: number) => {
    if (playingVideo === index) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        videoRefs.current[playingVideo]?.pause();
      }
      videoRefs.current[index]?.play();
      setPlayingVideo(index);
    }
  };

  const openVideoInNewTab = (videoSrc: string) => {
    const videoWindow = window.open('', '_blank');
    if (videoWindow) {
      videoWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Project Demo</title>
            <style>
              body { 
                margin: 0; 
                padding: 0; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                background: #000; 
              }
              video { 
                max-width: 90vw; 
                max-height: 90vh; 
                outline: none; 
              }
              .close-btn {
                position: fixed;
                top: 20px;
                right: 20px;
                color: white;
                background: rgba(0,0,0,0.5);
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
              }
              .close-btn:hover {
                background: rgba(0,0,0,0.7);
              }
            </style>
          </head>
          <body>
            <button class="close-btn" onclick="window.close()">Close</button>
            <video controls autoplay loop>
              <source src="${videoSrc}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </body>
        </html>
      `);
      videoWindow.document.close();
    }
  };

  const navigateToSection = (sectionId) => {
    // Navigate to home page first
    navigate('/');

    // Then scroll to section after a small delay
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100); // Small delay to allow page transition
  };

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-500/20 text-green-700" : "bg-yellow-500/20 text-yellow-700";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <div className="container px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>

            <div className="text-center mb-8 md:mb-16 px-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                My Projects
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of full-stack applications, AI-powered tools, and innovative platforms I've built
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Video Section - Left Side */}
                    <div className="space-y-4 order-2 md:order-1">
                      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                        <video
                          ref={el => videoRefs.current[index] = el}
                          src={project.video}
                          className="w-full h-full object-cover"
                          loop
                          onClick={() => toggleVideo(index)}
                        />
                        {playingVideo !== index && (
                          <button
                            onClick={() => toggleVideo(index)}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
                          >
                            <Play className="w-12 h-12 text-white" />
                          </button>
                        )}
                        {playingVideo === index && (
                          <button
                            onClick={() => toggleVideo(index)}
                            className="absolute top-4 left-4 bg-black/50 rounded-full p-2 hover:bg-black/70"
                          >
                            <Pause className="w-5 h-5 text-white" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Project Details - Right Side */}
                    <div className="space-y-4 order-1 md:order-2">
                      <div>
                        <div className="flex items-center gap-2 text-success mb-3">
                          <Calendar className="w-5 h-5" />
                          <span className="text-lg font-medium">{project.date}</span>
                        </div>
                        <div className="flex items-start gap-2 mb-4">
                          <Target className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-lg font-semibold text-success">Project: </span>
                            <h3 className="text-2xl font-bold inline">{project.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <Badge key={i} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <button
                          onClick={() => smoothNavigate(`/case-study/project${index + 1}`)}
                          className="flex items-center gap-2 text-sm btn btn-outline-success"
                        >
                          <Target className="w-4 h-4" />
                          <span className="whitespace-nowrap">Case Study</span>
                        </button>
                        <button
                          className="flex items-center gap-2 text-sm btn btn-outline-dark"
                          onClick={() => openVideoInNewTab(project.video)}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="whitespace-nowrap">Demo</span>
                        </button>
                        <button
                          className="flex items-center gap-2 text-sm btn btn-outline-secondary"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                          <span className="whitespace-nowrap">Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 md:mt-16 text-center px-2">
              <Card className="bg-gradient-primary text-white border-0 shadow-sm md:shadow-elegant max-w-4xl mx-auto">
                <CardContent className="p-4 md:p-8">
                  <h3 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4">Interested in Working Together?</h3>
                  <p className="text-sm md:text-base opacity-90 mb-4 md:mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on new projects and solve challenging problems.
                    Let's discuss how I can help bring your ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
                    <Button
                      onClick={() => navigateToSection('contact')}  // Updated to use navigateToSection
                      variant="outline"
                      size="sm"
                      className="bg-white text-primary projects"
                    >
                      Start a Project
                    </Button>
                    <Button
                      onClick={() => navigateToSection('services')}  // Updated to use navigateToSection
                      variant="outline"
                      size="sm"
                      className="border-white text-white bg-transparent service"
                    >
                      View Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;