import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Bug,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";
import './all.css';
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Custom Web Applications",
      description: "Full-stack web applications with modern frameworks, user authentication, and database integration tailored to your business needs.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Responsive Design", "Database Integration", "User Authentication", "API Development"],
      startingPrice: "$2,000",
      timeline: "2-4 weeks",
      popular: true
    },
    {
      title: "AI-based Chatbots & Tools",
      description: "Intelligent chatbots and AI-powered tools using machine learning models, cloud APIs, and advanced image processing capabilities.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Natural Language Processing", "Image Understanding", "Cloud API Integration", "Context Retention"],
      startingPrice: "$1,500",
      timeline: "2-3 weeks",
      popular: false
    },
    {
      title: "Role-Based Dashboards",
      description: "Professional dashboards with role-based access control, real-time data visualization, and comprehensive user management systems.",
      icon: <Palette className="w-8 h-8" />,
      features: ["Role Management", "Real-time Updates", "Data Visualization", "Security Features"],
      startingPrice: "$1,800",
      timeline: "3-4 weeks",
      popular: false
    },
    {
      title: "Full-stack Platforms",
      description: "Complete business platforms with frontend interfaces, backend APIs, database design, and integrated payment systems.",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["End-to-end Development", "Payment Integration", "Scalable Architecture", "Admin Panel"],
      startingPrice: "$3,500",
      timeline: "4-6 weeks",
      popular: false
    },
    {
      title: "Bug Fixes & Performance Optimization",
      description: "Quick debugging, performance improvements, security patches, and code optimization for existing applications.",
      icon: <Bug className="w-8 h-8" />,
      features: ["Bug Diagnosis", "Performance Tuning", "Security Updates", "Code Review"],
      startingPrice: "$100/hour",
      timeline: "1-3 days",
      popular: false
    },
    {
      title: "AI Model Enhancement",
      description: "Optimize existing AI models for better performance, memory efficiency, and deployment on low-resource environments.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Model Optimization", "Memory Management", "Performance Tuning", "Deployment Setup"],
      startingPrice: "$2,500",
      timeline: "3-5 weeks",
      popular: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Freelance Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional full-stack development services for modern web applications and AI-powered solutions
            </p>
            <div className="bg-gradient-primary text-white px-6 py-3 rounded-full inline-flex items-center gap-2 text-lg font-medium shadow-elegant">
              <CheckCircle className="w-5 h-5" />
              Need a custom website or AI tool? Let's work together!
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-primary text-white border-0 shadow-elegant max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-4">Ready to Start Your Project?</h3>
                <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                  Let's discuss your ideas and create something amazing together.
                  I'm here to help bring your vision to life with modern, scalable solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    variant="outline-hero"
                    size="lg"
                    className="bg-white text-primary projects"
                  >
                    Get Free Consultation
                  </Button>
                  <Button
                    onClick={() => smoothNavigate('/projects')}
                    variant="outline"
                    size="lg"
                    className="border-white text-white bg-transparent service"
                  >
                    View My Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;