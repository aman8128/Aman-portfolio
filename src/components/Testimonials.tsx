import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=150&h=150&fit=crop&crop=face",
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      content: "Working with Alex was a pleasure. The React application he built for us is fast, scalable, and exactly what we needed for our growing user base.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "React Dashboard"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      content: "The landing page Alex created for our campaign generated a 40% increase in conversions. Professional work with great communication throughout.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "Landing Page"
    },
    {
      name: "David Park",
      role: "Founder",
      company: "LocalBiz Solutions",
      content: "Alex transformed our outdated website into a modern, responsive platform. Our customer engagement has improved significantly since the launch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      project: "Website Redesign"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "ServicePro",
      content: "The mobile app Alex developed is intuitive and performs flawlessly. Our team and customers love the user experience he created.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      project: "Mobile App"
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "DataFlow Systems",
      content: "Alex's technical expertise and problem-solving skills are impressive. He delivered a complex dashboard that our team uses daily with great success.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Analytics Dashboard"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <p className="text-muted-foreground">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;