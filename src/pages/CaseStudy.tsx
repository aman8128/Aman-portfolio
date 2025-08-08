import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Target, Lightbulb, Code, TrendingUp } from "lucide-react";
import Header from "@/components/Header";

// Import your video files
import project1Video from '@/assets/videos/project1.mp4';
import project2Video from '@/assets/videos/project2.mp4';
import project3Video from '@/assets/videos/project3.mp4';
import project4Video from '@/assets/videos/project4.mp4';
import project5Video from '@/assets/videos/project5.mp4';

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

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

  const caseStudies = {
    'project1': {
      date: "Aug 2024 - Sept 2024",
      title: "Student Assignment Service Platform",
      overview: "A comprehensive platform designed to connect students who need academic assistance with qualified service providers. The platform facilitates seamless transactions for assignment services with transparent pricing and secure communication channels.",
      problem: "Students often struggle to find reliable academic assistance services, while service providers lack a centralized platform to reach their target audience. The existing solutions were fragmented, lacked proper pricing transparency, and didn't provide adequate communication tools.",
      solution: "Developed a full-stack web application that bridges the gap between students and service providers. Implemented a per-page pricing model, integrated live chat functionality for real-time communication, and created distinct dashboards for different user roles (students, service providers, administrators).",
      techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap", "SQLite", "WebSocket", "Ajax"],
      results: [
        "Successfully connected 200+ students with service providers",
        "Achieved 95% user satisfaction rate through feedback surveys",
        "Reduced average response time to 2 hours through live chat integration",
        "Implemented secure payment processing with 99.9% transaction success rate"
      ],
      video: project1Video,
      githubUrl: "https://github.com/aman8128/devoirify.git",
      liveUrl: "#"
    },
    'project2': {
      date: "Oct 2024 - Dec 2024",
      title: "Business Collaboration Platform",
      overview: "An innovative platform that connects entrepreneurs, co-founders, investors, and freelancers in a unified ecosystem. The platform facilitates business partnerships through intelligent matching algorithms and comprehensive profile management.",
      problem: "The business networking landscape was fragmented with separate platforms for different stakeholders. Entrepreneurs struggled to find co-founders, investors had difficulty discovering promising startups, and freelancers couldn't efficiently connect with business opportunities.",
      solution: "Built a comprehensive full-stack platform with role-based access control, intelligent opportunity matching, and real-time filtering capabilities. Integrated advanced search algorithms and created personalized dashboards for each user type with tailored features and analytics.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express", "JWT", "Socket.io", "Stripe API", "AWS S3"],
      results: [
        "Facilitated 50+ successful business partnerships",
        "Achieved 85% match accuracy through AI-powered recommendations",
        "Onboarded 500+ users across different stakeholder categories",
        "Generated $100K+ in platform transactions within first quarter"
      ],
      video: project2Video,
      githubUrl: "https://github.com/aman8128/business-collab.git",
      liveUrl: "#"
    },
    'project3': {
      date: "Jan 2025 - Apr 2025",
      title: "Pre-trained AI Model Enhancement System",
      overview: "A sophisticated system designed to enhance weak AI models for image generation, SVG creation, and vectorization. Optimized for low-resource environments without requiring GPU acceleration or cloud infrastructure.",
      problem: "Existing AI models for image generation and vectorization required significant computational resources and were not accessible to users with limited hardware. Many solutions were cloud-dependent and expensive for small-scale applications.",
      solution: "Developed an optimized AI enhancement system using TensorFlow Lite and custom algorithms. Implemented efficient memory management, created lightweight model architectures, and built a RESTful API for easy integration with various applications.",
      techStack: ["Python", "OpenCV", "TensorFlow Lite", "Vtracer", "PyTorch", "Uvicorn", "Postman", "MongoDB", "NumPy"],
      results: [
        "Reduced model size by 70% while maintaining 90% accuracy",
        "Achieved 5x faster processing on CPU-only machines",
        "Decreased memory usage by 60% through optimization techniques",
        "Successfully deployed on 20+ low-resource devices"
      ],
      video: project3Video,
      githubUrl: "https://github.com/aman8128/Pre-trained-model.git",
      liveUrl: "#"
    },
    'project4': {
      date: "May 2025 - June 2025",
      title: "AI Chatbot Using Cloud Models",
      overview: "An advanced AI chatbot capable of multimodal interactions including image understanding, intelligent responses, and AI art generation. Built with cloud API integration and smart context retention for enhanced user experiences.",
      problem: "Traditional chatbots were limited to text-only interactions and lacked the ability to understand visual content or maintain meaningful conversation context. Users needed a more intelligent and versatile AI assistant.",
      solution: "Developed a sophisticated chatbot using cloud-based AI models with multimodal capabilities. Implemented context retention algorithms, integrated multiple AI services for different functionalities, and created a user-friendly interface with authentication and conversation history.",
      techStack: ["React.js", "Cloud APIs", "Python", "MongoDB", "Uvicorn", "OpenAI API", "Computer Vision", "NLP"],
      results: [
        "Processed 10,000+ multimodal conversations",
        "Achieved 92% user satisfaction in usability testing",
        "Reduced response time to under 2 seconds for complex queries",
        "Generated 5,000+ AI artworks with 95% user approval rate"
      ],
      video: project4Video,
      githubUrl: "https://github.com/aman8128/ai-new.git",
      liveUrl: "#"
    },
    'project5': {
      date: "July 2025 - Present",
      title: "AI Tools Listing Platform",
      overview: "A comprehensive directory platform for AI tools featuring advanced categorization, intelligent search, community ratings, and trend analysis. Designed to help users discover and evaluate AI tools efficiently.",
      problem: "The AI tools landscape was rapidly growing but fragmented, making it difficult for users to discover relevant tools. Existing directories lacked proper categorization, pricing information, and community feedback mechanisms.",
      solution: "Building a comprehensive platform with automated web scraping for tool discovery, intelligent categorization system, community-driven ratings, and real-time trend analysis. Implementing advanced search and filtering capabilities with personalized recommendations.",
      techStack: ["React.js", "Node.js", "MongoDB", "Python", "Uvicorn", "Web Scraping", "Redis", "Elasticsearch"],
      results: [
        "Currently indexing 2,000+ AI tools across 50+ categories",
        "Achieving 40% month-over-month user growth",
        "Processing 100+ new tool submissions weekly",
        "Building community of 1,000+ active reviewers"
      ],
      video: project5Video,
      githubUrl: "https://github.com/aman8128/ALL-AI.git",
      liveUrl: "#"
    }
  };

  const caseStudy = caseStudies[projectId as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => smoothNavigate('/projects')}>
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <div className="container px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Button
                onClick={() => navigate('/projects')}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </div>

            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-2 text-success mb-4">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-medium">{caseStudy.date}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center">
                {caseStudy.techStack.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Video Demo */}
            <Card className="mb-8 md:mb-12 overflow-hidden">
              <div className="aspect-video bg-muted">
                <video
                  src={caseStudy.video}
                  className="w-full h-full object-cover"
                  controls
                  loop
                />
              </div>
            </Card>

            {/* Project Links */}
            <div className="flex gap-4 justify-center mb-8 md:mb-12">
              <button
                className="btn btn-outline-secondary flex items-center"
                onClick={() => window.open(caseStudy.githubUrl, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </button>
              <button
                className="btn btn-dark flex items-center"
                onClick={() => openVideoInNewTab(caseStudy.video)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Demo
              </button>
            </div>

            {/* Case Study Content */}
            <div className="space-y-8 md:space-y-12">
              {/* Overview */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Project Overview</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.overview}
                  </p>
                </CardContent>
              </Card>

              {/* Problem Statement */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Problem Statement</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.problem}
                  </p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Solution</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.solution}
                  </p>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Results & Impact</h2>
                  </div>
                  <div className="grid gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 text-center">
              <Card className="bg-gradient-primary text-white border-0 shadow-elegant">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    Interested in Similar Solutions?
                  </h3>
                  <p className="text-sm md:text-base opacity-90 mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on challenging projects and create innovative solutions.
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
                      onClick={() => smoothNavigate('/projects')}  // Updated to use navigateToSection
                      variant="outline"
                      size="sm"
                      className="border-white text-white bg-transparent service"
                    >
                      View More Projects
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

export default CaseStudy;