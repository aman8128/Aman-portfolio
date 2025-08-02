import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Github, Linkedin } from "react-bootstrap-icons";
import { Mail } from "lucide-react";
import './all.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-100 h-100 object-fit-cover opacity-25"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container px-4 py-5 position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <div className="animate__animated animate__fadeIn">
              <h2 className="display-4 fw-semibold text-white mb-4 building">
                Building scalable, AI-driven, and real-world applications
              </h2>
              <p className="lead text-light mb-5 mx-auto opacity-75">
                Passionate about solving real-world problems using code. I create modern web applications,
                AI-powered tools, and scalable platforms that make a difference.
              </p>
            </div>

            <div className="animate__animated animate__fadeInUp d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
              <button
                onClick={() => navigate('/projects')}
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2"
              >
                Explore My Work
                <ArrowRight className="fs-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="animate__animated animate__fadeIn d-flex justify-content-center gap-4">
              <a
                href="https://github.com/aman8128/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
              >
                <Github className="fs-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-rajput-a916232b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
              >
                <Linkedin className="fs-4" />
              </a>
              <a
                href="mailto:r80081662@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
              >
                <Mail className="fs-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="position-absolute top-20 start-10 w-20 h-20 bg-primary bg-opacity-10 rounded-circle animate-float"></div>
      <div className="position-absolute bottom-20 end-10 w-16 h-16 bg-primary bg-opacity-20 rounded-circle animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="position-absolute top-50 start-20 w-12 h-12 bg-primary bg-opacity-15 rounded-circle animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;