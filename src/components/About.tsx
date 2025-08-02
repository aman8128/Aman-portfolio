import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Users, Zap } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a mission to create digital experiences that matter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-80 h-80 rounded-2xl object-cover shadow-elegant hover:shadow-glow transition-smooth"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-4">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into web development began with a curiosity about how technology can solve 
                real-world problems. What started as experimentation quickly evolved into a passion 
                for building full-stack applications that make a meaningful impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in creating scalable web applications, AI-powered tools, and 
                intelligent systems using modern technologies. From student platforms to business 
                collaboration systems, I love turning complex challenges into elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's enhancing AI models for low-resource environments or building full-stack 
                platforms with role-based dashboards, I'm driven by the potential of code to transform ideas into reality.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Passion</h4>
                <p className="text-muted-foreground">
                  Every project is built with genuine care and attention to detail
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">User-Centric</h4>
                <p className="text-muted-foreground">
                  Designing with the end user in mind, always prioritizing experience
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Performance</h4>
                <p className="text-muted-foreground">
                  Building fast, scalable solutions that perform under pressure
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                <p className="text-muted-foreground">
                  Writing maintainable, readable code that stands the test of time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;