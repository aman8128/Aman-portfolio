import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Download
} from "lucide-react";
import './all.css';
import resumepath from '../assets/Rajputaman_cv.pdf';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleResumeDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumepath;
    link.download = 'Rajputaman_cv.pdf'; // This will be the filename when downloaded

    // Append to body, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="font-bold text-2xl mb-4">Alex Portfolio</div>
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Creative web developer passionate about building beautiful, scalable,
                and user-friendly digital experiences. Let's bring your ideas to life.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aman8128/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-rajput-a916232b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:r80081662@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-white/80 hover:text-white transition-fast text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-white/80 hover:text-white transition-fast text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothNavigate('/projects')}
                    className="text-white/80 hover:text-white transition-fast text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-white/80 hover:text-white transition-fast text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-white/80 hover:text-white transition-fast text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">r80081662@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 8128459618</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Ghodasar, Ahmedabad India</span>
                </div>
              </div>

              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="sm"
                className="mt-4 bg-transparent top"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/80 text-sm flex items-center gap-1">
                © 2024 Aman's Portfolio.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm">Available for freelance work</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="bg-transparent top"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;